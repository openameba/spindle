import * as React from 'react';
import { SVGProps } from 'react';

const SvgFolderFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M13.1 5.7 12 4.6c-.4-.4-.9-.6-1.4-.6H5C3.3 4 2 5.3 2 7v10c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V9c0-1.7-1.3-3-3-3h-5.2c-.2 0-.5-.1-.7-.3Z" />
  </svg>
);

export default SvgFolderFill;
