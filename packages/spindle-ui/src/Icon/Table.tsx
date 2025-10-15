import type { SVGProps } from 'react';
import * as React from 'react';

const SvgTable = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M18 6c1.1 0 2 .9 2 2v8.01c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h12.01M18 4H6C3.79 4 2 5.79 2 8v8.01c0 2.21 1.79 4 4 4h12.01c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm.25 4.5c0-.55-.45-1-1-1H9.5c-.55 0-1 .45-1 1s.45 1 1 1h7.75c.55 0 1-.45 1-1M17 12c0-.55-.45-1-1-1H9.5c-.55 0-1 .45-1 1s.45 1 1 1H16c.55 0 1-.45 1-1m-1.25 3.5c0-.55-.45-1-1-1H9.5c-.55 0-1 .45-1 1s.45 1 1 1h5.25c.55 0 1-.45 1-1m-9.25-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m0 3.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m0 3.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1" />
  </svg>
);
export default SvgTable;
