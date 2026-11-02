import type { SVGProps } from 'react';
import * as React from 'react';

const SvgQuotation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M5.14 12.57h-.05l2.19-4.58c.14-.33.24-.48.48-.67.43-.33 1-.43 1.48-.19.52.24.81.76.86 1.28 0 .29-.05.48-.24.81l-.76 1.67c1.19.43 2.05 1.57 2.05 2.96 0 1.72-1.43 3.15-3.14 3.15s-3.15-1.43-3.15-3.15c0-.48.1-.9.28-1.29zm7.95 0 2.19-4.58c.14-.33.24-.48.48-.67.43-.33 1-.38 1.48-.19.52.24.81.76.86 1.28 0 .29-.05.48-.24.81l-.76 1.67c1.19.43 2.05 1.57 2.05 2.96 0 1.72-1.43 3.15-3.15 3.15s-3.15-1.43-3.15-3.15c0-.48.1-.9.24-1.29z" />
  </svg>
);
export default SvgQuotation;
