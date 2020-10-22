import * as React from 'react';

function SvgSort(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M11.34 6.89a.5.5 0 01-.35.85H8.24V20c0 .55-.45 1-1 1s-1-.45-1-1V7.74H3.5c-.45 0-.67-.54-.35-.85l3.74-3.74c.2-.2.51-.2.71 0l3.74 3.74zm9.16 9.37h-2.74V4c0-.55-.45-1-1-1s-1 .45-1 1v12.26h-2.74c-.45 0-.67.54-.35.85l3.74 3.74c.2.2.51.2.71 0l3.74-3.74c.31-.31.08-.85-.36-.85z" />
    </svg>
  );
}

export default SvgSort;
