import React, { forwardRef } from 'react';

type Variant = 'large' | 'medium';

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'> {
  hasError?: boolean;
  id: string;
  variant?: Variant; // to avoid duplication; <input> has size attribute
}

const BLOCK_NAME = 'spui-TextField';

export const TextField = forwardRef<HTMLInputElement, Props>(function TextField(
  { hasError = false, id = '', variant = 'medium', ...rest }: Props,
  ref,
) {
  return (
    <input
      className={[
        `${BLOCK_NAME}`,
        `${BLOCK_NAME}--${variant}`,
        hasError ? 'is-error' : '',
      ].join(' ')}
      id={id}
      ref={ref}
      {...rest}
    />
  );
});
