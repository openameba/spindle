import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPerson = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M12 11c-2.5 0-4.5-2-4.5-4.5S9.5 2 12 2s4.5 2 4.5 4.5-2 4.5-4.5 4.5m0-7c-1.4 0-2.5 1.1-2.5 2.5S10.6 9 12 9s2.5-1.1 2.5-2.5S13.4 4 12 4m0 18.2c-2.1 0-4.2-.3-6.2-.8-.9-.2-1.6-.8-2-1.6s-.4-1.7-.1-2.5c.9-2 3.1-5.4 8.3-5.4s7.4 3.4 8.3 5.4c.3.8.3 1.7-.1 2.5s-1.1 1.4-2 1.6c-2 .6-4.1.8-6.2.8m0-8.2c-3.9 0-5.6 2.3-6.4 4.2-.1.3-.1.6 0 .8.1.3.4.5.7.5 3.8.9 7.8.9 11.5 0 .3-.1.5-.3.7-.5.1-.3.1-.6 0-.8-.9-1.9-2.6-4.2-6.5-4.2" />
  </svg>
);
export default SvgPerson;
