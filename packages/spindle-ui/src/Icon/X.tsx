import * as React from 'react';
import type { SVGProps } from 'react';
const SvgX = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M13.225 10.707 18.995 4h-1.368l-5.01 5.824L8.615 4H4l6.051 8.807L4 19.84h1.367l5.292-6.15 4.225 6.15H19.5zm-1.873 2.177-.614-.877L5.86 5.03h2.1l3.937 5.632.614.877 5.117 7.32h-2.1z" />
  </svg>
);
export default SvgX;
