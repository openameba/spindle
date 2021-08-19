import * as React from 'react';

function SvgDownload(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M16.79 10.94l-3.37 3.37c-.39.39-.9.58-1.41.58-.51 0-1.02-.2-1.41-.58l-3.37-3.37a.996.996 0 111.41-1.41L11 11.89V4c0-.55.45-1 1-1s1 .45 1 1v7.89l2.37-2.37a.996.996 0 011.41 0c.39.39.4 1.03.01 1.42zM21 18v-6c0-.55-.45-1-1-1s-1 .45-1 1v6c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1v-6c0-.55-.45-1-1-1s-1 .45-1 1v6c0 1.65 1.35 3 3 3h12c1.65 0 3-1.35 3-3z" />
    </svg>
  );
}

export default SvgDownload;
