import * as React from 'react';
import { SVGProps } from 'react';

const SvgCropLandscape = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M18.08 20h-12c-2.21 0-4-1.79-4-4V8c0-2.21 1.79-4 4-4h12c2.21 0 4 1.79 4 4v8c0 2.21-1.8 4-4 4Zm-12-14c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-12Z" />
  </svg>
);

export default SvgCropLandscape;
