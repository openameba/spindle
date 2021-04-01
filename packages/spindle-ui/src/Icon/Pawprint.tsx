import * as React from 'react';

function SvgPawprint(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M16.2 13.5c-1-1-1-3-4-3s-3 2-4 3c-1.3 1.3-2.5 2-2.5 3.5 0 2 1.5 3 3.5 3h6c2 0 3.5-1 3.5-3 .1-1.5-1.5-2.5-2.5-3.5zm-6.8-6c1.2 0 2.1-1 2.1-2.1v-.3c0-1.1-1-2.1-2.1-2.1S7.2 4 7.2 5.1v.2c0 1.2 1 2.2 2.2 2.2zm5.7 0c1.2 0 2.1-1 2.1-2.1v-.3c0-1.2-1-2.1-2.1-2.1S13 4 13 5.1v.2c0 1.2 1 2.2 2.1 2.2zm-7.9 2.9v-.3C7.2 9 6.3 8 5.1 8 4 8 3 9 3 10.1v.2c0 1.2 1 2.1 2.1 2.1 1.2.1 2.1-.9 2.1-2zM19.4 8c-1.2 0-2.1 1-2.1 2.1v.2c0 1.2 1 2.1 2.1 2.1 1.2 0 2.1-1 2.1-2.1v-.2c0-1.1-1-2.1-2.1-2.1z" />
    </svg>
  );
}

export default SvgPawprint;
