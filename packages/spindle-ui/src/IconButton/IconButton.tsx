import React, { forwardRef } from 'react';

type Size = 'large' | 'medium' | 'small' | 'exSmall';

type Variant = 'contained' | 'outlined' | 'neutral';

interface Props
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  children?: React.ReactNode;
  size?: Size;
  variant?: Variant;
}

const BLOCK_NAME = 'spui-IconButton';

export const IconButton = forwardRef<HTMLButtonElement, Props>(
  function IconButton(
    { children, size = 'large', variant = 'contained', ...rest }: Props,
    ref,
  ) {
    return (
      <button
        className={`${BLOCK_NAME} ${BLOCK_NAME}--${size} ${BLOCK_NAME}--${variant}`}
        ref={ref}
        {...rest}
      >
        {children}
      </button>
    );
  },
);
