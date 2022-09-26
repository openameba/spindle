import React, { ReactNode } from 'react';

type Position = 'fixed' | 'sticky';

type Props = {
  position?: Position;
  children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const BLOCK_NAME = 'spui-BottomButton';

export const BottomButton: React.FC<Props> = ({
  children,
  className,
  position = 'fixed',
  ...rest
}: Props) => {
  const classnames = [BLOCK_NAME, `${BLOCK_NAME}--${position}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classnames} {...rest}>
      <div className={`${BLOCK_NAME}-wrap`}>{children}</div>
    </div>
  );
};
