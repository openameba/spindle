import * as React from 'react';
import { SVGProps } from 'react';

const SvgSortFeed = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M19 3.5H5c-1.1 0-2 .9-2 2V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5.5c0-1.1-.9-2-2-2Zm0 12c0 .28-.22.5-.5.5h-13c-.28 0-.5-.22-.5-.5V6c0-.28.22-.5.5-.5h13c.28 0 .5.22.5.5v9.5Z" />
  </svg>
);

export default SvgSortFeed;
