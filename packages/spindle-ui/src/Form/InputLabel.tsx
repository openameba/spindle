import React from 'react';

type Props = {
  id: string;
} & Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'className'>; // Layout styles should be added at containers

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
