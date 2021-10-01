import * as React from 'react';

function SvgCalendardaily(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M18 4h-1c0-.55-.45-1-1-1s-1 .45-1 1H9c0-.55-.45-1-1-1s-1 .45-1 1H6C3.79 4 2 5.79 2 8v9c0 2.21 1.79 4 4 4h12c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm2 13c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h1v1c0 .55.45 1 1 1s1-.45 1-1V6h6v1c0 .55.45 1 1 1s1-.45 1-1V6h1c1.1 0 2 .9 2 2v9z" />
      <path d="M12.88 8.58a.988.988 0 00-1.09.22l-2 2a.996.996 0 101.41 1.41l.29-.29v3.59c0 .55.45 1 1 1s1-.45 1-1v-6a.968.968 0 00-.61-.93z" />
    </svg>
  );
}

export default SvgCalendardaily;
