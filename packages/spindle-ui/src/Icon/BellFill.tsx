import * as React from 'react';

function SvgBellFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M13.73 20c.39 0 .63.43.43.76C13.72 21.5 12.92 22 12 22c-.92 0-1.72-.5-2.16-1.24-.2-.33.04-.76.43-.76h3.46zm5.87-5.53c-.39-.52-.6-1.15-.6-1.8V10c0-3.3-2.3-6.07-5.38-6.8C13.27 2.46 12.7 2 12 2c-.7 0-1.27.46-1.62 1.2C7.3 3.93 5 6.7 5 10v2.67c0 .65-.21 1.28-.6 1.8l-1 1.33C2.41 17.12 3.35 19 5 19h14c1.65 0 2.59-1.88 1.6-3.2l-1-1.33z" />
    </svg>
  );
}

export default SvgBellFill;
