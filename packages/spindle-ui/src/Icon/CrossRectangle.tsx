import * as React from 'react';
import { SVGProps } from 'react';

const SvgCrossRectangle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="m15.4 10.6-1.6 1.6 1.6 1.6c.4.4.4 1 0 1.4-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3l-1.6-1.6-1.6 1.6c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.6-1.6-1.6-1.6c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l1.6 1.6L14 9.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4zM22.7 8v8.3c0 2.2-1.8 4-4 4H6c-2.2 0-4-1.8-4-4V8c0-2.2 1.8-4 4-4h12.7c2.2 0 4 1.8 4 4zm-2 0c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v8.3c0 1.1.9 2 2 2h12.7c1.1 0 2-.9 2-2V8z" />
  </svg>
);

export default SvgCrossRectangle;
