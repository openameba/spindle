import type { SVGProps } from 'react';
import * as React from 'react';

const SvgShineFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="m19.86 12.94-3.23 1.15a3.98 3.98 0 0 0-2.44 2.48l-1.24 3.65c-.31.9-1.59.9-1.89 0l-1.24-3.65a4 4 0 0 0-2.44-2.48l-3.23-1.15c-.88-.32-.88-1.57 0-1.88L7.37 9.9a3.98 3.98 0 0 0 2.44-2.48l1.24-3.65c.31-.9 1.59-.9 1.89 0l1.24 3.65a4 4 0 0 0 2.44 2.48l3.23 1.15c.9.32.9 1.58.01 1.89" />
  </svg>
);
export default SvgShineFill;
