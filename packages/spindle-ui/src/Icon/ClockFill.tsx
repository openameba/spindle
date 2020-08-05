import * as React from 'react';

function SvgClockFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5.5 11.2H13c-1.2 0-2.2-1-2.2-2.2V6.5c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2v4.2h4.2c.7 0 1.2.6 1.2 1.2s-.4 1.3-1.1 1.3z" />
    </svg>
  );
}

export default SvgClockFill;
