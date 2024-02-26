import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUnderline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M17.75 21H6.25a1.25 1.25 0 0 1 0-2.5h11.5a1.25 1.25 0 0 1 0 2.5Zm-.05-10.2V4.25a1.25 1.25 0 0 0-2.5 0v6.55c0 1.77-1.44 3.2-3.2 3.2a3.21 3.21 0 0 1-3.2-3.2V4.25a1.25 1.25 0 0 0-2.5 0v6.55c0 3.14 2.56 5.7 5.7 5.7s5.7-2.56 5.7-5.7Z" />
  </svg>
);
export default SvgUnderline;
