import * as React from 'react';
import { SVGProps } from 'react';

const SvgTriangleUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="m4.2 13.77 6.04-6.04c.98-.98 2.56-.98 3.54 0l6.04 6.04c.2.2.2.51 0 .71l-1.41 1.41c-.2.2-.51.2-.71 0l-5.33-5.33c-.2-.2-.51-.2-.71 0l-5.33 5.33c-.2.2-.51.2-.71 0L4.2 14.48c-.2-.2-.2-.52 0-.71z" />
  </svg>
);

export default SvgTriangleUp;
