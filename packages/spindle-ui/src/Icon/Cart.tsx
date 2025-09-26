import type { SVGProps } from 'react';
import * as React from 'react';

const SvgCart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M16.22 16.682H9.807A2.99 2.99 0 0 1 6.893 14.4L4.514 4.682H3.2a1 1 0 0 1 0-2h2.1a1 1 0 0 1 .971.761l.819 3.344h11.742a2 2 0 0 1 1.9 2.608l-1.659 5.2a2.99 2.99 0 0 1-2.853 2.087M7.579 8.787l1.256 5.132a1 1 0 0 0 .972.763h6.413a1 1 0 0 0 .953-.7l1.659-5.2zM9.109 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m7.7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
  </svg>
);
export default SvgCart;
