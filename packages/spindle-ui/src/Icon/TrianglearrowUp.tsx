import * as React from 'react';

function SvgTrianglearrowUp(props: React.SVGProps<SVGSVGElement>) {
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
        d="M17.14 7.73L12.7 3.28a.996.996 0 00-1.41 0L6.83 7.73c-.63.63-.18 1.7.71 1.7h2.96V19.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V9.43h2.93c.9 0 1.34-1.07.71-1.7z"
      />
    </svg>
  );
}

export default SvgTrianglearrowUp;
