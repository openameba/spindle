import * as React from 'react';

function SvgArticle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M19.04 7.71l-4.83-4.83C13.65 2.31 12.9 2 12.09 2H7.92c-2.21 0-4 1.79-4 4v12c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4V9.83c0-.8-.31-1.56-.88-2.12zm-5.12-2.3L16.51 8h-2.59V5.41zm4 12.59c0 1.1-.9 2-2 2h-8c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h4v4c0 1.1.9 2 2 2h4v8zm-9-6h6c.55 0 1 .45 1 1s-.45 1-1 1h-6c-.55 0-1-.45-1-1s.45-1 1-1zm7 5c0 .55-.45 1-1 1h-6c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1z" />
    </svg>
  );
}

export default SvgArticle;
