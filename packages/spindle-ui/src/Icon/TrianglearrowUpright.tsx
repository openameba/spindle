import * as React from 'react';
import { SVGProps } from 'react';

const SvgTrianglearrowUpright = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M17.78 5.22h-6.29c-.89 0-1.34 1.08-.71 1.71l2.08 2.08-7.2 7.2a1.49 1.49 0 0 0 0 2.12c.59.58 1.54.59 2.12 0l7.2-7.2 2.08 2.08c.63.63 1.71.18 1.71-.71V6.22c.01-.55-.44-1-.99-1Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgTrianglearrowUpright;
