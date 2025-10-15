import type { SVGProps } from 'react';
import * as React from 'react';

const SvgPlayCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="m16.1 12.87-5.26 3.27a1 1 0 0 1-1.53-.85V8.75c0-.78.86-1.26 1.53-.85l5.26 3.27a1 1 0 0 1 0 1.7m5.9-.85c0 5.51-4.49 10-10 10s-10-4.49-10-10 4.49-10 10-10 10 4.49 10 10m-2 0c0-4.41-3.59-8-8-8s-8 3.59-8 8 3.59 8 8 8 8-3.59 8-8" />
  </svg>
);
export default SvgPlayCircle;
