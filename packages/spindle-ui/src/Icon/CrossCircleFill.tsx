import * as React from 'react';

function SvgCrossCircleFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.83 14.24L12 13.41l-2.83 2.83a.996.996 0 11-1.41-1.41L10.59 12 7.76 9.17a.996.996 0 111.41-1.41L12 10.59l2.83-2.83a.996.996 0 111.41 1.41L13.41 12l2.83 2.83a.996.996 0 11-1.41 1.41z" />
    </svg>
  );
}

export default SvgCrossCircleFill;
