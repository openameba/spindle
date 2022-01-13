import * as React from 'react';
import { SVGProps } from 'react';

const SvgMenuHamburgerBold = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M19.5 13.5h-15c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h15c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5zM21 6c0-.8-.7-1.5-1.5-1.5h-15C3.7 4.5 3 5.2 3 6s.7 1.5 1.5 1.5h15c.8 0 1.5-.7 1.5-1.5zm0 12c0-.8-.7-1.5-1.5-1.5h-15c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h15c.8 0 1.5-.7 1.5-1.5z" />
  </svg>
);

export default SvgMenuHamburgerBold;
