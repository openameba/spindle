import React from 'react';

import { CheckBold } from '../Icon';

type Props = {
  id: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'>; // Layout styles should be added at containers

const BLOCK_NAME = 'spui-Radio';

export const Radio: React.FC<Props> = ({
  children,
  id = '',
  ...rest
}: Props) => {
  return (
    <label className={`${BLOCK_NAME}-label`} htmlFor={id}>
      <input className={`${BLOCK_NAME}-input`} id={id} type="radio" {...rest} />
      <span className={`${BLOCK_NAME}-icon`}>
        <CheckBold aria-hidden="true" />
      </span>
      <span className={`${BLOCK_NAME}-outline`}></span>
      {children && <span className={`${BLOCK_NAME}-text`}>{children}</span>}
    </label>
  );
};
