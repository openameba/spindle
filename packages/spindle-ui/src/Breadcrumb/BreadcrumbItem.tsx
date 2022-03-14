import React, { forwardRef } from 'react';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
}

export const BreadcrumbItem = forwardRef<HTMLAnchorElement, Props>(
  function Item({ children, href, ...rest }: Props, ref) {
    if (href) {
      return (
        <a href={href} ref={ref} {...rest}>
          {children}
        </a>
      );
    }
    return (
      <a ref={ref} aria-current="page" {...rest}>
        {children}
      </a>
    );
  },
);
