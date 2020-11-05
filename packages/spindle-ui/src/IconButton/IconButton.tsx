import React from 'react';

type Size = 'large' | 'medium' | 'small' | 'exSmall';

type Variant = 'contained' | 'outlined' | 'neutral';

type Props = {
  size?: Size;
  variant?: Variant;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const BLOCK_NAME = 'spui-IconButton';

export const IconButton: React.FC<Props> = ({
  children,
  size = 'large',
  variant = 'contained',
  ...rest
}: Props) => {
  return (
    <button
      className={`${BLOCK_NAME} ${BLOCK_NAME}--${size} ${BLOCK_NAME}--${variant}`}
      {...rest}
    >
      {children}
    </button>
  );
};
