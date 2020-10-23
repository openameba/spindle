import * as React from 'react';

function SvgScreenFull(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M10 20c0 .55-.45 1-1 1H7c-2.21 0-4-1.79-4-4v-2.05c0-.55.45-1 1-1s1 .45 1 1V17c0 1.1.9 2 2 2h2c.55 0 1 .45 1 1zm10-6.05c-.55 0-1 .45-1 1V17c0 1.1-.9 2-2 2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c2.21 0 4-1.79 4-4v-2.05c0-.56-.45-1-1-1zM17 3h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c1.1 0 2 .9 2 2v1.95c0 .55.45 1 1 1s1-.45 1-1V7c0-2.21-1.79-4-4-4zM9 3H7C4.79 3 3 4.79 3 7v1.95c0 .55.45 1 1 1s1-.45 1-1V7c0-1.1.9-2 2-2h2c.55 0 1-.45 1-1s-.45-1-1-1z" />
    </svg>
  );
}

export default SvgScreenFull;
