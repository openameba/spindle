import * as React from 'react';
import { SVGProps } from 'react';

const SvgMinusBold = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M19.5 13.5h-15c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h15c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" />
  </svg>
);

export default SvgMinusBold;
