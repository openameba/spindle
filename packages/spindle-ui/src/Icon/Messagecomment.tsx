import * as React from 'react';

function SvgMessagecomment(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M15.15 21.53c-.29 0-.59-.09-.83-.28l-4.36-3.27H6c-2.21 0-4-1.79-4-4V8c0-2.21 1.79-4 4-4h12c2.21 0 4 1.79 4 4v5.97c0 2.21-1.79 4-4 4h-1.46v2.16c0 .53-.29 1.01-.77 1.25-.2.1-.41.15-.62.15zM6 6c-1.1 0-2 .9-2 2v5.97c0 1.1.9 2 2 2h4.62l3.93 2.95v-2.95H18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2H6z" />
    </svg>
  );
}

export default SvgMessagecomment;
