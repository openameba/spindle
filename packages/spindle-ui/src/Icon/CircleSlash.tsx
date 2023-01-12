import * as React from 'react';
import { SVGProps } from 'react';

const SvgCircleSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M12 2a10 10 0 1 0 10 10A10.012 10.012 0 0 0 12 2ZM4 12a7.986 7.986 0 0 1 12.898-6.312l-11.21 11.21A7.95 7.95 0 0 1 4 12Zm8 8a7.95 7.95 0 0 1-4.897-1.688L18.31 7.102A7.986 7.986 0 0 1 12 20Z" />
  </svg>
);

export default SvgCircleSlash;
