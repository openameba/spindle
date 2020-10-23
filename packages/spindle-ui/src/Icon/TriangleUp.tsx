import * as React from 'react';

function SvgTriangleUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M4.2 13.77l6.04-6.04c.98-.98 2.56-.98 3.54 0l6.04 6.04c.2.2.2.51 0 .71l-1.41 1.41c-.2.2-.51.2-.71 0l-5.33-5.33c-.2-.2-.51-.2-.71 0l-5.33 5.33c-.2.2-.51.2-.71 0L4.2 14.48c-.2-.2-.2-.52 0-.71z" />
    </svg>
  );
}

export default SvgTriangleUp;
