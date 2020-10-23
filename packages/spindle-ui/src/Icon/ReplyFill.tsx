import * as React from 'react';

function SvgReplyFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M20.53 16.86c-1.18-4.4-4.91-7.75-9.51-8.38V5.17c0-.44-.53-.67-.85-.36l-6.02 5.81c-.2.2-.2.52 0 .72l6.02 5.81c.32.31.85.08.85-.36v-3.12c3.41.32 6.44 1.67 8.68 3.67.37.33.96 0 .83-.48z" />
    </svg>
  );
}

export default SvgReplyFill;
