import type { SVGProps } from 'react';
import * as React from 'react';

const SvgArrowpagingDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="m11.33 15.3-4.62-4.59c-.63-.63-.19-1.71.7-1.71h9.17c.89 0 1.34 1.07.71 1.7l-4.55 4.59c-.38.39-1.01.39-1.41.01"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowpagingDown;
