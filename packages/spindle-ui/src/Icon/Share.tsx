import * as React from 'react';
import type { SVGProps } from 'react';
const SvgShare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M7.22 8.18a.996.996 0 0 1 0-1.41l3.37-3.37a1.983 1.983 0 0 1 2.82 0l3.37 3.37a.996.996 0 0 1-.71 1.7c-.26 0-.51-.1-.71-.29L13 5.81v8.09c0 .55-.45 1-1 1s-1-.45-1-1V5.81L8.63 8.18c-.39.4-1.02.4-1.41 0m12.8 2.8c-.55 0-1 .45-1 1v6.01c0 .55-.45 1-1 1H5.98c-.55 0-1-.45-1-1v-6.01c0-.55-.45-1-1-1s-1 .45-1 1v6.01c0 1.66 1.35 3 3 3h12.03c1.66 0 3-1.35 3-3v-6.01c.01-.56-.44-1-.99-1" />
  </svg>
);
export default SvgShare;
