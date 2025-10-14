import React from 'react';

interface Props
  extends Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'className'> {
  children?: React.ReactNode;
  id: string;
}

const BLOCK_NAME = 'spui-InputLabel';

export const InputLabel: React.FC<Props> = ({
  children,
  id = '',
  ...rest
}: Props) => {
  return (
    <label className={BLOCK_NAME} htmlFor={id} {...rest}>
      {children}
    </label>
  );
};
