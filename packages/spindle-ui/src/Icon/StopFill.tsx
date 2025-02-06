import * as React from 'react';
import type { SVGProps } from 'react';
const SvgStopFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M19 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgStopFill;
