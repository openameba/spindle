import * as React from 'react';

function SvgTriangleRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M10.23 4.2l6.04 6.04c.98.98.98 2.56 0 3.54l-6.04 6.04c-.2.2-.51.2-.71 0l-1.41-1.41c-.2-.2-.2-.51 0-.71l5.33-5.33c.2-.2.2-.51 0-.71L8.11 6.32c-.2-.2-.2-.51 0-.71L9.52 4.2c.2-.2.52-.2.71 0z" />
    </svg>
  );
}

export default SvgTriangleRight;
