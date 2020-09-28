import React from 'react';

type Props = {
  visible?: boolean;
} & React.HTMLAttributes<HTMLParagraphElement>;

const BLOCK_NAME = 'spui-InvalidMessage';

export const InvalidMessage: React.FC<Props> = ({
  children,
  visible = false,
  ...rest
}: Props) => {
  return (
    // TODO: display icon
    <p className={BLOCK_NAME} hidden={!visible} {...rest}>
      {children}
    </p>
  );
};
