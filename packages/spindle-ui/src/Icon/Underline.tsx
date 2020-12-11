import * as React from 'react';

function SvgUnderline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M17.75 21H6.25a1.25 1.25 0 010-2.5h11.5a1.25 1.25 0 010 2.5zm-.05-10.2V4.25a1.25 1.25 0 00-2.5 0v6.55c0 1.77-1.44 3.2-3.2 3.2a3.21 3.21 0 01-3.2-3.2V4.25a1.25 1.25 0 00-2.5 0v6.55c0 3.14 2.56 5.7 5.7 5.7s5.7-2.56 5.7-5.7z" />
    </svg>
  );
}

export default SvgUnderline;
