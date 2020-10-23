import * as React from 'react';

function SvgTriangleLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M13.77 19.8l-6.04-6.04c-.98-.98-.98-2.56 0-3.54l6.04-6.04c.2-.2.51-.2.71 0l1.41 1.41c.2.2.2.51 0 .71l-5.33 5.33c-.2.2-.2.51 0 .71l5.33 5.33c.2.2.2.51 0 .71l-1.41 1.41c-.2.21-.52.21-.71.01z" />
    </svg>
  );
}

export default SvgTriangleLeft;
