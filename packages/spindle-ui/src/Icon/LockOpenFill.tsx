import * as React from 'react';
import { SVGProps } from 'react';

const SvgLockOpenFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M20 9h-9V7c0-1.4-.59-2.74-1.62-3.69a5.047 5.047 0 0 0-3.83-1.29C3 2.24 1 4.52 1 7.21V8c0 .55.45 1 1 1s1-.45 1-1v-.79c0-1.66 1.2-3.06 2.73-3.2.85-.08 1.67.2 2.3.78C8.65 5.36 9 6.16 9 7v2H8c-1.66 0-3 1.34-3 3v6c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3v-6c0-1.66-1.34-3-3-3zm-5.25 6.85v1.4c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.4C12.52 15.55 12 14.84 12 14c0-1.1.9-2 2-2s2 .9 2 2c0 .84-.52 1.55-1.25 1.85z" />
  </svg>
);

export default SvgLockOpenFill;
