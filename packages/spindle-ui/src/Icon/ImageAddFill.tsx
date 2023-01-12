import * as React from 'react';
import { SVGProps } from 'react';

const SvgImageAddFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M5 18c-.55 0-1-.45-1-1v-.21c0-.13.05-.26.15-.35l3.15-3.15a.996.996 0 0 1 1.41 0l1.44 1.44c.2.2.51.2.71 0l4.44-4.44a.996.996 0 0 1 1.41 0l1.73 1.73c1.37.1 2.6.65 3.56 1.51V7c0-1.66-1.34-3-3-3H5C3.34 4 2 5.34 2 7v10c0 .23.03.45.08.66 0 .01.01.03.01.04.05.2.12.39.21.58v.01A2.992 2.992 0 0 0 5 20h7.35c-.22-.63-.35-1.3-.35-2H5ZM8 7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm14.5 11c0 .55-.45 1-1 1H19v2.5c0 .55-.45 1-1 1s-1-.45-1-1V19h-2.5c-.55 0-1-.45-1-1s.45-1 1-1H17v-2.5c0-.55.45-1 1-1s1 .45 1 1V17h2.5c.55 0 1 .45 1 1Z" />
  </svg>
);

export default SvgImageAddFill;
