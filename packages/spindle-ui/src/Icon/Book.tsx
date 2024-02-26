import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="m20.81 4.26-1.47-.66c-1.81-.8-3.88-.8-5.69 0L12 4.34l-1.66-.74c-1.81-.8-3.88-.8-5.69 0l-1.46.66C2.47 4.58 2 5.29 2 6.08v11.81c0 .68.34 1.31.91 1.68.57.37 1.28.43 1.9.15l.66-.29c1.29-.57 2.77-.57 4.06 0l1.66.74c.26.12.54.17.81.17s.55-.06.81-.17l1.66-.74c1.29-.57 2.77-.57 4.06 0l.66.29A1.997 1.997 0 0 0 22 17.89V6.08c0-.79-.47-1.5-1.19-1.82ZM7.5 17c-.97 0-1.94.2-2.84.6l-.66.29V6.08l1.47-.65c1.29-.57 2.77-.57 4.06 0l1.47.65v11.81l-.66-.29c-.9-.4-1.87-.6-2.84-.6Zm12.5.89-.66-.29c-1.81-.8-3.88-.8-5.69 0l-.65.29V6.08l1.47-.65c1.29-.57 2.77-.57 4.06 0l1.47.65v11.81Z" />
  </svg>
);
export default SvgBook;
