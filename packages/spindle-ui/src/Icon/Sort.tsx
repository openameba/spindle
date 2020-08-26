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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.76 16.26h2.74c.44 0 .67.54.36.85l-3.74 3.74c-.2.2-.51.2-.71 0l-3.74-3.74c-.32-.31-.1-.85.35-.85h2.74V4c0-.55.45-1 1-1s1 .45 1 1v12.26zM6.89 3.15c.2-.2.51-.2.71 0l3.73 3.74c.32.31.1.85-.35.85H8.24V20c0 .55-.45 1-1 1s-1-.45-1-1V7.74H3.5c-.44 0-.67-.54-.35-.85l3.74-3.74z"
      />
    </svg>
  );
}

export default SvgSort;
