import * as React from 'react';

function SvgArrowpagingRightCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.49 10 10-4.49 10-10 10zm0-2c4.41 0 8-3.59 8-8s-3.59-8-8-8-8 3.59-8 8 3.59 8 8 8zm-2.18-4.2V8.22c0-.89 1.07-1.34 1.7-.71l3.79 3.76c.4.38.4 1.02.01 1.41l-3.79 3.82c-.63.64-1.71.19-1.71-.7z"
      />
    </svg>
  );
}

export default SvgArrowpagingRightCircle;
