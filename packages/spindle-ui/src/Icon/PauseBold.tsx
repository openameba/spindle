import * as React from 'react';

function SvgPauseBold(props: React.SVGProps<SVGSVGElement>) {
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
        d="M9.99 5.45v13.09c0 1.36-1.1 2.45-2.45 2.45-1.36 0-2.45-1.1-2.45-2.45V5.45A2.44 2.44 0 017.53 3c1.36 0 2.46 1.1 2.46 2.45zM16.47 3c-1.36 0-2.45 1.1-2.45 2.45v13.09c0 1.36 1.1 2.45 2.45 2.45s2.45-1.1 2.45-2.45V5.45c0-1.35-1.1-2.45-2.45-2.45z"
      />
    </svg>
  );
}

export default SvgPauseBold;
