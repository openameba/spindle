import * as React from 'react';

function SvgBullets(props: React.SVGProps<SVGSVGElement>) {
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
        d="M6 6.47a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm14 1H9c-.55 0-1-.45-1-1s.45-1 1-1h11c.55 0 1 .45 1 1s-.45 1-1 1zm0 3.48H9c-.55 0-1 .45-1 1s.45 1 1 1h11c.55 0 1-.45 1-1s-.45-1-1-1zm-14 1a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm14 4.58H9c-.55 0-1 .45-1 1s.45 1 1 1h11c.55 0 1-.45 1-1s-.45-1-1-1zm-14 1a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
      />
    </svg>
  );
}

export default SvgBullets;
