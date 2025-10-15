import type { SVGProps } from 'react';
import * as React from 'react';

const SvgDot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M21.15 12a9 9 0 1 1-18.002-.001A9 9 0 0 1 21.15 12" />
  </svg>
);
export default SvgDot;
