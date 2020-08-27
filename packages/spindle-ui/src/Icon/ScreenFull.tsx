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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 3h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c1.1 0 2 .9 2 2v1.95c0 .55.45 1 1 1s1-.45 1-1V7c0-2.21-1.79-4-4-4zM7 19h2c.55 0 1 .45 1 1s-.45 1-1 1H7c-2.21 0-4-1.79-4-4v-2.05c0-.55.45-1 1-1s1 .45 1 1V17c0 1.1.9 2 2 2zm12-4.05c0-.55.45-1 1-1s1 .44 1 1V17c0 2.21-1.79 4-4 4h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c1.1 0 2-.9 2-2v-2.05zM7 3h2c.55 0 1 .45 1 1s-.45 1-1 1H7c-1.1 0-2 .9-2 2v1.95c0 .55-.45 1-1 1s-1-.45-1-1V7c0-2.21 1.79-4 4-4z"
      />
    </svg>
  );
}

export default SvgScreenFull;
