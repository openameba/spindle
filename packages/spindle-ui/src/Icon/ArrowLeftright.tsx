import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowLeftright = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M21.58 10.94 18.4 7.76a.996.996 0 1 0-1.41 1.41L18.82 11H5.18L7 9.18a.996.996 0 1 0-1.41-1.41l-3.18 3.18c-.58.58-.58 1.54 0 2.12l3.18 3.18c.2.2.45.29.71.29s.51-.1.71-.29a.996.996 0 0 0 0-1.41L5.18 13h13.63l-1.82 1.82a.996.996 0 0 0 .71 1.7c.26 0 .51-.1.71-.29l3.18-3.18c.58-.57.58-1.53-.01-2.11" />
  </svg>
);
export default SvgArrowLeftright;
