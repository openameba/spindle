import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBookshelf = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M21.45 17.02 18.34 5.43c-.21-.77-.7-1.42-1.4-1.82a2.996 2.996 0 0 0-4.47 2.18C12.36 4.23 11.08 3 9.5 3c-.77 0-1.47.3-2 .78C6.97 3.3 6.27 3 5.5 3c-1.65 0-3 1.35-3 3v12c0 1.65 1.35 3 3 3 .77 0 1.47-.3 2-.78.53.48 1.23.78 2 .78 1.65 0 3-1.35 3-3V6.68c.02.1.02.2.05.3l3.11 11.59c.21.77.7 1.42 1.4 1.82.46.27.98.4 1.5.4.26 0 .52-.03.78-.1a2.997 2.997 0 0 0 2.11-3.67M5.5 19c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1s1 .45 1 1v12c0 .55-.45 1-1 1m5-1c0 .55-.45 1-1 1s-1-.45-1-1V6c0-.55.45-1 1-1s1 .45 1 1zm8.31.76a1.007 1.007 0 0 1-1.23-.71l-3.1-11.59a.994.994 0 0 1 .97-1.25 1 1 0 0 1 .97.74l3.11 11.59c.13.53-.19 1.08-.72 1.22" />
  </svg>
);
export default SvgBookshelf;
