import * as React from 'react';

function SvgFileAdd(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M13.5 10.5H18v.71c0 .55.45 1 1 1s1-.45 1-1v-.97c0-1.05-.43-2.08-1.17-2.83l-4.24-4.24A4.021 4.021 0 0011.76 2H8C5.79 2 4 3.79 4 6v12c0 2.21 1.79 4 4 4h4c.55 0 1-.45 1-1s-.45-1-1-1H8c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h3.5v4.5c0 1.1.9 2 2 2zm0-5.59l3.59 3.59H13.5V4.91zM23 18.5c0 .55-.45 1-1 1h-2.5V22c0 .55-.45 1-1 1s-1-.45-1-1v-2.5H15c-.55 0-1-.45-1-1s.45-1 1-1h2.5V15c0-.55.45-1 1-1s1 .45 1 1v2.5H22c.55 0 1 .45 1 1z" />
    </svg>
  );
}

export default SvgFileAdd;
