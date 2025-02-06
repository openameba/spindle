import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMoon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M10.86 21a9.03 9.03 0 0 1-5.58-1.92c-.67-.52-.94-1.37-.7-2.17.25-.81.96-1.37 1.82-1.42.75-.05 1.51-.25 2.24-.58 1.98-.9 3.42-2.73 3.76-4.79.22-1.34.04-2.69-.53-3.89-.37-.78-.23-1.67.36-2.29.58-.6 1.45-.77 2.23-.45 3.78 1.62 5.97 5.46 5.46 9.55-.49 3.94-3.56 7.16-7.46 7.82-.53.1-1.07.14-1.6.14m2.82-15.67.01.04c.75 1.57.99 3.33.7 5.07-.45 2.7-2.33 5.11-4.9 6.28-.96.43-1.94.69-2.94.76 1.56 1.26 3.56 1.76 5.59 1.41 3.04-.51 5.43-3.02 5.81-6.09.39-3.21-1.32-6.21-4.27-7.47" />
  </svg>
);
export default SvgMoon;
