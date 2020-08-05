import * as React from 'react';

function SvgChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M9.41 21c-.26 0-.51-.1-.71-.29a.996.996 0 010-1.41L16 12 8.71 4.71a.996.996 0 111.41-1.41l7.29 7.29c.78.78.78 2.05 0 2.83l-7.29 7.29c-.19.19-.45.29-.71.29z" />
    </svg>
  );
}

export default SvgChevronRight;
