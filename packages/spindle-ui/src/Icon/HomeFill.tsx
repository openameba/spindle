import * as React from 'react';

function SvgHomeFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M21.756 10.925l-7.7-7.1c-1.1-1.1-2.9-1.1-4.1 0l-7.7 7.1c-1.6 1.5-.5 4.4 1.8 4.4v3c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-3c2.3 0 3.4-2.9 1.7-4.4zm-9.7 5.9c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3c0 1.6-1.3 3-3 3z" />
    </svg>
  );
}

export default SvgHomeFill;
