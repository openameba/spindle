import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEraser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="m21.04 8.44-5.48-5.48c-.78-.78-2.05-.78-2.82 0l-9.2 9.19c-.75.75-1.17 1.76-1.17 2.83s.42 2.07 1.17 2.83l2.65 2.65c.76.75 1.76 1.17 2.83 1.17s2.08-.42 2.83-1.17l9.19-9.2c.38-.37.59-.87.59-1.41s-.21-1.04-.59-1.41m-10.6 10.6c-.76.76-2.08.76-2.83 0l-2.65-2.65c-.38-.38-.59-.88-.59-1.41s.21-1.04.59-1.42l.71-.7 5.48 5.48zm2.12-2.11-5.48-5.48 7.07-7.08 5.48 5.48z" />
  </svg>
);
export default SvgEraser;
