import React, {
  Children,
  cloneElement,
  Dispatch,
  FC,
  HTMLAttributes,
  MouseEventHandler,
  ReactNode,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  StackPosition,
  StackPositionOffset,
} from '../StackNotificationManager';
import { CrossBold } from '../Icon';
import { IconButton } from '../IconButton';
import { TextLink as SpindleTextLink } from '../TextLink/TextLink';
import { TextButton as SpindleTextButton } from '../TextButton/TextButton';

type Variant = 'information' | 'confirmation' | 'error';

type Props = {
  children?: React.ReactElement;
  active?: boolean;
  offset?: { [K in keyof StackPositionOffset]?: StackPositionOffset[K] };
  // milliseconds to hide
  duration?: number;
  onHide?: () => void;
  position?: StackPosition;
  variant?: Variant;
  setContentHeight?: (height: number) => void;
  stackPosition?: number;
};

export const BLOCK_NAME = 'spui-SnackBar';

// Duration for css animation.
export const ANIMATION_DURATION = 300;

export const MAX_DURATION = 10000;
const VERTICAL_GAP = 20;
const DEFAULT_VARIANT = 'information';

type InternalChildProps = {
  setIsShow?: Dispatch<SetStateAction<boolean>>;
  variant?: Variant;
};

const Frame = ({
  children,
  active: _active,
  position = 'topCenter',
  offset: _offset = {},
  onHide,
  variant = DEFAULT_VARIANT,
  stackPosition = 0,
  setContentHeight,
}: Props): React.ReactElement => {
  const [isShow, setIsShow] = useState(false);
  const offset: StackPositionOffset = {
    top: _offset.top ?? 24,
    // If position is top or bottom, then horizontal offset is not needed.
    left: position.endsWith('Left') ? _offset.left ?? 32 : 0,
    right: position.endsWith('Right') ? _offset.right ?? 32 : 0,
    bottom: _offset.bottom ?? 24,
  };
  const formattedDuration = MAX_DURATION - ANIMATION_DURATION;
  const timeoutID = useRef<number | null>(null);
  const [clientHeight, setClientHeight] = useState(0);
  const [shouldAnimation, setShouldAnimation] = useState(false);
  const [active, setActive] = useState(false);

  const setIsShowWithTimeout = useCallback(() => {
    // Out animation is executed after `formattedDuration` seconds.
    if (timeoutID.current === null && isShow) {
      timeoutID.current = window.setTimeout(() => {
        setIsShow(false);
      }, formattedDuration);
    }
  }, [isShow, timeoutID, setIsShow, formattedDuration]);

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
  }, [isShow, setIsShow, onHide]);

  const handleOnClickCloseButton = useCallback(() => {
    setIsShow(false);
  }, []);

  useEffect(() => {
    // Animation is not stopped even if `active` props is changed while running animation.
    if (active && timeoutID.current === null) {
      // Wait for applying transition until style is determined.
      setShouldAnimation(true);
      setIsShow(true);
    }

    if (!active) {
      setShouldAnimation(false);
    }
  }, [active]);

  useEffect(() => {
    setIsShowWithTimeout();
    return resetTimeout;
  }, [setIsShowWithTimeout, resetTimeout]);

  useEffect(() => {
    if (_active) {
      setActive(true);
    }
    if (!_active && isShow) {
      setIsShow(false);
    }
  }, [_active, isShow]);

  useEffect(() => {
    setContentHeight?.(clientHeight + VERTICAL_GAP);
  }, [clientHeight]);

  const positionPrefix = position.startsWith('top') ? 'top' : 'bottom';
  const positionSuffix = position.slice(positionPrefix.length).toLowerCase() as
    | 'left'
    | 'center'
    | 'right';
  const orderOffsetTop = stackPosition + offset.top;
  const orderOffsetBottom = stackPosition + offset.bottom;

  return (
    <div
      style={{
        ['--SnackBar--initial-height-top' as string]: `${
          orderOffsetTop - clientHeight + offset.top
        }px`,
        ['--SnackBar--initial-height-bottom' as string]: `${
          orderOffsetBottom - clientHeight + offset.bottom
        }px`,
        ['--SnackBar--order-offset-top' as string]: `${orderOffsetTop}px`,
        ['--SnackBar--order-offset-bottom' as string]: `${-orderOffsetBottom}px`,
        ['--SnackBar--offset-top' as string]: `${offset.top}px`,
        ['--SnackBar--offset-bottom' as string]: `${offset.bottom}px`,
        ['--SnackBar--offset-left' as string]: `${offset.left}px`,
        ['--SnackBar--offset-right' as string]: `${offset.right}px`,
        ['--SnackBar--text-align' as string]: positionSuffix,
      }}
      className={[
        BLOCK_NAME,
        `${BLOCK_NAME}--${positionPrefix}`,
        shouldAnimation && `${BLOCK_NAME}--slide`,
        isShow && `${BLOCK_NAME}-slide--in`,
        !active && `${BLOCK_NAME}--hidden`,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-hidden={!active}
      onTransitionEnd={handleTransitionEnd}
      ref={(ref) => setClientHeight(ref?.clientHeight || 0)}
    >
      <div
        className={`${BLOCK_NAME}-content ${BLOCK_NAME}-content--${variant}`}
        onMouseOver={resetTimeout}
        onMouseOut={setIsShowWithTimeout}
        onFocus={resetTimeout}
        onBlur={setIsShowWithTimeout}
      >
        {Children.map(children, (child) =>
          child ? cloneElement(child, { variant, setIsShow }) : child,
        )}
        <div
          className={`${BLOCK_NAME}-iconButton ${BLOCK_NAME}-iconButton--${variant}`}
          onTransitionEnd={(e) => e.stopPropagation()}
        >
          <IconButton
            size="exSmall"
            variant="neutral"
            onClick={handleOnClickCloseButton}
          >
            <CrossBold aria-label="閉じる" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

type OwnProps = Record<string, any>;

const convertInternalChildProps = (
  props: OwnProps,
): [OwnProps, InternalChildProps] => {
  const hasInternalChildProps = (
    props: OwnProps,
  ): props is InternalChildProps =>
    ({}.hasOwnProperty.call(props, 'setIsShow') ||
    {}.hasOwnProperty.call(props, 'variant'));

  if (hasInternalChildProps(props)) {
    const result = {
      setIsShow: props.setIsShow,
      variant: props.variant,
    };

    // Remove unnecessary props.
    delete props.setIsShow;
    delete props.variant;

    return [props, result];
  }
  return [props, {}];
};

const Icon: FC<{ children: ReactNode }> = ({ children }) => (
  <div className={`${BLOCK_NAME}-icon`}>{children}</div>
);
const Text: FC<{ children: ReactNode }> = ({ children }) => (
  <span className={`${BLOCK_NAME}-text`}>{children}</span>
);
const TextButton: FC<
  { icon?: ReactNode; children: ReactNode } & HTMLAttributes<HTMLButtonElement>
> = ({ icon, children, onClick, ...rest }) => {
  const [props, internalProps] = useMemo(
    () => convertInternalChildProps(rest),
    [],
  );
  const variant = internalProps.variant || DEFAULT_VARIANT;
  const setIsShow = internalProps.setIsShow;
  const handleOnClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    onClick?.(e);
    setIsShow?.(false);
  };
  return (
    <div className={`${BLOCK_NAME}-button ${BLOCK_NAME}-button--${variant}`}>
      <SpindleTextButton icon={icon} onClick={handleOnClick} {...props}>
        {children}
      </SpindleTextButton>
    </div>
  );
};
const TextLink: FC<
  { icon?: ReactNode; children: ReactNode } & HTMLAttributes<HTMLAnchorElement>
> = ({ icon, children, onClick, ...rest }) => {
  const [props, internalProps] = useMemo(
    () => convertInternalChildProps(rest),
    [],
  );
  const variant = internalProps.variant || DEFAULT_VARIANT;
  const setIsShow = internalProps.setIsShow;
  const handleOnClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    onClick?.(e);
    setIsShow?.(false);
  };
  return (
    <div className={`${BLOCK_NAME}-button ${BLOCK_NAME}-button--${variant}`}>
      <SpindleTextLink icon={icon} onClick={handleOnClick} {...props}>
        {children}
      </SpindleTextLink>
    </div>
  );
};

export const SnackBar = {
  Frame,
  Icon,
  Text,
  TextButton,
  TextLink,
};
