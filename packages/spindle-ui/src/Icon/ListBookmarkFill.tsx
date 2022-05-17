import * as React from 'react';
import { SVGProps } from 'react';

const SvgListBookmarkFill = (props: SVGProps<SVGSVGElement>) => (
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
      d="m20.25 21.066-3-1.736-3 1.736a.5.5 0 0 1-.75-.433V13.5A1.5 1.5 0 0 1 15 12h4.5a1.5 1.5 0 0 1 1.5 1.5v7.133a.5.5 0 0 1-.75.433zM17.6 9.1a1 1 0 0 0-1-1h-12a1 1 0 1 0 0 2h12a1 1 0 0 0 1-1zm0-3.9a1 1 0 0 0-1-1h-12a1 1 0 1 0 0 2h12a1 1 0 0 0 1-1zm-6 7.8a1 1 0 0 0-1-1h-6a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1z"
    />
  </svg>
);

export default SvgListBookmarkFill;
