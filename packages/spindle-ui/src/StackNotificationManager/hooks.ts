import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ManagedStack,
  StackNotificationManagerProperties,
  StackNotificationManagerProps,
  StackOffset,
  StackPosition,
  StackPositionOffset,
  useStackNotificationManagerContext,
} from './StackNotificationManager';

const MAX_STACK_SIZE_DESKTOP = 4;
const MAX_STACK_SIZE_MOBILE = 3;

/**
 * Fallback for `MediaQueryList.onchange`
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/matches
 */
function addMQListener(
  mq: MediaQueryList,
  callback: (evt: MediaQueryListEvent) => void,
) {
  if (mq.addEventListener) {
    mq.addEventListener('change', callback);
  } else {
    mq.addListener(callback);
  }
}

/**
 * Fallback for `MediaQueryList.onchange`
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/matches
 */
function removeMQListener(
  mq: MediaQueryList,
  callback: (evt: MediaQueryListEvent) => void,
) {
  if (mq.removeEventListener) {
    mq.removeEventListener('change', callback);
  } else {
    mq.removeListener(callback);
  }
}

const useBreakpoint = (breakpoint: string): boolean => {
  const mql = useRef(
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia(breakpoint)
      : undefined,
  );
  const [matches, setMatches] = useState(() =>
    mql.current ? mql.current.matches : false,
  );

  const handleSetMatches = useCallback(
    (e: MediaQueryListEvent) => setMatches(e.matches),
    [],
  );

  useEffect(() => {
    const current = mql.current;
    if (current) {
      addMQListener(current, handleSetMatches);
    }
    return () => {
      if (current) {
        removeMQListener(current, handleSetMatches);
      }
    };
  }, [handleSetMatches]);

  return matches;
};

const useMaxStackSize = () => {
  const isMobile = useBreakpoint('(max-width: 464px)');
  return isMobile ? MAX_STACK_SIZE_MOBILE : MAX_STACK_SIZE_DESKTOP;
};

export const useStackInteraction = <
  P extends StackPosition = StackPosition,
>() => {
  const { setStack, setOffset: _setOffset } =
    useStackNotificationManagerContext();
  const maxStackSize = useMaxStackSize();

  const setActive = useCallback(
    ({
      id,
      active,
      position,
    }: {
      id: string;
      active: boolean;
      position: P;
    }) => {
      setStack((prev) => {
        const _stack: ManagedStack[keyof ManagedStack] = prev[position] || [];
        const stack = [..._stack];
        let specifiedItem = stack.find((item) => item.id === id);
        if (!specifiedItem) {
          specifiedItem = {
            id,
            active: false,
            order: 0,
            isPreservingInternalActive: false,
            contentHeight: 0,
          };
          stack.push(specifiedItem);
        }

        const shouldUpdate =
          specifiedItem?.active !== active ||
          specifiedItem?.isPreservingInternalActive;

        if (!shouldUpdate) {
          return prev;
        }

        const totalActiveItems = stack.reduce(
          (res, v) =>
            v.active || v.isPreservingInternalActive ? res + 1 : res,
          0,
        );
        const isOverMaxStackSize = totalActiveItems >= maxStackSize;

        if (active && isOverMaxStackSize) {
          stack
            .sort((a, b) => (a.order > b.order ? 1 : -1))
            .find((item) => {
              if (item.active && !item.isPreservingInternalActive) {
                item.active = false;
                item.isPreservingInternalActive = true;
                return true;
              }
              return false;
            });
        }

        return {
          ...prev,
          [position]: stack.map((s) => {
            const next = { ...s };
            if (next.id === id) {
              next.active = active;
              next.isPreservingInternalActive = false;
            }

            if (
              next.id !== id &&
              !active &&
              (specifiedItem?.order || 0) <= next.order
            ) {
              next.order = Math.max(next.order - 1, 0);
            }
            if (next.id === id && active) {
              next.order = totalActiveItems;
            }
            return next;
          }),
        };
      });
    },
    [maxStackSize, setStack],
  );

  const setOffset = useCallback(
    ({
      offset,
      position,
    }: {
      offset: StackOffset<P>[keyof StackOffset<P>];
      position: P;
    }) => {
      _setOffset((prev) => ({ ...prev, [position]: offset }));
    },
    [_setOffset],
  );

  const setContentHeight = useCallback(
    ({ id, height, position }: { id: string; height: number; position: P }) => {
      setStack((prev) => {
        const _stack: ManagedStack[keyof ManagedStack] = prev[position] || [];
        const stack = [..._stack];
        const specifiedItem = stack.find((item) => item.id === id);
        if (!specifiedItem) {
          return prev;
        }

        const next = { ...specifiedItem };
        next.contentHeight = height;

        return {
          ...prev,
          [position]: stack.map((s) => (s.id === id ? next : s)),
        };
      });
    },
    [setStack],
  );

  return {
    setActive,
    setOffset,
    setContentHeight,
  };
};

