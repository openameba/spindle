import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPaperplane = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M21.6 11.725c-.09-1.08-.82-2-1.79-2.48l-12.4-6.21a2.57 2.57 0 0 0-3.09.58c-.72.79-.83 1.96-.39 2.93l2.26 5.03c.12.26.12.56 0 .82l-2.25 5.03c-.46 1.03-.31 2.27.5 3.06.5.49 1.15.74 1.81.74.4 0 .8-.09 1.17-.28l12.54-6.27c1.1-.55 1.75-1.7 1.65-2.95zm-2.54 1.16-12.54 6.27c-.34.17-.59-.02-.68-.1-.09-.09-.29-.33-.13-.68l2.41-5.38h3.76c.55 0 1-.45 1-1s-.45-1-1-1H8.12l-2.41-5.38c-.16-.35.04-.59.13-.68.06-.06.21-.17.41-.17.08 0 .18.02.28.07l12.55 6.27c.35.17.55.51.55.89 0 .39-.21.72-.55.89z" />
  </svg>
);
export default SvgPaperplane;
