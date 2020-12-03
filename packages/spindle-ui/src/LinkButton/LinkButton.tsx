import React, { forwardRef } from 'react';

type Layout = 'intrinsic' | 'fullWidth';

type Size = 'large' | 'medium' | 'small';

type Variant = 'contained' | 'outlined' | 'lighted' | 'neutral' | 'danger';

interface Props
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> {
  children?: React.ReactNode;
  layout?: Layout;
  size?: Size;
  variant?: Variant;
  icon?: React.ReactNode;
}

const BLOCK_NAME = 'spui-LinkButton';

export const LinkButton = forwardRef<HTMLAnchorElement, Props>(
  function LinkButton(
    {
      children,
      layout = 'intrinsic',
      size = 'large',
      variant = 'contained',
      icon,
      ...rest
    }: Props,
    ref,
  ) {
    return (
      <a
        className={`${BLOCK_NAME} ${BLOCK_NAME}--${layout} ${BLOCK_NAME}--${size} ${BLOCK_NAME}--${variant}`}
        ref={ref}
        {...rest}
      >
        {icon ? (
          <>
            <span className={`${BLOCK_NAME}-icon ${BLOCK_NAME}-icon--${size}`}>
              {icon}
            </span>
            {children}
          </>
        ) : (
          children
        )}
      </a>
    );
  },
);
