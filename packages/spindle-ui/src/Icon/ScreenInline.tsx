import * as React from 'react';

function SvgScreenInline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M14 7.05V4c0-.55.45-1 1-1s1 .45 1 1v3.05c0 .55.45 1 1 1h3c.55 0 1 .45 1 1s-.45 1-1 1h-3c-1.66 0-3-1.34-3-3zM9 3c-.55 0-1 .45-1 1v3.05c0 .55-.45 1-1 1H4c-.55 0-1 .45-1 1s.45 1 1 1h3c1.66 0 3-1.34 3-3V4c0-.55-.45-1-1-1zM7 14.05H4c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1 .45 1 1V20c0 .55.45 1 1 1s1-.45 1-1v-2.95c0-1.65-1.34-3-3-3zm13 0h-3c-1.66 0-3 1.34-3 3V20c0 .55.45 1 1 1s1-.45 1-1v-2.95c0-.55.45-1 1-1h3c.55 0 1-.45 1-1s-.45-1-1-1z" />
    </svg>
  );
}

export default SvgScreenInline;
