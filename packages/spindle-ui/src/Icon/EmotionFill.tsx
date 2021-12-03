import * as React from 'react';

function SvgEmotionFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M12 3a9 9 0 100 18 9 9 0 000-18zM7.49 9.92a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm7.92 5.07a4.328 4.328 0 01-6.82 0 1 1 0 111.53-1.29 2.38 2.38 0 003.76 0 1 1 0 111.53 1.29zm-.4-3.57a1.5 1.5 0 11.567-.111 1.5 1.5 0 01-.577.111h.01z" />
    </svg>
  );
}

export default SvgEmotionFill;
