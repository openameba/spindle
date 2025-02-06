import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDice = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M17 3H7C4.8 3 3 4.8 3 7v10c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4V7c0-2.2-1.8-4-4-4m2 14c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2z" />
    <path d="M15.5 17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-7-7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m3.5 3.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
  </svg>
);
export default SvgDice;
