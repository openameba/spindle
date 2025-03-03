import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M18 4.75h-1.45v-.48c0-.55-.45-1-1-1s-1 .45-1 1v.48H9.44v-.48c0-.55-.45-1-1-1s-1 .45-1 1v.48H6c-1.65 0-3 1.34-3 3v10c0 1.65 1.34 3 3 3h12c1.65 0 3-1.34 3-3v-10c0-1.65-1.35-3-3-3m1 13c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V10.4h14zm0-9.34H5v-.66c0-.55.45-1 1-1h1.45v.02c0 .55.45 1 1 1s1-.45 1-1v-.02h5.11v.02c0 .55.45 1 1 1s1-.45 1-1v-.02H18c.55 0 1 .45 1 1zm-8 4.34c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m-3.94 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m0 3.55c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.44-1-1m3.94 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.44-1-1m4.05-3.55c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m0 3.55c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.44-1-1" />
  </svg>
);
export default SvgCalendar;
