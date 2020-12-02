import React, { forwardRef } from 'react';

interface Props
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'> {
  children?: React.ReactNode;
  hasError?: boolean;
  id: string;
}

const BLOCK_NAME = 'spui-TextArea';

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  function TextArea(
    { children, hasError = false, id = '', ...rest }: Props,
    ref,
  ) {
    return (
      <textarea
        className={[`${BLOCK_NAME}`, hasError ? 'is-error' : ''].join(' ')}
        id={id}
        ref={ref}
        {...rest}
      >
        {children}
      </textarea>
    );
  },
);
