import * as React from 'react';

function SvgAlign(props: React.SVGProps<SVGSVGElement>) {
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
        d="M20.03 6h-16c-.56 0-1-.45-1-1s.45-1 1-1h16c.55 0 1 .45 1 1s-.45 1-1 1zm-5 4.66h-11c-.56 0-1-.45-1-1s.45-1 1-1h11c.55 0 1 .45 1 1s-.45 1-1 1zm5 2.66h-16c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1zm-16 4.66h11c.55 0 1 .45 1 1s-.45 1-1 1h-11c-.55 0-1-.45-1-1s.45-1 1-1z"
      />
    </svg>
  );
}

export default SvgAlign;
