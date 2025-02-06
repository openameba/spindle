import * as React from 'react';
import type { SVGProps } from 'react';
const SvgStrikethrough = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M6.44 9.25c-.12-.41-.21-.84-.21-1.27C6.23 5.14 8.7 3 11.99 3a6.9 6.9 0 0 1 4.99 2.14c.59.59.59 1.54 0 2.12s-1.54.59-2.12 0c-.1-.1-.18-.18-.24-.23-.53-.48-1.4-1.03-2.63-1.03-1.62 0-2.76.81-2.76 1.98 0 .5.28 1.01.71 1.27zm13.06 2h-15a1.25 1.25 0 0 0 0 2.5h7.75c.92.45 1.58.8 1.97 1.04.46.29.55.82.55 1.21 0 1.14-1.21 2-2.81 2-1.68 0-2.77-1.09-3.06-1.43-.54-.62-1.49-.69-2.12-.14s-.69 1.49-.14 2.12c.51.57 2.38 2.45 5.32 2.45 3.31 0 5.81-2.15 5.81-5 0-.83-.19-1.59-.55-2.25h2.28a1.25 1.25 0 0 0 0-2.5" />
  </svg>
);
export default SvgStrikethrough;
