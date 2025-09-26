import type { SVGProps } from 'react';
import * as React from 'react';

const SvgLoading = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M12 7.49c-.55 0-1-.45-1-1v-3.5c0-.55.45-1 1-1s1 .45 1 1v3.5c0 .55-.45 1-1 1m5.6 5.5H21c.55 0 1-.45 1-1s-.45-1-1-1h-3.4c-.55 0-1 .45-1 1s.45 1 1 1m1.47 4.66-2.41-2.41a.996.996 0 1 0-1.41 1.41l2.41 2.41a.996.996 0 1 0 1.41-1.41M8.75 7.32l-2.41-2.4a.996.996 0 1 0-1.41 1.41l2.41 2.41c.39.39 1.02.39 1.41 0s.39-1.02 0-1.42M3 12.99h3.4c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1m3.34 6.07 2.41-2.41a.996.996 0 1 0-1.41-1.41l-2.41 2.41a.996.996 0 1 0 1.41 1.41M13 20.99v-3.4c0-.55-.45-1-1-1s-1 .45-1 1v3.4c0 .55.45 1 1 1s1-.45 1-1" />
  </svg>
);
export default SvgLoading;
