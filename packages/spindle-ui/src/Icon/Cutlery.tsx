import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCutlery = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M11 8c0 1.62-.67 2.57-2.25 2.88v9.87a1.25 1.25 0 0 1-2.5 0v-9.87C4.67 10.57 4 9.62 4 8c0-4 1.5-6 3.5-6S11 4 11 8m8.25-6c-.41 0-.75.34-.75.75v4.5c0 .14-.11.25-.25.25h-.75c-.14 0-.25-.11-.25-.25v-4.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75v4.5c0 .14-.11.25-.25.25h-.75c-.14 0-.25-.11-.25-.25v-4.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75V7.5c0 1.49.94 2.76 2.25 3.26v9.99a1.25 1.25 0 0 0 2.5 0v-9.99C19.06 10.26 20 8.99 20 7.5V2.75c0-.41-.34-.75-.75-.75" />
  </svg>
);
export default SvgCutlery;
