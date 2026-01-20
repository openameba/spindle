import type { SVGProps } from 'react';
import * as React from 'react';

const SvgFilter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M8.5 15.5A1.5 1.5 0 0 1 10 17v.5h10a1 1 0 1 1 0 2H10v.5a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 6 20v-.5H4a1 1 0 1 1 0-2h2V17a1.5 1.5 0 0 1 1.5-1.5zM16.5 9a1.5 1.5 0 0 1 1.5 1.5v.5h2a1 1 0 1 1 0 2h-2v.5a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5V13H4a1 1 0 1 1 0-2h10v-.5A1.5 1.5 0 0 1 15.5 9zM8.5 2.5A1.5 1.5 0 0 1 10 4v.5h10a1 1 0 1 1 0 2H10V7a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 6 7v-.5H4a1 1 0 0 1 0-2h2V4a1.5 1.5 0 0 1 1.5-1.5z" />
  </svg>
);
export default SvgFilter;
