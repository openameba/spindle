import * as React from 'react';

function SvgSmartphoneFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M15 2H9C6.79 2 5 3.79 5 6v12c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4zm-4.25 2h2.5c.41 0 .75.34.75.75s-.34.75-.75.75h-2.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM12 20c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4-5c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1V8.5c0-.55.45-1 1-1h6c.55 0 1 .45 1 1V15z" />
    </svg>
  );
}

export default SvgSmartphoneFill;
