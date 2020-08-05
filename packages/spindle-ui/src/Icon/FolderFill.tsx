import * as React from 'react';

function SvgFolderFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M13.1 5.7L12 4.6c-.4-.4-.9-.6-1.4-.6H5C3.3 4 2 5.3 2 7v10c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V9c0-1.7-1.3-3-3-3h-5.2c-.2 0-.5-.1-.7-.3z" />
    </svg>
  );
}

export default SvgFolderFill;
