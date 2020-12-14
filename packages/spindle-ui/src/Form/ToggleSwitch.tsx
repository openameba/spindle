import React, { forwardRef } from 'react';

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'> {
  id: string;
}

const BLOCK_NAME = 'spui-ToggleSwitch';

export const ToggleSwitch = forwardRef<HTMLInputElement, Props>(
  function ToggleSwitch({ id = '', ...rest }: Props, ref) {
    return (
      <label className={BLOCK_NAME}>
        <input
          className={`${BLOCK_NAME}-input`}
          id={id}
          ref={ref}
          type="checkbox"
          {...rest}
        />
        <span className={`${BLOCK_NAME}-visual`}></span>
        <span className={`${BLOCK_NAME}-outline`}></span>
      </label>
    );
  },
);
