import * as React from 'react';

function SvgTagFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M19.5 6.5H7.28c-.5 0-.98.19-1.35.53l-3.82 3.5c-.86.79-.86 2.16 0 2.95l3.82 3.5c.37.34.85.53 1.35.53H19.5c1.1 0 2-.9 2-2v-7c0-1.11-.9-2.01-2-2.01zM5 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
    </svg>
  );
}

export default SvgTagFill;
