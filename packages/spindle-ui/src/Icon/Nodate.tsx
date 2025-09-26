import type { SVGProps } from 'react';
import * as React from 'react';

const SvgNodate = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M20 13.75V5.99c0-2.21-1.79-4-4-4H8c-2.21 0-4 1.79-4 4v12c0 2.21 1.79 4 4 4h3.76c1.05 0 2.08-.43 2.83-1.17l4.24-4.24c.74-.75 1.17-1.78 1.17-2.83m-6.5 1.74h3.59l-3.59 3.59zm4.5-2h-4.5c-1.1 0-2 .9-2 2v4.5H8c-1.1 0-2-.9-2-2v-12c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2z" />
  </svg>
);
export default SvgNodate;
