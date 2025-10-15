import type { SVGProps } from 'react';
import * as React from 'react';

const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M20 11.363H6.03l4.66-4.66a.996.996 0 1 0-1.41-1.41l-5.66 5.66c-.33.33-.51.74-.56 1.17-.03.07-.06.15-.06.24s.03.17.05.25c.05.43.23.84.56 1.17l5.66 5.66c.2.2.45.29.71.29s.51-.1.71-.29a.996.996 0 0 0 0-1.41l-4.66-4.67H20c.55 0 1-.45 1-1s-.45-1-1-1" />
  </svg>
);
export default SvgArrowLeft;
