import * as React from 'react';

function SvgFileFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M19.1 7.7l-4.8-4.8c-.6-.6-1.3-.9-2.1-.9H7C5.3 2 4 3.3 4 5v14c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3V9.8c0-.8-.3-1.5-.9-2.1zM16.8 10H13c-.6 0-1-.4-1-1V5.2c0-.4.5-.7.9-.4l4.3 4.3c.3.4 0 .9-.4.9z" />
    </svg>
  );
}

export default SvgFileFill;
