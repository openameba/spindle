import type { SVGProps } from 'react';
import * as React from 'react';

const SvgMinusBold = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M19.5 13.5h-15c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h15c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5" />
  </svg>
);
export default SvgMinusBold;
