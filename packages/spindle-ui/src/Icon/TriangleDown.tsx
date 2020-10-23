import * as React from 'react';

function SvgTriangleDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M19.8 10.23l-6.04 6.04c-.98.98-2.56.98-3.54 0L4.2 10.23c-.2-.19-.2-.51 0-.71l1.41-1.41c.2-.2.51-.2.71 0l5.33 5.33c.2.2.51.2.71 0l5.33-5.33c.2-.2.51-.2.71 0l1.41 1.41c.19.2.19.52-.01.71z" />
    </svg>
  );
}

export default SvgTriangleDown;
