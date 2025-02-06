import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWebview = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m4.31 7.88h3.39c.19.68.3 1.39.3 2.12 0 .72-.1 1.42-.28 2.08h-3.4c.19-1.4.19-2.8-.01-4.2m2.54-2h-2.96c-.32-1.16-.78-2.32-1.37-3.47 1.82.6 3.35 1.85 4.33 3.47m-8.68 8.2h3.65c-.41 1.3-1.02 2.61-1.83 3.91-.8-1.3-1.41-2.61-1.82-3.91m4.13-2H9.7c-.22-1.4-.22-2.8.02-4.2h4.58c.22 1.41.23 2.8 0 4.2M12 4c.79 1.3 1.39 2.59 1.8 3.88h-3.6C10.61 6.6 11.21 5.3 12 4m-2.51.41C8.9 5.57 8.44 6.72 8.12 7.88H5.15a8 8 0 0 1 4.34-3.47m-1.81 9.67h-3.4A8 8 0 0 1 4 12c0-.73.11-1.44.29-2.12h3.39q-.285 2.1 0 4.2m-2.55 2H8.1c.32 1.17.79 2.34 1.39 3.51a8.04 8.04 0 0 1-4.36-3.51m9.38 3.51c.6-1.17 1.07-2.34 1.39-3.51h2.97a8.04 8.04 0 0 1-4.36 3.51" />
  </svg>
);
export default SvgWebview;
