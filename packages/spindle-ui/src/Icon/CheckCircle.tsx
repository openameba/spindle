import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCheckCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m5.18-11.23c.41.37.43 1.01.06 1.41l-5.35 5.79c-.39.43-.93.65-1.47.65-.46 0-.92-.16-1.3-.48l-2.77-2.37a.999.999 0 1 1 1.3-1.52l2.77 2.37 5.35-5.79c.37-.41 1-.44 1.41-.06" />
  </svg>
);
export default SvgCheckCircle;
