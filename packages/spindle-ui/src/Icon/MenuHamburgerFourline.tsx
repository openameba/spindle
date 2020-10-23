import * as React from 'react';

function SvgMenuHamburgerFourline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M19.99 6.04h-16c-.55 0-1-.45-1-1s.45-1 1-1h16c.55 0 1 .45 1 1s-.44 1-1 1zm1 3.64c0-.55-.45-1-1-1h-16c-.55 0-1 .45-1 1s.45 1 1 1h16c.56 0 1-.45 1-1zm0 4.64c0-.55-.45-1-1-1h-16c-.55 0-1 .45-1 1s.45 1 1 1h16c.56 0 1-.45 1-1zm0 4.64c0-.55-.45-1-1-1h-16c-.55 0-1 .45-1 1s.45 1 1 1h16c.56 0 1-.45 1-1z" />
    </svg>
  );
}

export default SvgMenuHamburgerFourline;
