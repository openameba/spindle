import type { SVGProps } from 'react';
import * as React from 'react';

const SvgMail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M12 13.6c-.9 0-1.7-.3-2.5-.9l-3.2-2.5c-.4-.3-.5-1-.2-1.4s1-.5 1.4-.2l3.2 2.5c.7.6 1.7.6 2.5 0l3.2-2.5c.4-.3 1.1-.3 1.4.2.3.4.3 1.1-.2 1.4l-3.2 2.5q-1.05.9-2.4.9M22 16V8c0-2.2-1.8-4-4-4H6C3.8 4 2 5.8 2 8v8c0 2.2 1.8 4 4 4h12c2.2 0 4-1.8 4-4M18 6c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2z" />
  </svg>
);
export default SvgMail;
