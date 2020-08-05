import * as React from 'react';

function SvgCamera(props: React.SVGProps<SVGSVGElement>) {
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
        d="M16.86 5.5H19c1.66 0 3 1.34 3 3v8.99c0 1.66-1.34 3-3 3H5c-1.66 0-3-1.34-3-3V8.5c0-1.66 1.34-3 3-3h2.16L8 4.34a2 2 0 011.62-.82h4.77c.64 0 1.23.3 1.61.81l.86 1.17zM7 12.99c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5-5 2.24-5 5zm8 0a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

export default SvgCamera;
