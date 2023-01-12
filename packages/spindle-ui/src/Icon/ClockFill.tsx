import * as React from 'react';
import { SVGProps } from 'react';

const SvgClockFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Zm5.5 11.2H13c-1.2 0-2.2-1-2.2-2.2V6.5c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2v4.2h4.2c.7 0 1.2.6 1.2 1.2s-.4 1.3-1.1 1.3Z" />
  </svg>
);

export default SvgClockFill;
