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
      <path d="M21.85 17.96L13.73 3.91c-.77-1.33-2.69-1.33-3.46 0L2.15 17.96c-.77 1.33.19 3 1.73 3h16.23c1.54 0 2.5-1.66 1.74-3zM10.75 7.91a1.25 1.25 0 012.5 0v5.5a1.25 1.25 0 01-2.5 0v-5.5zm1.25 11a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
    </svg>
  );
}

export default SvgCautionFill;
