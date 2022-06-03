import React, { forwardRef } from 'react';

type Size = 'large' | 'medium' | 'small';

interface Props
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  children?: React.ReactNode;
  size?: Size;
}

const BLOCK_NAME = 'spui-SubtleButton';

export const SubtleButton = forwardRef<HTMLButtonElement, Props>(
  function SubtleButton({ children, size = 'large', ...rest }: Props, ref) {
    return (
      <button
        className={`${BLOCK_NAME} ${BLOCK_NAME}--${size}`}
        ref={ref}
        {...rest}
      >
        {children}
      </button>
    );
  },
);
