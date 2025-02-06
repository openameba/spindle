import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSprout = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.98 11.53c-1.88 1.7-4.45 2.75-5.99 2.03V20c0 .55-.45 1-1 1s-1-.45-1-1v-6.45c-1.54.74-4.12-.32-6-2.02-2.15-1.93-2.52-4.31-1.3-5.66s3.56-1.16 5.7.77c1.26 1.13 2.25 2.68 2.59 4.06.34-1.38 1.34-2.93 2.59-4.06 2.14-1.93 4.49-2.12 5.7-.77 1.23 1.35.85 3.73-1.29 5.66"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSprout;
