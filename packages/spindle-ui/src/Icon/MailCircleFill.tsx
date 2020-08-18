import * as React from 'react';

function SvgMailCircleFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 12.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-5C7 8.7 7.7 8 8.5 8h7c.8 0 1.5.7 1.5 1.5v5zm-1.8-4.4c.2.3.2.7-.1.9l-1.8 1.4c-.4.3-.9.5-1.3.5-.5 0-1-.2-1.4-.5L8.9 11c-.3-.2-.3-.6-.1-.9.2-.3.6-.3.8-.1l1.8 1.4c.3.3.8.3 1.1 0l1.8-1.4c.3-.2.7-.2.9.1z" />
    </svg>
  );
}

export default SvgMailCircleFill;
