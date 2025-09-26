import type { SVGProps } from 'react';
import * as React from 'react';

const SvgNow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M15 4H9c-3.87 0-7 3.13-7 7s3.13 7 7 7h2.43l3.77 2.83c.33.25.8.01.8-.4v-2.51c3.39-.49 6-3.39 6-6.92 0-3.87-3.13-7-7-7m-7.95 8.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5m5 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5m4.95-.1c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2 1.2.54 1.2 1.2-.54 1.2-1.2 1.2" />
  </svg>
);
export default SvgNow;
