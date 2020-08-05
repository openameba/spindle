import * as React from 'react';

function SvgMailFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M19 4H5C3.3 4 2 5.3 2 7v10c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V7c0-1.7-1.3-3-3-3zm-.7 6l-3.6 2.8c-.8.6-1.7 1-2.7 1-1 0-1.9-.3-2.7-1L5.7 10c-.5-.4-.6-1.2-.2-1.8.4-.5 1.2-.6 1.8-.2l3.6 2.8c.7.6 1.6.6 2.3 0L16.7 8c.5-.4 1.3-.3 1.8.2.4.6.3 1.4-.2 1.8z" />
    </svg>
  );
}

export default SvgMailFill;
