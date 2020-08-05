import * as React from 'react';

function SvgArrowpagingUpCircle(props: React.SVGProps<SVGSVGElement>) {
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
        d="M22 12c0 5.51-4.49 10-10 10S2 17.51 2 12 6.49 2 12 2s10 4.49 10 10zm-2 0c0-4.41-3.59-8-8-8s-8 3.59-8 8 3.59 8 8 8 8-3.59 8-8zm-4.2 2.18H8.22c-.89 0-1.34-1.07-.71-1.7l3.76-3.79c.38-.4 1.02-.4 1.41-.01l3.82 3.79c.64.63.19 1.71-.7 1.71z"
      />
    </svg>
  );
}

export default SvgArrowpagingUpCircle;
