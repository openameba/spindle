import * as React from 'react';
import { SVGProps } from 'react';

const SvgTrianglearrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M16.45 14.57H13.5V4.39c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v10.18H7.55c-.89 0-1.34 1.08-.71 1.71l4.45 4.45c.39.39 1.02.39 1.41 0l4.45-4.45c.63-.63.19-1.71-.7-1.71Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgTrianglearrowDown;
