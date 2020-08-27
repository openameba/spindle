import * as React from 'react';

function SvgChevronLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M13.84 20.71l-7.29-7.29c-.78-.78-.78-2.05 0-2.83l7.29-7.29a.996.996 0 111.41 1.41L7.96 12l7.29 7.29c.39.39.39 1.02 0 1.41-.19.2-.45.3-.7.3-.25 0-.51-.1-.71-.29z" />
    </svg>
  );
}

export default SvgChevronLeft;
