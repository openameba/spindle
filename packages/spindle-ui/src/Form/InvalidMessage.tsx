import React from 'react';

import ExclamationmarkCircleFill from '../Icon/ExclamationmarkCircleFill';

interface Props
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, 'className'> {
  children?: React.ReactNode;
  visible?: boolean;
}

const BLOCK_NAME = 'spui-InvalidMessage';

export const InvalidMessage: React.FC<Props> = ({
  children,
  visible = false,
  ...rest
}: Props) => {
  return (
    <p className={BLOCK_NAME} hidden={!visible} {...rest}>
      <span className={`${BLOCK_NAME}-icon`}>
        <ExclamationmarkCircleFill aria-hidden="true" />
      </span>
      <span className={`${BLOCK_NAME}-body`}>{children}</span>
    </p>
  );
};
