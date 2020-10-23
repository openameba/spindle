import * as React from 'react';

function SvgDot(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M21.15 12a9 9 0 11-18.002-.001A9 9 0 0121.15 12z" />
    </svg>
  );
}

export default SvgDot;
