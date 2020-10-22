import * as React from 'react';

function SvgCoin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M20.96 12.735v-.5 2.26c0 3.22-3.95 5.75-9 5.75s-9-2.53-9-5.75v-1.76c.2 3.1 4.09 5 9 5s8.8-1.9 9-5zm0-3.74v1.5c0 3.22-3.95 5.75-9 5.75s-9-2.53-9-5.75v-1.5c0-3.08 3.95-5.5 9-5.5s9 2.41 9 5.5zm-1.5 0c0-2.17-3.43-4-7.5-4s-7.5 1.83-7.5 4 3.43 4 7.5 4 7.5-1.84 7.5-4zm-2 0c0-1.6-2.36-2.81-5.5-2.81s-5.5 1.21-5.5 2.81 2.36 2.81 5.5 2.81 5.5-1.21 5.5-2.81zm-1 0c0 .85-1.92 1.81-4.5 1.81s-4.5-.96-4.5-1.81c0-.86 1.92-1.81 4.5-1.81s4.5.95 4.5 1.81z" />
    </svg>
  );
}

export default SvgCoin;
