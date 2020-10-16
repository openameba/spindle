import * as React from 'react';

function SvgCoupon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M18 4H6C3.79 4 2 5.79 2 8v8c0 2.21 1.79 4 4 4h12c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm2 12c0 1.1-.9 2-2 2h-7.99v-2c0-.55-.45-1-1-1s-1 .45-1 1v2H6c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h2.01v2c0 .55.45 1 1 1s1-.45 1-1V6H18c1.1 0 2 .9 2 2v8zm-9.99-5v2c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1z" />
    </svg>
  );
}

export default SvgCoupon;
