import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFlash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M17.94 10.93h-3.67c-.28 0-.51-.23-.51-.51v-6.9c0-.48-.61-.7-.91-.32l-7.27 9c-.27.34-.03.84.4.84h3.67c.28 0 .51.23.51.51v6.9c0 .48.61.7.91.32l7.25-9.01a.5.5 0 0 0-.38-.83"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFlash;
