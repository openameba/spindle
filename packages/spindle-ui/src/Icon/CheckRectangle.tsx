import type { SVGProps } from 'react';
import * as React from 'react';

const SvgCheckRectangle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M18.36 19.99H5.64c-2.21 0-4-1.79-4-4V8.01c0-2.21 1.79-4 4-4h12.72c2.21 0 4 1.79 4 4v7.98c0 2.2-1.79 4-4 4M5.64 6.01c-1.1 0-2 .9-2 2v7.98c0 1.1.9 2 2 2h12.72c1.1 0 2-.9 2-2V8.01c0-1.1-.9-2-2-2zm5.24 9.37c-.34 0-.67-.12-.95-.35L7.84 13.2a1 1 0 0 1-.1-1.41c.36-.42.99-.46 1.41-.1l1.7 1.48 3.82-3.87c.39-.39 1.02-.4 1.42-.01.39.39.4 1.02.01 1.42l-4.19 4.25c-.28.27-.66.42-1.03.42" />
  </svg>
);
export default SvgCheckRectangle;
