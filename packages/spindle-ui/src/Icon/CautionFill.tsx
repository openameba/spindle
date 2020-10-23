import * as React from 'react';

function SvgCautionFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M21.971 18.032l-8.12-14.05c-.77-1.33-2.69-1.33-3.46 0l-8.12 14.05c-.77 1.33.19 3 1.73 3h16.23c1.54 0 2.5-1.66 1.74-3zm-11.1-10.05a1.25 1.25 0 012.5 0v5.5a1.25 1.25 0 01-2.5 0v-5.5zm1.25 11a1.25 1.25 0 11.001-2.5 1.25 1.25 0 010 2.5z" />
    </svg>
  );
}

export default SvgCautionFill;
