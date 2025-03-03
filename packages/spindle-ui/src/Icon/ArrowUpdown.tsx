import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowUpdown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="m13.06 2.417 3.178 3.177a.997.997 0 0 1 0 1.414 1 1 0 0 1-1.414 0L13 5.184v13.631l1.824-1.824a1 1 0 1 1 1.414 1.414l-3.177 3.178a1.5 1.5 0 0 1-2.122 0l-3.177-3.178a1 1 0 1 1 1.414-1.414L11 18.815V5.184L9.176 7.008a1 1 0 1 1-1.414-1.414l3.177-3.177a1.5 1.5 0 0 1 2.121 0" />
  </svg>
);
export default SvgArrowUpdown;
