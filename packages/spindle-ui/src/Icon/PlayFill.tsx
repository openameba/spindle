import type { SVGProps } from 'react';
import * as React from 'react';

const SvgPlayFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M20.54 11.15 7.71 3.17c-.66-.41-1.53.07-1.53.85v15.96c0 .78.86 1.26 1.53.85l12.82-7.98c.63-.39.63-1.31.01-1.7"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPlayFill;
