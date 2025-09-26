import type { SVGProps } from 'react';
import * as React from 'react';

const SvgDiamondTwo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <g clipPath="url(#a)">
      <path d="m9.65 16.35-.4.4c-.2.2-.5.2-.7 0l-4.4-4.4c-.2-.2-.2-.5 0-.7l4.4-4.4c.2-.2.5-.2.7 0l.4.4 1.4-1.4-.8-.8c-.7-.7-2-.7-2.7 0l-5.2 5.2c-.7.7-.7 2 0 2.7l5.2 5.2c.4.4.8.6 1.3.6s1-.2 1.4-.6l.8-.8z" />
      <path d="M15.15 19.15c-.5 0-1-.2-1.4-.6l-5.2-5.2c-.7-.7-.7-2 0-2.7l5.2-5.2c.7-.7 2-.7 2.7 0l5.2 5.2c.7.7.7 2 0 2.7l-5.2 5.2c-.3.4-.8.6-1.3.6m-4.8-6.8 4.4 4.4c.2.2.5.2.7 0l4.4-4.4c.2-.2.2-.5 0-.7l-4.4-4.4c-.2-.2-.5-.2-.7 0l-4.4 4.4c-.2.2-.2.5 0 .7" />
    </g>
    <defs>
      <clipPath id="a">
        <path d="M1.75 4.85h20.5v14.3H1.75z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDiamondTwo;
