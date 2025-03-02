import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M21 12c0-.09-.03-.17-.05-.25-.05-.43-.23-.84-.56-1.17l-5.66-5.66a.996.996 0 1 0-1.41 1.41L17.98 11H4c-.55 0-1 .45-1 1s.45 1 1 1h13.98l-4.66 4.66a.996.996 0 0 0 .71 1.7c.26 0 .51-.1.71-.29l5.66-5.66c.33-.33.51-.74.56-1.17.01-.07.04-.15.04-.24" />
  </svg>
);
export default SvgArrowRight;
