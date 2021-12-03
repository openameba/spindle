import * as React from 'react';

function SvgTitle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M10.23 6.5v12.25a1.25 1.25 0 01-2.5 0V6.5H3.22a1.25 1.25 0 010-2.5h11.53a1.25 1.25 0 010 2.5h-4.52zM20.5 8.75h-7a1.25 1.25 0 000 2.5h2.25v7.5a1.25 1.25 0 002.5 0v-7.5h2.25a1.25 1.25 0 000-2.5z" />
    </svg>
  );
}

export default SvgTitle;
