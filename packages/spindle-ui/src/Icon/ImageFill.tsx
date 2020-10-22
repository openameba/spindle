import * as React from 'react';

function SvgImageFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M19 4H5C3.34 4 2 5.34 2 7v10c0 .23.03.45.08.66 0 .01.01.03.01.04.05.2.12.39.21.58v.01A2.992 2.992 0 005 20h14c1.66 0 3-1.34 3-3V7c0-1.66-1.34-3-3-3zm-9 5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm10 8c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1v-.21c0-.13.05-.26.15-.35l3.15-3.15a.996.996 0 011.41 0l1.44 1.44c.2.2.51.2.71 0l4.44-4.44a.996.996 0 011.41 0l3.15 3.15c.09.09.15.22.15.35V17H20z" />
    </svg>
  );
}

export default SvgImageFill;
