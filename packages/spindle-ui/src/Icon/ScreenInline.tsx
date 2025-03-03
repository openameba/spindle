import * as React from 'react';
import type { SVGProps } from 'react';
const SvgScreenInline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M14 7.05V4c0-.55.45-1 1-1s1 .45 1 1v3.05c0 .55.45 1 1 1h3c.55 0 1 .45 1 1s-.45 1-1 1h-3c-1.66 0-3-1.34-3-3M9 3c-.55 0-1 .45-1 1v3.05c0 .55-.45 1-1 1H4c-.55 0-1 .45-1 1s.45 1 1 1h3c1.66 0 3-1.34 3-3V4c0-.55-.45-1-1-1M7 14.05H4c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1 .45 1 1V20c0 .55.45 1 1 1s1-.45 1-1v-2.95c0-1.65-1.34-3-3-3m13 0h-3c-1.66 0-3 1.34-3 3V20c0 .55.45 1 1 1s1-.45 1-1v-2.95c0-.55.45-1 1-1h3c.55 0 1-.45 1-1s-.45-1-1-1" />
  </svg>
);
export default SvgScreenInline;
