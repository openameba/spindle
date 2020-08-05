import * as React from 'react';

function SvgReply(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12.05 8.03h-.04v-3c0-.83-.96-1.3-1.62-.79L3.68 9.49c-.51.4-.51 1.18 0 1.58l6.72 5.24c.66.51 1.62.04 1.62-.79v-2.99h.04c3.31 0 6 2.69 6 6 0 .49-.06.97-.18 1.42-.07.26.08.54.34.61.25.07.46-.04.58-.23a7.971 7.971 0 001.26-4.3c-.01-4.42-3.6-8-8.01-8z" />
    </svg>
  );
}

export default SvgReply;
