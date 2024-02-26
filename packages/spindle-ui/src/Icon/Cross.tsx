import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCross = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M18.36 16.95a.996.996 0 0 1-.71 1.7c-.26 0-.51-.1-.71-.29L12 13.41l-4.95 4.95c-.2.2-.45.29-.71.29-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41L10.59 12 5.64 7.05a.996.996 0 1 1 1.41-1.41L12 10.59l4.95-4.95a.996.996 0 1 1 1.41 1.41L13.41 12l4.95 4.95Z" />
  </svg>
);
export default SvgCross;
