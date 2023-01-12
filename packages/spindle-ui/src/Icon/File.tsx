import * as React from 'react';
import { SVGProps } from 'react';

const SvgFile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="m18.8 7.4-4.2-4.2c-.8-.8-1.8-1.2-2.8-1.2H8C5.8 2 4 3.8 4 6v12c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4v-7.8c0-1-.4-2-1.2-2.8Zm-5.3-2.5 3.6 3.6h-3.6V4.9ZM18 18c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h3.5v4.5c0 1.1.9 2 2 2H18V18Z" />
  </svg>
);

export default SvgFile;
