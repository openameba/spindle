import * as React from 'react';
import { SVGProps } from 'react';

const SvgChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="m13.84 20.71-7.29-7.29c-.78-.78-.78-2.05 0-2.83l7.29-7.29a.996.996 0 1 1 1.41 1.41L7.96 12l7.29 7.29c.39.39.39 1.02 0 1.41-.19.2-.45.3-.7.3-.25 0-.51-.1-.71-.29z" />
  </svg>
);

export default SvgChevronLeft;
