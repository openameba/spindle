import type { SVGProps } from 'react';
import * as React from 'react';

const SvgCross = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M18.36 16.95a.996.996 0 0 1-.71 1.7c-.26 0-.51-.1-.71-.29L12 13.41l-4.95 4.95c-.2.2-.45.29-.71.29s-.51-.1-.71-.29a.996.996 0 0 1 0-1.41L10.59 12 5.64 7.05a.996.996 0 1 1 1.41-1.41L12 10.59l4.95-4.95a.996.996 0 1 1 1.41 1.41L13.41 12z" />
  </svg>
);
export default SvgCross;
