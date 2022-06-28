import React, { forwardRef } from 'react';

type Variant = 'subtle';

interface Props
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> {
  children?: React.ReactNode;
  variant?: Variant;
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
  underline?: 'hover';
}

const BLOCK_NAME = 'spui-TextLink';

export const TextLink = forwardRef<HTMLAnchorElement, Props>(function TextLink(
  { children, variant, icon, iconPosition, underline, ...rest }: Props,
  ref,
) {
  return (
    <a
      className={[
        BLOCK_NAME,
        variant && `${BLOCK_NAME}--${variant}`,
        icon && `${BLOCK_NAME}--hasIcon`,
        icon && iconPosition && `${BLOCK_NAME}--icon${iconPosition}`,
        underline && `${BLOCK_NAME}--underline${underline}`,
      ]
        .filter(Boolean)
        .join(' ')}
      ref={ref}
      {...rest}
    >
      {icon ? (
        <>
          <span className={`${BLOCK_NAME}-icon`}>{icon}</span>
          {children}
        </>
      ) : (
        children
      )}
    </a>
  );
});
