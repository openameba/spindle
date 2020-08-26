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
      <path d="M21.58 7.15c-.23-.87-.91-1.55-1.77-1.78-1.56-.42-7.81-.42-7.81-.42s-6.25 0-7.81.42c-.86.24-1.54.92-1.77 1.78C2 8.72 2 12 2 12s0 3.28.42 4.85c.23.87.91 1.55 1.77 1.78 1.56.42 7.81.42 7.81.42s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.78C22 15.28 22 12 22 12s0-3.28-.42-4.85zM9.95 14.97V9.03L15.18 12l-5.23 2.97z" />
    </svg>
  );
}

export default SvgYoutube;
