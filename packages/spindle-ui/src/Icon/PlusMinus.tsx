import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPlusMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M5.5 8.5C5.5 7.67 6.17 7 7 7h3.5V3.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V7H17c.83 0 1.5.67 1.5 1.5S17.83 10 17 10h-3.5v3.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5V10H7c-.83 0-1.5-.67-1.5-1.5M17 18H7c-.83 0-1.5.67-1.5 1.5S6.17 21 7 21h10c.83 0 1.5-.67 1.5-1.5S17.83 18 17 18" />
  </svg>
);
export default SvgPlusMinus;
