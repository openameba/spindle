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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.99 4h12c2.21 0 4 1.79 4 4v8c0 2.21-1.79 4-4 4h-12c-2.21 0-4-1.79-4-4V8c0-2.21 1.79-4 4-4zm12 14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2H10v2c0 .55-.45 1-1 1s-1-.45-1-1V6H5.99c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2H8v-2c0-.55.45-1 1-1s1 .45 1 1v2h7.99zM8 11c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1v-2z"
      />
    </svg>
  );
}

export default SvgCoupon;
