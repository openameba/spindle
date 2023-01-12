import * as React from 'react';
import { SVGProps } from 'react';

const SvgBookFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="m19.04 3.66 2.36 1.05c.37.16.6.52.6.92v13.15c0 1.14-1.23 1.87-2.23 1.31l-.48-.26a5.512 5.512 0 0 0-5.5.09l-.04.02c-.33.2-.75-.04-.75-.43V4.84c0-.18.09-.34.24-.43l.74-.44a5.494 5.494 0 0 1 5.06-.31ZM2 5.63v13.15c0 1.14 1.23 1.87 2.23 1.31l.47-.26c1.72-.95 3.81-.92 5.5.09l.04.02c.33.2.76-.04.76-.43V4.84c0-.18-.09-.34-.24-.43l-.74-.44a5.494 5.494 0 0 0-5.06-.31L2.59 4.71c-.36.16-.59.52-.59.92Z" />
  </svg>
);

export default SvgBookFill;
