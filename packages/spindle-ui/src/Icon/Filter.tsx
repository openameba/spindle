import * as React from 'react';

function SvgFilter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M3 5.5c0-.05.02-.09.03-.14A2.49 2.49 0 015.51 3c1.02 0 1.9.62 2.29 1.5H20c.55 0 1 .45 1 1s-.45 1-1 1H7.8a2.49 2.49 0 01-4.77-.86C3.02 5.59 3 5.55 3 5.5zM4 13h12.23c.39.88 1.26 1.5 2.29 1.5a2.5 2.5 0 000-5c-1.02 0-1.9.62-2.29 1.5H4c-.55 0-1 .45-1 1s.45 1 1 1zm16 4.5H7.8c-.38-.88-1.26-1.5-2.29-1.5-1.33 0-2.41 1.05-2.49 2.36 0 .05-.02.09-.02.14 0 .05.02.09.03.14A2.49 2.49 0 005.51 21c1.02 0 1.9-.62 2.29-1.5H20c.55 0 1-.45 1-1s-.45-1-1-1z" />
    </svg>
  );
}

export default SvgFilter;
