import * as React from 'react';

function SvgChevronUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M20.97 14.55c0 .26-.1.51-.29.71a.996.996 0 01-1.41 0l-7.29-7.29-7.29 7.29a.996.996 0 11-1.41-1.41l7.29-7.29c.78-.78 2.05-.78 2.83 0l7.29 7.29c.19.19.28.44.28.7z" />
    </svg>
  );
}

export default SvgChevronUp;
