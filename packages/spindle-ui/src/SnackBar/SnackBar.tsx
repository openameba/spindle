import React, {
  Children,
  cloneElement,
  Dispatch,
  FC,
  HTMLAttributes,
  AnchorHTMLAttributes,
  MouseEventHandler,
  ReactNode,
  SetStateAction,
  useMemo,
} from 'react';
import { useStackNotificationComponent } from '../StackNotificationManager';
import { CrossBold } from '../Icon';
import { IconButton } from '../IconButton';
import { TextLink as SpindleTextLink } from '../TextLink/TextLink';
import { TextButton as SpindleTextButton } from '../TextButton/TextButton';
import { StackNotificationComponentProps } from '../StackNotificationManager/StackNotificationManager';

type Variant = 'information' | 'confirmation' | 'error';

type Props = StackNotificationComponentProps<{
  children?: React.ReactElement;
  active?: boolean;
  // milliseconds to hide
  duration?: number;
  onHide?: () => void;
  variant?: Variant;
}>;

export const BLOCK_NAME = 'spui-SnackBar';

// Duration for css animation.
export const ANIMATION_DURATION = 300;

const MAX_DURATION = 10000;
export const DISPLAYING_TIMEOUT_DURATION = MAX_DURATION - ANIMATION_DURATION;
const DEFAULT_VARIANT = 'information';

type InternalChildProps = {
  setIsShow?: Dispatch<SetStateAction<boolean>>;
  variant?: Variant;
};

const Frame = ({
  children,
  active: _active,
  position: _position = 'topCenter',
  offset: _offset = {},
  onHide,
  variant = DEFAULT_VARIANT,
  stackPosition = 0,
  setContentHeight,
}: Props): React.ReactElement => {
  const {
    isShow,
    active,
    shouldAnimation,
    position,
    orderOffset,
    offset,
    initialHeight,
    setIsShow,
    focusEvent: { setIsShowWithTimeout, resetTimeout },
    setClientHeight,
    handleTransitionEnd,
    handleOnClickCloseButton,
  } = useStackNotificationComponent({
    active: _active,
    position: _position,
    offset: _offset,
    onHide,
    stackPosition,
    setContentHeight,
    displayingTimeout: DISPLAYING_TIMEOUT_DURATION,
  });

  return (
    <div
      style={{
        ['--SnackBar--initial-height-top' as string]: `${initialHeight.top}px`,
        ['--SnackBar--initial-height-bottom' as string]: `${initialHeight.bottom}px`,
        ['--SnackBar--order-offset-top' as string]: `${orderOffset.top}px`,
        ['--SnackBar--order-offset-bottom' as string]: `${-orderOffset.bottom}px`,
        ['--SnackBar--offset-top' as string]: `${offset.top}px`,
        ['--SnackBar--offset-bottom' as string]: `${offset.bottom}px`,
        ['--SnackBar--offset-left' as string]: `${offset.left}px`,
        ['--SnackBar--offset-right' as string]: `${offset.right}px`,
        ['--SnackBar--text-align' as string]: position.horizontal,
      }}
      className={[
        BLOCK_NAME,
        `${BLOCK_NAME}--${position.vertical}`,
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type OwnProps = Record<string, any>;

const convertInternalChildProps = (
  props: OwnProps,
): [OwnProps, InternalChildProps] => {
  const hasInternalChildProps = (
    props: OwnProps,
  ): props is InternalChildProps =>
    ({}).hasOwnProperty.call(props, 'setIsShow') ||
    {}.hasOwnProperty.call(props, 'variant');

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
    [rest],
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
  {
    icon?: ReactNode;
    children: ReactNode;
  } & AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ icon, children, onClick, ...rest }) => {
  const [props, internalProps] = useMemo(
    () => convertInternalChildProps(rest),
    [rest],
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