export const useStackNotificationManager = <
  P extends StackPosition = StackPosition,
>({
  id,
  position,
}: {
  id: string;
  position: P;
}) => {
  const { stackRef, setStack, offset } = useStackNotificationManagerContext();
  const stack = stackRef.current;
  const {
    setActive: _setActive,
    setOffset: _setOffset,
    setContentHeight: _setContentHeight,
  } = useStackInteraction<P>();

  const setActive = useCallback(
    (active: boolean) => {
      _setActive({ id, active, position });
    },
    [id, position, _setActive],
  );

  const setOffset = useCallback(
    (offset: StackOffset[keyof StackOffset]) => {
      _setOffset({ position, offset });
    },
    [position, _setOffset],
  );

  const setContentHeight = useCallback(
    (height: number) => {
      _setContentHeight({ id, position, height });
    },
    [id, position, _setContentHeight],
  );

  useEffect(() => {
    setStack((prev) => {
      const stack: ManagedStack[keyof ManagedStack] = prev[position] || [];
      const item = stack?.find((s) => s.id === id);
      if (item) {
        return prev;
      }

      // If stack item does not find, create stack item.
      return {
        ...prev,
        [position]: [
          ...stack,
          {
            id,
            active: false,
            order: 0,
            contentHeight: 0,
          },
        ],
      };
    });

    return () => {
      setStack((prev) => {
        return {
          ...prev,
          [position]: [...(prev[position]?.filter((s) => s.id !== id) || [])],
        };
      });
    };
  }, [id, position, setStack]);

  const item = useMemo(
    () => stack[position]?.find((s) => s.id === id),
    [stack, id, position],
  );

  const stackPosition = useMemo(() => {
    const _stackItem: ManagedStack[keyof ManagedStack] = stack[position] || [];
    const stackItem = [..._stackItem];
    return stackItem
      .sort((a, b) => (a.order > b.order ? 1 : -1))
      .reduce(
        (res, v) =>
          (v.active || v.isPreservingInternalActive) &&
          v.order < (item?.order || 0)
            ? res + v.contentHeight
            : res,
        0,
      );
  }, [item?.order, position, stack]);

  const stackProps: StackNotificationManagerProps = {
    ...(item || {}),
    position,
    offset: offset[position],
    stackPosition,
    setContentHeight,
  };

  return {
    stackProps,
    setActive,
    setOffset,
  };
};

export const useRepeatedStackItem = <P extends StackPosition = StackPosition>({
  id,
  position,
}: {
  id: string;
  position: P;
}) => {
  const [idList, setIdList] = useState<string[]>([]);
  const lastIndex = useRef(0);
  const { setActive } = useStackInteraction();
  const append = useCallback(() => {
    const nextId = `${id}-${lastIndex.current}`;
    lastIndex.current += 1;
    setActive({ id: nextId, position, active: true });
    setIdList((prev) => [...prev, nextId]);
  }, [id, position, setActive]);
  const onHide = useCallback(
    (id) => {
      setActive({ id, position, active: false });
      setIdList((prev) => prev.filter((item) => item !== id));
    },
    [position, setActive],
  );

  return {
    idList,
    append,
    onHide,
  };
};

const VERTICAL_GAP = 20;

export const useStackNotificationComponent = <
  P extends StackPosition = StackPosition,
