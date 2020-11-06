import React from 'react';

type Layout = 'intrinsic' | 'fullWidth';

type Size = 'large' | 'medium' | 'small';

type Variant = 'contained' | 'outlined' | 'neutral' | 'danger';

type Props = {
  layout?: Layout;
  size?: Size;
  variant?: Variant;
  icon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const BLOCK_NAME = 'spui-Button';

export const Button: React.FC<Props> = ({
  children,
  layout = 'intrinsic',
  size = 'large',
  variant = 'contained',
  icon,
  ...rest
}: Props) => {
  return (
    <button
      className={`${BLOCK_NAME} ${BLOCK_NAME}--${layout} ${BLOCK_NAME}--${size} ${BLOCK_NAME}--${variant}`}
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
};
