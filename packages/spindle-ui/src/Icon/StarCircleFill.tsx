import * as React from 'react';

function SvgStarCircleFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.65 8.94L16 13.36l.72 3.51c.19.92-.79 1.63-1.6 1.16L12 16.26l-3.12 1.77c-.81.46-1.79-.25-1.6-1.16L8 13.36l-2.65-2.42c-.69-.63-.32-1.78.61-1.88l3.56-.4L11 5.4c.39-.85 1.59-.85 1.98 0l1.48 3.26 3.56.4c.94.1 1.32 1.25.63 1.88z" />
    </svg>
  );
}

export default SvgStarCircleFill;
