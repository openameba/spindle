import * as React from 'react';

function SvgExpandExit(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M10.05 4c0 .55-.45 1-1 1h-4v4c0 .55-.45 1-1 1s-1-.45-1-1V5c0-1.1.9-2 2-2h4c.55 0 1 .45 1 1zm10 10c-.55 0-1 .45-1 1v4h-4c-.55 0-1 .45-1 1s.45 1 1 1h4c1.1 0 2-.9 2-2v-4c0-.55-.45-1-1-1zm-4-4h4c.55 0 1-.45 1-1s-.45-1-1-1h-2.59l2.78-2.78a.996.996 0 10-1.41-1.41l-2.78 2.78V4c0-.55-.45-1-1-1s-1 .45-1 1v4c0 1.1.9 2 2 2zm-8 4h-4c-.55 0-1 .45-1 1s.45 1 1 1h2.59l-2.89 2.89a.996.996 0 00.71 1.7c.26 0 .51-.1.71-.29l2.89-2.89V20c0 .55.45 1 1 1s1-.45 1-1v-4c-.01-1.1-.91-2-2.01-2z" />
    </svg>
  );
}

export default SvgExpandExit;
