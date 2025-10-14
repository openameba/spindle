import React, { forwardRef } from 'react';

import CheckBold from '../../Icon/CheckBold';

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'> {
  children?: React.ReactNode;
  inverse?: boolean;
}

const BLOCK_NAME = 'spui-Checkbox';

export const Checkbox = forwardRef<HTMLInputElement, Props>(function Checkbox(
  { children, inverse = false, ...rest }: Props,
  ref,
) {
  return (
    <label
      className={[
        `${BLOCK_NAME}-label`,
        inverse && `${BLOCK_NAME}-label--inverse`,
      ]
        .filter(Boolean)
        .join(' ')}
    >
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
