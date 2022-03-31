import * as React from 'react';
import { SVGProps } from 'react';

const SvgAlignCenter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M19.25 6H4.75c-.55 0-1-.45-1-1s.45-1 1-1h14.5c.55 0 1 .45 1 1s-.45 1-1 1zm-2 2.5c0-.55-.45-1-1-1h-8.5c-.55 0-1 .45-1 1s.45 1 1 1h8.5c.55 0 1-.45 1-1zm0 7c0-.55-.45-1-1-1h-8.5c-.55 0-1 .45-1 1s.45 1 1 1h8.5c.55 0 1-.45 1-1zm3-3.5c0-.55-.45-1-1-1H4.75c-.55 0-1 .45-1 1s.45 1 1 1h14.5c.55 0 1-.45 1-1zm0 7c0-.55-.45-1-1-1H4.75c-.55 0-1 .45-1 1s.45 1 1 1h14.5c.55 0 1-.45 1-1z" />
  </svg>
);

export default SvgAlignCenter;
