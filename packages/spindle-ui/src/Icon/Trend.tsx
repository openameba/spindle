import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTrend = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M11.97 2C6.46 2 2 6.46 2 11.97c0 5.51 4.46 9.97 9.97 9.97 5.51 0 9.97-4.46 9.97-9.97 0-5.51-4.46-9.97-9.97-9.97Zm0 17.92c-2.62 0-4.95-1.28-6.4-3.25l1.95-3.85 1.62 3.17c.35.68 1.03 1.1 1.79 1.1s1.45-.42 1.79-1.1l1.75-3.41 1.36.65c.72.34 1.54-.26 1.42-1.05l-.65-4.44c-.1-.7-.89-1.08-1.5-.72l-3.86 2.29a.998.998 0 0 0 .08 1.76l1.32.63-1.7 3.36-1.62-3.16c-.35-.68-1.03-1.1-1.79-1.1s-1.45.42-1.79 1.1l-1.31 2.56c-.26-.78-.41-1.62-.41-2.49 0-4.38 3.56-7.95 7.95-7.95a7.95 7.95 0 0 1 7.95 7.95c0 4.39-3.57 7.95-7.95 7.95Z" />
  </svg>
);
export default SvgTrend;
