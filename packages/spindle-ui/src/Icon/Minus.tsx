import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M19.5 13h-15c-.55 0-1-.45-1-1s.45-1 1-1h15c.55 0 1 .45 1 1s-.45 1-1 1" />
  </svg>
);
export default SvgMinus;
