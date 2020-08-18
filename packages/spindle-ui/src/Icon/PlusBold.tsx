import * as React from 'react';

function SvgPlusBold(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M21 12c0 .8-.7 1.5-1.5 1.5h-6v6c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5v-6h-6c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h6v-6c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v6h6c.8 0 1.5.7 1.5 1.5z" />
    </svg>
  );
}

export default SvgPlusBold;
