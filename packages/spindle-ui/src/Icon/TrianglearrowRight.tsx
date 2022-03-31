import * as React from 'react';
import { SVGProps } from 'react';

const SvgTrianglearrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m20.78 11.29-4.45-4.45c-.63-.63-1.71-.18-1.71.71v2.95H4.44c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h10.18v2.95c0 .89 1.08 1.34 1.71.71l4.45-4.45c.39-.39.39-1.03 0-1.42z"
    />
  </svg>
);

export default SvgTrianglearrowRight;
