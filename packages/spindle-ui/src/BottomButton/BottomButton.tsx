import React, { type ReactNode } from 'react';

type Position = 'fixed' | 'sticky';

type Props = {
  children: ReactNode;
  className?: string;
  position?: Position;
};

const BLOCK_NAME = 'spui-BottomButton';

export const BottomButton: React.FC<Props> = ({
  children,
  className = '',
  position = 'fixed',
}: Props) => {
  const classnames = [BLOCK_NAME, `${BLOCK_NAME}--${position}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classnames}>
      <div className={`${BLOCK_NAME}-wrap`}>{children}</div>
    </div>
  );
};
