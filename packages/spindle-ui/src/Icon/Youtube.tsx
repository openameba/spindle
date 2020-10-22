import * as React from 'react';

function SvgYoutube(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M20.62 7.64c-.21-.78-.82-1.39-1.59-1.6-1.4-.38-7.03-.38-7.03-.38s-5.63 0-7.03.38c-.77.21-1.38.82-1.59 1.6C3 9.05 3 12 3 12s0 2.95.38 4.36c.21.78.82 1.39 1.59 1.6 1.4.38 7.03.38 7.03.38s5.63 0 7.03-.38c.77-.21 1.38-.82 1.59-1.6C21 14.95 21 12 21 12s0-2.95-.38-4.36zm-10.46 7.04V9.32l4.7 2.68-4.7 2.68z" />
    </svg>
  );
}

export default SvgYoutube;
