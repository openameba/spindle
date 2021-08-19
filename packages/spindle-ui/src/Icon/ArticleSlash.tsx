import * as React from 'react';

function SvgArticleSlash(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M7.92 4.01h4v4c0 1.1.9 2 2 2h4v5.09l2 2V9.84c0-.8-.31-1.55-.88-2.12l-4.83-4.83c-.57-.57-1.32-.88-2.12-.88H7.92c-.87 0-1.67.29-2.33.76l1.45 1.45c.27-.13.57-.21.88-.21zm6 1.41l2.59 2.59h-2.59V5.42zm6.79 15.12L3.46 3.29A.996.996 0 102.05 4.7l1.88 1.88V18c0 2.21 1.79 4 4 4h8c.96 0 1.83-.34 2.51-.91l.86.86c.2.2.45.29.71.29.26 0 .51-.1.71-.29.38-.38.38-1.02-.01-1.41zm-4.79-.53h-8c-1.1 0-2-.9-2-2V8.59l3.42 3.42h-.42c-.55 0-1 .45-1 1s.45 1 1 1h2.42l2 2H8.92c-.55 0-1 .45-1 1s.45 1 1 1h6c.12 0 .24-.03.35-.07l1.74 1.74c-.31.2-.68.33-1.09.33z" />
    </svg>
  );
}

export default SvgArticleSlash;
