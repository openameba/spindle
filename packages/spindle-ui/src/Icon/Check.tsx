import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M9.95 17.63c-.47 0-.94-.16-1.31-.49l-4.79-4.17a1 1 0 0 1-.1-1.41c.36-.42 1-.46 1.41-.1l4.79 4.17 9.59-9.71c.39-.39 1.02-.4 1.42-.01.39.39.4 1.02.01 1.42l-9.59 9.71c-.4.39-.91.59-1.43.59" />
  </svg>
);
export default SvgCheck;
