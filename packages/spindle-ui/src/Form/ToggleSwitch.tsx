import React from 'react';

type Props = {
  id: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const BLOCK_NAME = 'spui-ToggleSwitch';

export const ToggleSwitch: React.FC<Props> = ({ id = '', ...rest }: Props) => {
  return (
    <label className={BLOCK_NAME}>
      <input
        className={`${BLOCK_NAME}-input`}
        id={id}
        type="checkbox"
        {...rest}
      />
      <span className={`${BLOCK_NAME}-visual`}></span>
      <span className={`${BLOCK_NAME}-outline`}></span>
    </label>
  );
};
