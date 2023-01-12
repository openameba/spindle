import * as React from 'react';
import { SVGProps } from 'react';

const SvgMenuHamburger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M19.5 13h-15c-.6 0-1-.4-1-1s.4-1 1-1h15c.6 0 1 .4 1 1s-.4 1-1 1Zm1-7c0-.6-.4-1-1-1h-15c-.6 0-1 .4-1 1s.4 1 1 1h15c.6 0 1-.4 1-1Zm0 12c0-.6-.4-1-1-1h-15c-.6 0-1 .4-1 1s.4 1 1 1h15c.6 0 1-.4 1-1Z" />
  </svg>
);

export default SvgMenuHamburger;
