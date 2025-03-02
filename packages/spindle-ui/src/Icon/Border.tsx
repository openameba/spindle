import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBorder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M20 13H4c-.55 0-1-.45-1-1s.45-1 1-1h16c.55 0 1 .45 1 1s-.45 1-1 1" />
  </svg>
);
export default SvgBorder;
