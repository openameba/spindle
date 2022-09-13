import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ManagedStack,
  StackNotificationManagerProps,
  StackOffset,
  StackPosition,
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
