import * as React from 'react';
import { SVGProps } from 'react';

const SvgPencil = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="m19.2 7.5-2.9-2.9c-.2-.2-.2-.5 0-.6l1.2-1.2c.4-.4.9-.4 1.3 0L21 5c.4.4.4.9 0 1.3l-1.2 1.2c-.1.1-.4.1-.6 0zM14.3 6l-9.2 9.2-1 3.6c-.2.7.3 1.2 1 1l3.6-1 9.2-9.2c.1-.3.1-.5-.1-.7L14.9 6c-.2-.2-.5-.2-.6 0z" />
  </svg>
);

export default SvgPencil;
