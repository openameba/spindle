import * as React from 'react';

function SvgArrowpagingLeftCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2c5.51 0 10 4.49 10 10s-4.49 10-10 10S2 17.51 2 12 6.49 2 12 2zm0 2c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm2.18 4.2v7.58c0 .89-1.07 1.34-1.7.71l-3.79-3.76a.987.987 0 01-.01-1.41l3.79-3.82c.63-.64 1.71-.19 1.71.7z"
      />
    </svg>
  );
}

export default SvgArrowpagingLeftCircle;
