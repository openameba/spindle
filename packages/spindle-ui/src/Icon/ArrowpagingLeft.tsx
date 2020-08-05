import * as React from 'react';

function SvgArrowpagingLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.8 12.67l4.59 4.62c.63.63 1.71.19 1.71-.7V7.41c0-.89-1.07-1.34-1.7-.71l-4.59 4.55c-.39.39-.39 1.02-.01 1.42z"
      />
    </svg>
  );
}

export default SvgArrowpagingLeft;
