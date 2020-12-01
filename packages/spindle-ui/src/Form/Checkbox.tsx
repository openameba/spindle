import React, { forwardRef } from 'react';

import { CheckBold } from '../Icon';

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'>; // Layout styles should be added at containers

const BLOCK_NAME = 'spui-Checkbox';

export const Checkbox = forwardRef<HTMLInputElement, Props>(function Checkbox(
  { children, ...rest }: Props,
  ref,
) {
  return (
    <label className={`${BLOCK_NAME}-label`}>
      <input
        className={`${BLOCK_NAME}-input`}
        ref={ref}
        type="checkbox"
        {...rest}
      />
      <span className={`${BLOCK_NAME}-icon`}>
        <CheckBold aria-hidden="true" />
      </span>
      <span className={`${BLOCK_NAME}-outline`}></span>
      {children && <span className={`${BLOCK_NAME}-text`}>{children}</span>}
    </label>
  );
});
