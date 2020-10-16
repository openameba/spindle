import * as React from 'react';

function SvgPersonFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M7.5 6.5C7.5 4 9.5 2 12 2s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5zM19.2 21c1.1-.3 1.7-1.5 1.4-2.5-1-2.9-3.5-5.5-8.5-5.5s-7.6 2.6-8.5 5.5c-.4 1.1.3 2.2 1.4 2.5 4.5 1.3 9.5 1.3 14.2 0z" />
    </svg>
  );
}

export default SvgPersonFill;
