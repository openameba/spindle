import type { SVGProps } from 'react';
import * as React from 'react';

const SvgArrowwaveup = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M21 7.57v4.87c0 .5-.61.76-.97.4l-1.73-1.73-4.14 4.14c-.78.78-2.05.78-2.83 0l-2.59-2.59L4.7 16.7c-.2.2-.45.29-.71.29s-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l4.04-4.04c.78-.78 2.05-.78 2.83 0l2.59 2.59 4.14-4.14-1.73-1.73c-.36-.36-.1-.97.4-.97h4.87c.31 0 .57.25.57.57z" />
  </svg>
);
export default SvgArrowwaveup;
