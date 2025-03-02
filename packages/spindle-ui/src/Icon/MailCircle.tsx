import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMailCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10m0-18c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8m3.5 4h-7C7.7 8 7 8.7 7 9.5v5c0 .8.7 1.5 1.5 1.5h7c.8 0 1.5-.7 1.5-1.5v-5c0-.8-.7-1.5-1.5-1.5m-.4 3-1.8 1.4c-.4.3-.9.5-1.3.5-.5 0-1-.2-1.4-.5L8.9 11c-.3-.2-.3-.6-.1-.9s.6-.3.8-.1l1.8 1.4c.3.3.8.3 1.1 0l1.8-1.4c.3-.2.7-.2.9.1.3.3.2.7-.1.9" />
  </svg>
);
export default SvgMailCircle;
