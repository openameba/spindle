import React from 'react';

type Props = {
  hasError?: boolean;
  id: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const BLOCK_NAME = 'spui-TextField';

export const TextField: React.FC<Props> = ({
  hasError = false,
  id = '',
  ...rest
}: Props) => {
  return (
    <input
      className={[`${BLOCK_NAME}`, hasError ? 'is-error' : ''].join(' ')}
      id={id}
      {...rest}
    />
  );
};
