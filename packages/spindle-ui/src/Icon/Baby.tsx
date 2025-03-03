import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBaby = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M9 11.9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M14 14.2c-.5.7-1.2 1-2 1s-1.6-.4-2-1c-.3-.4-.9-.5-1.3-.2s-.5.9-.2 1.3c.8 1 2.1 1.7 3.5 1.7s2.7-.7 3.5-1.8c.3-.4.2-1-.2-1.3-.4-.2-1-.1-1.3.3M15 11.9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m0 18c-4.4 0-8-3.6-8-8 0-3.7 2.6-6.9 6-7.7 0 .3 0 .7.2 1 .3.9.9 1.6 1.7 2 .1.1.3.1.4.1q.6 0 .9-.6c.3-.5 0-1.1-.5-1.4-.3-.2-.6-.5-.7-.8V4c4.4 0 8 3.6 8 8s-3.6 8-8 8" />
  </svg>
);
export default SvgBaby;
