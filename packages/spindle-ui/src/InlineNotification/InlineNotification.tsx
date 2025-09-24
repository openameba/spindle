import React, {
  Children,
  cloneElement,
  type FC,
  Fragment,
  type HTMLAttributes,
  isValidElement,
  type ReactNode,
  useCallback,
  useMemo,
} from 'react';
import { Button as SpindleButton } from '../Button/Button';
import { IconButton as SpindleIconButton } from '../IconButton/IconButton';
import { TextButton as SpindleTextButton } from '../TextButton/TextButton';

type Variant = 'information' | 'confirmation' | 'error';
type Layout = 'inset' | 'full';

type Props = {
  children?: ReactNode;
  variant?: Variant;
  emphasis?: boolean;
  layout?: Layout;
  visible?: boolean;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'className'>;

const BLOCK_NAME = 'spui-InlineNotification';
const DEFAULT_VARIANT = 'information';
const DEFAULT_EMPHASIS = false;
const DEFAULT_LAYOUT = 'inset';
const DEFAULT_VISIBLE = false;

type ButtonVariant = 'neutral' | 'danger' | 'contained' | 'outlined';
const computedButtonVariant = (
  variant: Variant,
  emphasis: boolean,
): ButtonVariant => {
  if (variant === 'confirmation') {
    return emphasis ? 'contained' : 'outlined';
  } else if (variant === 'error') {
    return 'danger';
  } else {
    return 'neutral';
  }
};

const Frame: FC<Props> = ({
  children,
  variant = DEFAULT_VARIANT,
  emphasis = DEFAULT_EMPHASIS,
  layout = DEFAULT_LAYOUT,
  visible = DEFAULT_VISIBLE,
  ...rest
}) => {
  const processChildren = useCallback(
    (children: ReactNode): ReactNode =>
      Children.map(children, (child) => {
        if (!isValidElement(child)) {
          return child;
        }
        if (child.type === Fragment) {
          const fragmentChildren = child.props.children;
          return processChildren(fragmentChildren);
        }
        const additionalProps = { variant, emphasis };
        return cloneElement(child, additionalProps);
      }),
    [variant, emphasis],
  );

  const processedChildren = useMemo(
    () => processChildren(children),
    [processChildren, children],
  );

  return (
    <div
      className={[
        `${BLOCK_NAME}`,
        `${BLOCK_NAME}--${variant}`,
        emphasis && `${BLOCK_NAME}--emphasized`,
        layout === 'full' && `${BLOCK_NAME}--full`,
      ]
        .filter(Boolean)
        .join(' ')}
      hidden={!visible}
      {...rest}
    >
      <div className={`${BLOCK_NAME}-content`}>{processedChildren}</div>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type OwnProps = Record<string, any>;
type InternalChildProps = {
  variant?: Variant;
  emphasis?: boolean;
};

const convertInternalChildProps = (
  props: OwnProps,
): [OwnProps, InternalChildProps] => {
  const hasInternalChildProps = (
    props: OwnProps,
  ): props is InternalChildProps =>
    Object.hasOwn(props, 'variant') || Object.hasOwn(props, 'emphasis');

  if (hasInternalChildProps(props)) {
    const result = {
      variant: props.variant,
      emphasis: props.emphasis,
    };

    delete props.variant;
    delete props.emphasis;

    return [props, result];
  }
  return [props, {}];
};

const Icon: FC<{
  children: ReactNode;
}> = ({ children }) => <div className={`${BLOCK_NAME}-icon`}>{children}</div>;
const Avatar: FC<{ src: string; alt?: string }> = ({ src, alt = '' }) => (
  <div className={`${BLOCK_NAME}-avatar`}>
    <img className={`${BLOCK_NAME}-avatarInner`} src={src} alt={alt} />
  </div>
);
const Text: FC<{
  children: ReactNode;
}> = ({ children }) => <p className={`${BLOCK_NAME}-text`}>{children}</p>;
const Button: FC<
  { children: ReactNode } & HTMLAttributes<HTMLButtonElement>
> = ({ children, ...rest }) => {
  const [props, internalProps] = useMemo(
    () => convertInternalChildProps(rest),
    [rest],
  );
  const variant = internalProps.variant || DEFAULT_VARIANT;
  const emphasis = internalProps.emphasis || DEFAULT_EMPHASIS;
  const buttonVariant: ButtonVariant = computedButtonVariant(variant, emphasis);
  return (
    <div className={`${BLOCK_NAME}-button`}>
      <SpindleButton variant={buttonVariant} size="small" {...props}>
        {children}
      </SpindleButton>
    </div>
  );
};
const TextButton: FC<
  {
    children: ReactNode;
  } & HTMLAttributes<HTMLButtonElement>
> = ({ children, ...rest }) => {
  return (
    <div className={`${BLOCK_NAME}-textButton`}>
      <SpindleTextButton underline="hover" {...rest}>
        {children}
      </SpindleTextButton>
    </div>
  );
};
const IconButton: FC<{ children: ReactNode }> = ({ children, ...rest }) => {
  const [props, internalProps] = useMemo(
    () => convertInternalChildProps(rest),
    [rest],
  );
  const variant = internalProps.variant || DEFAULT_VARIANT;
  const emphasis = internalProps.emphasis || DEFAULT_EMPHASIS;
  const buttonVariant: ButtonVariant = computedButtonVariant(variant, emphasis);
  return (
    <div className={`${BLOCK_NAME}-iconButton`}>
      <SpindleIconButton size="exSmall" variant={buttonVariant} {...props}>
        {children}
      </SpindleIconButton>
    </div>
  );
};

export const InlineNotification = {
  Frame,
  Icon,
  Avatar,
  Text,
  Button,
  TextButton,
  IconButton,
};