>({
  active: stackActive,
  offset: stackOffset = {},
  position = 'topCenter' as P,
  stackPosition = 0,
  setContentHeight,
  animationDuration,
  onHide,
}: {
  [K in keyof Omit<
    StackNotificationManagerProperties<P>,
    'id' | 'order' | 'contentHeight' | 'isPreservingInternalActive'
  >]: StackNotificationManagerProperties<P>[K] | undefined;
} & {
  animationDuration: number;
  onHide: (() => void) | undefined;
}) => {
  const [isShow, setIsShow] = useState(false);
  const offset: StackPositionOffset = {
    top: stackOffset.top ?? 24,
    // If position is top or bottom, then horizontal offset is not needed.
    left: position.endsWith('Left') ? stackOffset.left ?? 32 : 0,
    right: position.endsWith('Right') ? stackOffset.right ?? 32 : 0,
    bottom: stackOffset.bottom ?? 24,
  };
  const timeoutID = useRef<number | null>(null);
  const [clientHeight, setClientHeight] = useState(0);
  const [shouldAnimation, setShouldAnimation] = useState(false);
  const [active, setActive] = useState(false);

  const setIsShowWithTimeout = useCallback(() => {
    // Out animation is executed after `animationDuration` seconds.
    if (timeoutID.current === null && isShow) {
      timeoutID.current = window.setTimeout(() => {
        setIsShow(false);
      }, animationDuration);
    }
  }, [isShow, timeoutID, setIsShow, animationDuration]);

  const resetTimeout = useCallback(() => {
    if (timeoutID.current) {
      window.clearTimeout(timeoutID.current);
      timeoutID.current = null;
    }
  }, [timeoutID]);

  const handleTransitionEnd = useCallback(() => {
    if (onHide && !isShow) {
      onHide();
      setActive(false);
      timeoutID.current = null;
    }
  }, [isShow, onHide]);

  const handleOnClickCloseButton = useCallback(() => {
    setIsShow(false);
  }, []);

  useEffect(() => {
    if (isShow) {
      setShouldAnimation(true);
    }
    if (!active) {
      setShouldAnimation(false);
    }
  }, [active, isShow]);

  useEffect(() => {
    setIsShowWithTimeout();
    return resetTimeout;
  }, [setIsShowWithTimeout, resetTimeout]);

  useEffect(() => {
    if (stackActive) {
      setActive(true);
    }
    if (!stackActive && isShow) {
      setIsShow(false);
    }
  }, [stackActive, isShow]);

  useEffect(() => {
    if (active) {
      // To animate notification component smoothly, setIsShow needs to be executed after updating active prop to true.
      setIsShow(true);
    }
  }, [active]);

  useEffect(() => {
    setContentHeight?.(clientHeight + VERTICAL_GAP);
  }, [clientHeight, setContentHeight]);

  const positionPrefix = position.startsWith('top')
    ? ('top' as const)
    : ('bottom' as const);
  const positionSuffix = position.slice(positionPrefix.length).toLowerCase() as
    | 'left'
    | 'center'
    | 'right';
  const orderOffsetTop = stackPosition + offset.top;
  const orderOffsetBottom = stackPosition + offset.bottom;

  return {
    active,
    isShow,
    clientHeight,
    shouldAnimation,
    position: {
      vertical: positionPrefix,
      horizontal: positionSuffix,
    },
    /**
     * This is total height of stack from the top of the window to the bottom(top) of the notification component,
     * including the height of the component.
     */
    orderOffset: {
      top: orderOffsetTop,
      bottom: orderOffsetBottom,
    },
    /**
     * Offset from the edge of the window to the first stacked item.
     */
    offset,
    /**
     *
     */
    initialHeight: {
      top: orderOffsetTop - clientHeight + VERTICAL_GAP,
      bottom: orderOffsetBottom - clientHeight + VERTICAL_GAP,
    },
    /**
     * This is used to handle stopping animation when user is focus on notification component.
     */
    focusEvent: {
      setIsShowWithTimeout,
      resetTimeout,
    },
    setIsShow,
    /**
     * This is used to set notification component height.
     */
    setClientHeight,
    /**
     * This is used to handle animation end.
     */
    handleTransitionEnd,
    handleOnClickCloseButton,
  };
};
