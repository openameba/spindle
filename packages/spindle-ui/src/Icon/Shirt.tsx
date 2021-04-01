import * as React from 'react';

function SvgShirt(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M20.3 6.5l-3.1-2.7c-.6-.5-1.3-.8-2-.8H8.7c-.7 0-1.4.3-2 .8l-3 2.7c-.5.4-.7.9-.7 1.5s.3 1.1.7 1.5L5.5 11v8c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2v-8l1.7-1.5c.4-.4.7-.9.7-1.5s-.2-1.1-.6-1.5zM13.2 5c0 .7-.6 1.2-1.2 1.2s-1.3-.5-1.3-1.2h2.5zm3.3 5.3v8.2c0 .3-.2.5-.5.5H8c-.3 0-.5-.2-.5-.5v-8.2c0-.1-.1-.3-.2-.4L5.4 8.3c-.2-.2-.2-.6 0-.8L8 5.2c.2-.1.5-.2.7-.2h.5c0 1.5 1.2 2.8 2.7 2.8 1.5 0 2.8-1.2 2.8-2.8h.5c.2 0 .5.1.7.3l2.6 2.3c.2.2.2.6 0 .8l-1.8 1.5c-.2.1-.2.2-.2.4z" />
    </svg>
  );
}

export default SvgShirt;
