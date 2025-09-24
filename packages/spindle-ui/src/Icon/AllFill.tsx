import type { SVGProps } from 'react';
import * as React from 'react';

const SvgAllFill = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.5 5v3.5c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h3.5c1.1 0 2 .9 2 2M19 3h-3.5c-1.1 0-2 .9-2 2v3.5c0 1.1.9 2 2 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M8.5 13.5H5c-1.1 0-2 .9-2 2V19c0 1.1.9 2 2 2h3.5c1.1 0 2-.9 2-2v-3.5c0-1.1-.9-2-2-2m10.5 0h-3.5c-1.1 0-2 .9-2 2V19c0 1.1.9 2 2 2H19c1.1 0 2-.9 2-2v-3.5c0-1.1-.9-2-2-2"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAllFill;
