import * as React from 'react';
import { SVGProps } from 'react';

const SvgCheckCircleFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2Zm5.23 8.18-5.35 5.79c-.39.43-.93.65-1.47.65-.46 0-.92-.16-1.3-.48l-2.77-2.37a.999.999 0 1 1 1.3-1.52l2.77 2.37 5.35-5.79a.997.997 0 0 1 1.41-.06c.41.37.44 1 .06 1.41Z" />
  </svg>
);

export default SvgCheckCircleFill;
