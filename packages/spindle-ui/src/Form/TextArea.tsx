import React from 'react';

type Props = {
  hasError?: boolean;
  id: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const BLOCK_NAME = 'spui-TextArea';

export const TextArea: React.FC<Props> = ({
  children,
  hasError = false,
  id = '',
  ...rest
}: Props) => {
  return (
    <textarea
      className={[`${BLOCK_NAME}`, hasError ? 'is-error' : ''].join(' ')}
      id={id}
      {...rest}
    >
      {children}
    </textarea>
  );
};
