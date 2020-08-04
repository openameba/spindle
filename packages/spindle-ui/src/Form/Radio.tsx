import React from 'react';

type Props = {
  id: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const BLOCK_NAME = 'spui-Radio';

export const Radio: React.FC<Props> = ({
  children,
  id = '',
  ...rest
}: Props) => {
  return (
    <label className={`${BLOCK_NAME}-label`} htmlFor={id}>
      <input className={`${BLOCK_NAME}-input`} id={id} type="radio" {...rest} />
      {/* TODO: insert check icon */}
      <span className={`${BLOCK_NAME}-icon`}></span>
      <span className={`${BLOCK_NAME}-outline`}></span>
      {children}
    </label>
  );
};
