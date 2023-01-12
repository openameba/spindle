import * as React from 'react';
import { SVGProps } from 'react';

const SvgBookmarkFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="m17.5 20.14-5.25-3.01a.497.497 0 0 0-.5 0L6.5 20.14c-.67.38-1.5-.1-1.5-.87V6c0-1.66 1.34-3 3-3h8c1.66 0 3 1.34 3 3v13.27c0 .77-.83 1.25-1.5.87Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgBookmarkFill;
