import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFont = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M19.61 18.93 13.86 4.35c-.3-.77-1.03-1.26-1.86-1.26s-1.56.5-1.86 1.27L4.39 18.93c-.3.77.07 1.64.84 1.95a1.511 1.511 0 0 0 1.95-.85l1.23-3.11h7.19l1.23 3.11c.3.77 1.18 1.15 1.95.85.75-.31 1.13-1.18.83-1.95M9.59 13.92 12 7.81l2.41 6.11z" />
  </svg>
);
export default SvgFont;
