import type { SVGProps } from 'react';
import * as React from 'react';

const SvgDragIndicator = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M10.5 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16.5 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M10.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M10.5 18a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16.5 18a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
  </svg>
);
export default SvgDragIndicator;
