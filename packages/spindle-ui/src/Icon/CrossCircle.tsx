import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCrossCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm3.8-10.39L13.41 12l2.39 2.39a.996.996 0 0 1-.71 1.7c-.26 0-.51-.1-.71-.29L12 13.41 9.61 15.8c-.2.2-.45.29-.71.29-.26 0-.51-.09-.7-.29a.996.996 0 0 1 0-1.41L10.59 12 8.2 9.61A.996.996 0 1 1 9.61 8.2L12 10.59l2.39-2.39a.996.996 0 1 1 1.41 1.41Z" />
  </svg>
);
export default SvgCrossCircle;
