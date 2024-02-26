import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHtmltag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="m21.4 13.41-5.27 5.27c-.2.2-.45.29-.71.29-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41L19.98 12l-5.27-5.27a.996.996 0 1 1 1.41-1.41l5.27 5.27c.79.78.79 2.04.01 2.82ZM9.19 5.32a.996.996 0 0 0-1.41 0l-5.27 5.27c-.78.78-.78 2.05 0 2.83l5.27 5.27c.2.2.45.29.71.29.26 0 .51-.1.71-.29a.996.996 0 0 0 0-1.41L3.93 12 9.2 6.73c.38-.39.38-1.02-.01-1.41Z" />
  </svg>
);
export default SvgHtmltag;
