import * as React from 'react';
import { SVGProps } from 'react';

const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M20.5 12c0 .6-.4 1-1 1H13v6.5c0 .6-.4 1-1 1s-1-.4-1-1V13H4.5c-.6 0-1-.4-1-1s.4-1 1-1H11V4.5c0-.6.4-1 1-1s1 .4 1 1V11h6.5c.6 0 1 .4 1 1Z" />
  </svg>
);

export default SvgPlus;
