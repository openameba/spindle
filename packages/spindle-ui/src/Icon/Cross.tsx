import * as React from 'react';

function SvgCross(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M18.36 16.95a.996.996 0 01-.71 1.7c-.26 0-.51-.1-.71-.29L12 13.41l-4.95 4.95c-.2.2-.45.29-.71.29-.26 0-.51-.1-.71-.29a.996.996 0 010-1.41L10.59 12 5.64 7.05a.996.996 0 111.41-1.41L12 10.59l4.95-4.95a.996.996 0 111.41 1.41L13.41 12l4.95 4.95z" />
    </svg>
  );
}

export default SvgCross;
