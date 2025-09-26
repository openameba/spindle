import type { SVGProps } from 'react';
import * as React from 'react';

const SvgPencilAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M17.12 11.48c.18.18.18.48 0 .66l-7.34 7.35c-.13.13-.3.22-.48.27l-5.14 1.23a.933.933 0 0 1-1.12-1.12l1.23-5.15q.06-.27.27-.48l7.34-7.35a.47.47 0 0 1 .66 0zm3.61-4.27L16.8 3.27a.93.93 0 0 0-1.31 0l-1.64 1.64a.47.47 0 0 0 0 .66l4.59 4.6c.18.18.47.18.66 0l1.64-1.64c.35-.37.35-.96-.01-1.32M4 8c0 .55.45 1 1 1s1-.45 1-1V6h2c.55 0 1-.45 1-1s-.45-1-1-1H6V2c0-.55-.45-1-1-1s-1 .45-1 1v2H2c-.55 0-1 .45-1 1s.45 1 1 1h2z" />
  </svg>
);
export default SvgPencilAdd;
