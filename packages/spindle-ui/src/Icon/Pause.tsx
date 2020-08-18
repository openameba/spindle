import * as React from 'react';

function SvgPause(props: React.SVGProps<SVGSVGElement>) {
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
        d="M5.08 5.45C5.08 4.1 6.18 3 7.53 3c1.36 0 2.46 1.1 2.45 2.45v13.09c0 1.35-1.09 2.45-2.45 2.45-1.35 0-2.45-1.09-2.45-2.45V5.45zm8.94 0C14.02 4.1 15.11 3 16.47 3c1.35 0 2.45 1.1 2.45 2.45v13.09c0 1.35-1.1 2.45-2.45 2.45s-2.45-1.09-2.45-2.45V5.45z"
      />
    </svg>
  );
}

export default SvgPause;
