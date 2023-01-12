import * as React from 'react';
import { SVGProps } from 'react';

const SvgBeginnermark = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.69 3.3c-.81-.44-1.79-.39-2.56.11L12 6.13 7.88 3.41a2.52 2.52 0 0 0-2.57-.11C4.5 3.74 4 4.58 4 5.5v9.82c0 .84.42 1.62 1.12 2.09l5.77 3.8a1.995 1.995 0 0 0 2.2 0l5.78-3.8a2.49 2.49 0 0 0 1.12-2.09V5.5c.01-.92-.49-1.76-1.3-2.2ZM6.22 15.74a.495.495 0 0 1-.22-.42V5.5c0-.27.18-.4.26-.44.05-.02.14-.06.24-.06.08 0 .17.02.27.08L12 8.52v11.02l-5.78-3.8Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgBeginnermark;
