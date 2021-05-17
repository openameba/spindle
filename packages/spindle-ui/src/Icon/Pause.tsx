import * as React from 'react';

function SvgPause(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M7.53 3c.99 0 1.8.81 1.8 1.8v14.4c0 .99-.81 1.8-1.8 1.8s-1.8-.81-1.8-1.8V4.8c0-1 .81-1.8 1.8-1.8zm8.94 0c.99 0 1.8.81 1.8 1.8v14.4c0 .99-.81 1.8-1.8 1.8s-1.8-.81-1.8-1.8V4.8c0-1 .8-1.8 1.8-1.8z" />
    </svg>
  );
}

export default SvgPause;
