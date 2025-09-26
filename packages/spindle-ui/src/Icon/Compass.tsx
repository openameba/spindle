import type { SVGProps } from 'react';
import * as React from 'react';

const SvgCompass = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m1 17.9v-.4c0-.6-.4-1-1-1s-1 .4-1 1v.4c-3.6-.5-6.5-3.3-6.9-6.9h.4c.6 0 1-.4 1-1s-.4-1-1-1h-.4c.4-3.6 3.3-6.5 6.9-6.9v.4c0 .6.4 1 1 1s1-.4 1-1v-.4c3.6.5 6.5 3.3 6.9 6.9h-.4c-.6 0-1 .4-1 1s.4 1 1 1h.4c-.4 3.6-3.3 6.5-6.9 6.9" />
    <path d="m15.3 6.9-5.1 3.3-3.3 5.1c-.3.5-.3 1.1.2 1.6.2.2.6.4.9.4.2 0 .5-.1.7-.2l5.1-3.3 3.3-5.1c.3-.5.3-1.1-.2-1.6-.4-.4-1.1-.5-1.6-.2m-.4 2.3-2.1 3.3q-.15.15-.3 0l-1-1q-.15-.15 0-.3l3.3-2.1c.1-.1.2 0 .1.1" />
  </svg>
);
export default SvgCompass;
