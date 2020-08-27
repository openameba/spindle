import * as React from 'react';

function SvgComment(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.37 3H19c1.66 0 3 1.34 3 3v5.64c0 1.66-1.34 3-3 3h-.28v2.43a.5.5 0 01-.8.4l-3.77-2.83H8.37c-1.66 0-3-1.34-3-3V6c0-1.66 1.34-3 3-3zm-4.5 7.27v1.37c0 2.48 2.02 4.5 4.5 4.5h6.15v.84c0 1.1-.9 2-2 2h-4.6L5.22 21c-.31.23-.75.01-.75-.37v-1.65h-.43c-1.1 0-2-.9-2-2v-4.73c0-1.04.8-1.89 1.83-1.98z"
      />
    </svg>
  );
}

export default SvgComment;
