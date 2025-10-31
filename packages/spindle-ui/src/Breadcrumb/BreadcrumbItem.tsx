import React, { forwardRef } from 'react';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  current?: boolean;
}

export const BreadcrumbItem = forwardRef<HTMLAnchorElement, Props>(
  function Item({ children, current, href, target, rel, ...rest }: Props, ref) {
    if (current) {
      return (
        <span aria-current="page" {...rest}>
          {children}
        </span>
      );
    }
    return (
      <a ref={ref} href={href} target={target} rel={rel} {...rest}>
        {children}
      </a>
    );
  },
);
