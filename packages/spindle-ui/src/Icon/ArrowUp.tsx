import type { SVGProps } from 'react';
import * as React from 'react';

const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="m19.07 9.27-5.66-5.66c-.33-.33-.74-.51-1.17-.56-.07-.02-.15-.05-.24-.05s-.17.03-.25.05c-.43.05-.84.23-1.17.56L4.92 9.27c-.2.2-.29.45-.29.71s.1.51.29.71c.39.39 1.02.39 1.41 0L11 6.02V20c0 .55.45 1 1 1s1-.45 1-1V6.02l4.66 4.66a.996.996 0 1 0 1.41-1.41" />
  </svg>
);
export default SvgArrowUp;
