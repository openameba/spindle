import React, { forwardRef } from 'react';

type Variant = 'subtle';

interface Props
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> {
  children?: React.ReactNode;
  disableUnderline?: boolean;
  variant?: Variant;
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
}

const BLOCK_NAME = 'spui-TextLink';

export const TextLink = forwardRef<HTMLAnchorElement, Props>(function TextLink(
  { children, disableUnderline, variant, icon, iconPosition, ...rest }: Props,
  ref,
) {
  return (
    <a
      className={[
        BLOCK_NAME,
        variant && `${BLOCK_NAME}--${variant}`,
        disableUnderline && `${BLOCK_NAME}--disableUnderline`,
        icon && `${BLOCK_NAME}--hasIcon`,
        icon && iconPosition && `${BLOCK_NAME}--icon${iconPosition}`,
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
