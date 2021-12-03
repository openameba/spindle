import * as React from 'react';

function SvgEmbed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M7.93 17.68a1 1 0 01-.23 1.4 1 1 0 01-.58.18 1 1 0 01-.81-.41l-3.87-5.39a2.49 2.49 0 010-2.92l3.87-5.37a1 1 0 111.62 1.16l-3.87 5.38a.51.51 0 000 .58l3.87 5.39zm13.6-7.13l-3.87-5.38a.999.999 0 00-1.817.8c.04.132.107.255.198.36l3.87 5.39a.53.53 0 010 .59L16 17.68a1 1 0 00.22 1.4 1 1 0 00.59.18 1 1 0 00.81-.41l3.87-5.38a2.49 2.49 0 00.04-2.92zM16.75 12a1 1 0 00-1-1H13V8.25a1 1 0 00-2 0V11H8.23a1 1 0 000 2H11v2.74a1 1 0 002 0V13h2.73a1 1 0 001.02-1z" />
    </svg>
  );
}

export default SvgEmbed;
