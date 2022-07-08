import React, { forwardRef } from 'react';
import { ChevronRightBold } from '../Icon';

interface Props
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> {
  children?: React.ReactNode;
}

const BLOCK_NAME = 'spui-MoreLink';

export const MoreLink = forwardRef<HTMLAnchorElement, Props>(function MoreLink(
  { children, ...rest }: Props,
  ref,
) {
  return (
    <a className={BLOCK_NAME} ref={ref} {...rest}>
      {children}
      <span className={`${BLOCK_NAME}-icon`}>
        <ChevronRightBold
          aria-hidden={true}
          className={`${BLOCK_NAME}-chevron`}
        />
      </span>
    </a>
  );
});
