import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowRightCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm4.42-9.29c.78.78.78 2.05 0 2.83l-3 3c-.2.2-.45.29-.71.29-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41L14.13 13H8c-.55 0-1-.45-1-1s.45-1 1-1h5.89L12 9.12a.996.996 0 1 1 1.41-1.41l3.01 3Z" />
  </svg>
);

export default SvgArrowRightCircle;
