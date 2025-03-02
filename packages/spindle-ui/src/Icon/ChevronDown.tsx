import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M3.05 9.45c0-.26.1-.51.29-.71a.996.996 0 0 1 1.41 0l7.29 7.29 7.29-7.29a.996.996 0 1 1 1.41 1.41l-7.29 7.29c-.78.78-2.05.78-2.83 0l-7.29-7.29c-.18-.19-.28-.44-.28-.7" />
  </svg>
);
export default SvgChevronDown;
