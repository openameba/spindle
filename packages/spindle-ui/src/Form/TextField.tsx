import React from 'react';

type Variant = 'large' | 'medium';

type Props = {
  hasError?: boolean;
  id: string;
  variant?: Variant; // to avoid duplication; <input> has size attribute
} & React.InputHTMLAttributes<HTMLInputElement>;

const BLOCK_NAME = 'spui-TextField';

export const TextField: React.FC<Props> = ({
  hasError = false,
  id = '',
  variant = 'medium',
  ...rest
}: Props) => {
  return (
    <input
      className={[
        `${BLOCK_NAME}`,
        `${BLOCK_NAME}--${variant}`,
        hasError ? 'is-error' : '',
      ].join(' ')}
      id={id}
      {...rest}
    />
  );
};
