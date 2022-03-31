import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowpagingRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m15.2 12.67-4.59 4.62c-.63.63-1.71.19-1.71-.7V7.41c0-.89 1.07-1.34 1.7-.71l4.59 4.55c.39.39.39 1.02.01 1.42z"
    />
  </svg>
);

export default SvgArrowpagingRight;
