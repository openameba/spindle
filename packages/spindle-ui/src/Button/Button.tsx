import React, { forwardRef } from 'react';

type Layout = 'intrinsic' | 'fullWidth';

type Size = 'large' | 'medium' | 'small';

type Variant = 'contained' | 'outlined' | 'lighted' | 'neutral' | 'danger';

type Props = {
  layout?: Layout;
  size?: Size;
  variant?: Variant;
  icon?: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'>; // Layout styles should be added at containers

const BLOCK_NAME = 'spui-Button';

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
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
    <button
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
    </button>
  );
});
