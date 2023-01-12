import * as React from 'react';
import { SVGProps } from 'react';

const SvgCrop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M9.38 5.88h6.75c1.1 0 2 .9 2 2v6.75h-2V7.88H9.38v-2ZM20.5 16.62H7.38V3.49a1 1 0 0 0-2 .01v2.38H3c-.55 0-1 .45-1 1s.45 1 1 1h2.38v8.75c0 1.1.9 2 2 2h8.75v2.38c0 .55.45 1 1 1s1-.45 1-1v-2.38h2.38c.55 0 1-.45 1-1s-.46-1.01-1.01-1.01Z" />
  </svg>
);

export default SvgCrop;
