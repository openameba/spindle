import * as React from 'react';

function SvgPlusCircleFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 11h-4v4c0 .6-.4 1-1 1s-1-.4-1-1v-4H7c-.6 0-1-.4-1-1s.4-1 1-1h4V7c0-.6.4-1 1-1s1 .4 1 1v4h4c.6 0 1 .4 1 1s-.4 1-1 1z" />
    </svg>
  );
}

export default SvgPlusCircleFill;
