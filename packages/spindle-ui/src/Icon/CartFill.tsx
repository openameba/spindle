import * as React from 'react';
import { SVGProps } from 'react';

const SvgCartFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="m20.737 9.4-1.66 5.2a2.988 2.988 0 0 1-2.857 2.088H9.807A2.993 2.993 0 0 1 6.893 14.4L4.514 4.682H3.2a1 1 0 0 1 0-2h2.1a1 1 0 0 1 .971.761l.819 3.344h11.742a2 2 0 0 1 1.9 2.608l.005.005zM9.109 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm7.7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
  </svg>
);

export default SvgCartFill;
