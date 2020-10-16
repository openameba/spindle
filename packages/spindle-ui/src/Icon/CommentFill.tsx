import * as React from 'react';

function SvgCommentFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M19.01 4h-14c-1.66 0-3 1.34-3 3v8c0 1.66 1.34 3 3 3h5.66l4.53 3.4c.33.25.8.01.8-.4v-3h3.01c1.66 0 3-1.34 3-3V7c0-1.66-1.34-3-3-3z" />
    </svg>
  );
}

export default SvgCommentFill;
