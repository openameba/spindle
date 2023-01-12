import * as React from 'react';
import { SVGProps } from 'react';

const SvgTriangleLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="m13.77 19.8-6.04-6.04c-.98-.98-.98-2.56 0-3.54l6.04-6.04c.2-.2.51-.2.71 0l1.41 1.41c.2.2.2.51 0 .71l-5.33 5.33c-.2.2-.2.51 0 .71l5.33 5.33c.2.2.2.51 0 .71l-1.41 1.41c-.2.21-.52.21-.71.01Z" />
  </svg>
);

export default SvgTriangleLeft;
