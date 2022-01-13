import * as React from 'react';
import { SVGProps } from 'react';

const SvgUndo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M3.44 13.61c0 3.94 3.2 7.14 7.14 7.14H15c.55 0 1-.45 1-1s-.45-1-1-1h-4.42c-2.83 0-5.14-2.31-5.14-5.14 0-2.83 2.31-5.14 5.14-5.14h4.83v2.19c0 .89 1.08 1.34 1.71.71l3.14-3.16a.996.996 0 0 0 0-1.41l-3.15-3.15c-.63-.63-1.71-.18-1.71.71v2.11h-4.82c-3.93-.01-7.14 3.2-7.14 7.14z" />
  </svg>
);

export default SvgUndo;
