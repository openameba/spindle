import React, { forwardRef } from 'react';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  current?: boolean;
}

export const BreadcrumbItem = forwardRef<HTMLAnchorElement, Props>(
  function Item({ children, current, ...rest }: Props, ref) {
    if (current) {
      return (
        <a ref={ref} aria-current="page" {...rest}>
          {children}
        </a>
      );
    }
    return (
      <a ref={ref} {...rest}>
        {children}
      </a>
    );
  },
);
