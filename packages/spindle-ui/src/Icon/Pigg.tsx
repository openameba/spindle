import * as React from 'react';

function SvgPigg(props: React.SVGProps<SVGSVGElement>) {
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
        d="M11.99 4.2c-3.65 0-6.65 2.69-6.95 6.09-.02.12-.03 2.06-.03 2.19v6.2c0 1.28 1.04 2.32 2.32 2.32 1.28 0 2.32-1.04 2.32-2.32v-1.61c.73.25 1.51.39 2.33.39 4.22 0 6.99-2.96 6.99-6.61.01-3.66-3.12-6.65-6.98-6.65zM12 13c-1.23 0-2.27-.98-2.27-2.14 0-1.18 1.04-2.18 2.27-2.18 1.22 0 2.28 1.02 2.28 2.18 0 1.16-1.05 2.14-2.28 2.14z"
      />
    </svg>
  );
}

export default SvgPigg;
