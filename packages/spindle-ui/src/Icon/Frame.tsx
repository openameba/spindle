import * as React from 'react';

function SvgFrame(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M19.1 13.02c-.54-.09-1.05.3-1.13.85C17.55 16.79 15 19 12.04 19c-3.31 0-6-2.69-6-6 0-3.3 2.67-5.98 5.96-6v2.73c0 .45.54.67.85.35l3.74-3.74c.2-.2.2-.51 0-.71L12.85 1.9c-.31-.32-.85-.09-.85.35V5c-4.39.02-7.96 3.6-7.96 8 0 4.41 3.59 8 8 8 3.95 0 7.35-2.95 7.91-6.85a.995.995 0 00-.85-1.13z" />
    </svg>
  );
}

export default SvgFrame;
