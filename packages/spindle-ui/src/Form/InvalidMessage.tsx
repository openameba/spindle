import React from 'react';

import { ExclamationmarkCircleFill } from '../Icon';

type Props = {
  visible?: boolean;
} & React.HTMLAttributes<HTMLParagraphElement>;

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
      {children}
    </p>
  );
};
