import * as React from 'react';

function SvgMinus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M19.5 13h-15c-.55 0-1-.45-1-1s.45-1 1-1h15c.55 0 1 .45 1 1s-.45 1-1 1z" />
    </svg>
  );
}

export default SvgMinus;
