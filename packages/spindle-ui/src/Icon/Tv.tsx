import * as React from 'react';

function SvgTv(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M18 5.93h-3.06l1.26-1.21a.996.996 0 10-1.38-1.44l-2.75 2.65h-.11L9.19 3.28a.996.996 0 10-1.38 1.44l1.26 1.21H6c-2.21 0-4 1.79-4 4v6.13c0 1.86 1.28 3.41 3 3.86V20c0 .55.45 1 1 1h2c.53 0 .95-.41.99-.93h6.03c.03.52.45.93.98.93h2c.55 0 1-.45 1-1v-.08c1.72-.45 3-2 3-3.86V9.93c0-2.2-1.79-4-4-4zM17 15c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v4zm2.5 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
    </svg>
  );
}

export default SvgTv;
