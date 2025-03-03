import * as React from 'react';
import type { SVGProps } from 'react';
const SvgExpand = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M10 4c0 .55-.45 1-1 1H5v4c0 .55-.45 1-1 1s-1-.45-1-1V5c0-1.1.9-2 2-2h4c.55 0 1 .45 1 1m10 10c-.55 0-1 .45-1 1v4h-4c-.55 0-1 .45-1 1s.45 1 1 1h4c1.1 0 2-.9 2-2v-4c0-.55-.45-1-1-1M19 3h-4c-.55 0-1 .45-1 1s.45 1 1 1h2.59l-3.2 3.2a.996.996 0 0 0 .71 1.7c.26 0 .51-.1.71-.29l3.2-3.2V9c0 .55.45 1 1 1s1-.45 1-1V5C21 3.9 20.1 3 19 3M9.71 14.29a.996.996 0 0 0-1.41 0L5 17.59V15c0-.55-.45-1-1-1s-1 .45-1 1v4c0 1.1.9 2 2 2h4c.55 0 1-.45 1-1s-.45-1-1-1H6.41l3.29-3.29c.4-.39.4-1.03.01-1.42" />
  </svg>
);
export default SvgExpand;
