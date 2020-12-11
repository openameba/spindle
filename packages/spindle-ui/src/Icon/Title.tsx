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
      <path d="M10.5 8v10.75a1.25 1.25 0 01-2.5 0V8H4.25a1.25 1.25 0 010-2.5h10a1.25 1.25 0 010 2.5H10.5zm9.25 2.21h-6a1.25 1.25 0 000 2.5h1.75v6.04a1.25 1.25 0 002.5 0v-6.04h1.75a1.25 1.25 0 000-2.5z" />
    </svg>
  );
}

export default SvgTitle;
