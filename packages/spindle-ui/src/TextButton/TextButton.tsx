import React, { forwardRef } from 'react';

type Variant = 'subtle';

interface Props
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  children?: React.ReactNode;
  variant?: Variant;
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
  underline?: 'hover';
}

const BLOCK_NAME = 'spui-TextButton';

export const TextButton = forwardRef<HTMLButtonElement, Props>(
  function TextButton(
    { children, variant, icon, iconPosition, underline, ...rest }: Props,
    ref,
  ) {
    return (
      <button
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
      </button>
    );
  },
);
