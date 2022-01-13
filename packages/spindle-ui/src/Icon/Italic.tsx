import * as React from 'react';
import { SVGProps } from 'react';

const SvgItalic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M19 5.62c0 .83-.67 1.5-1.5 1.5h-1.76l-4.21 9.76H12c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h1.76l4.21-9.76H12c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h5.5c.83 0 1.5.67 1.5 1.5z" />
  </svg>
);

export default SvgItalic;
