import React from 'react';

type Direction = 'row' | 'column';

type Size = 'large' | 'medium' | 'small';

type Props = {
  direction?: Direction;
  size?: Size;
} & React.HTMLAttributes<HTMLDivElement>;

const BLOCK_NAME = 'spui-ButtonGroup';

export const ButtonGroup: React.FC<Props> = ({
  children,
  className,
  direction = 'row',
  size = 'large',
  ...rest
}: Props) => {
  const classnames = [
    BLOCK_NAME,
    `${BLOCK_NAME}--${direction}`,
    `${BLOCK_NAME}--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classnames} {...rest}>
      {children}
    </div>
  );
};
