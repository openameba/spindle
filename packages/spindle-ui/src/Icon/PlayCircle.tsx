import * as React from 'react';

function SvgPlayCircle(props: React.SVGProps<SVGSVGElement>) {
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
        d="M2.09 12c0-5.51 4.49-10 10-10s10 4.49 10 10-4.49 10-10 10-10-4.49-10-10zm2 0c0 4.41 3.59 8 8 8s8-3.59 8-8-3.59-8-8-8-8 3.59-8 8zm6.84-4.12l5.26 3.27a1 1 0 010 1.7l-5.26 3.27c-.67.41-1.53-.07-1.53-.85V8.73a1 1 0 011.53-.85z"
      />
    </svg>
  );
}

export default SvgPlayCircle;
