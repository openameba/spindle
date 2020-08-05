import * as React from 'react';

function SvgArrowRightCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        d="M12 21a9 9 0 100-18 9 9 0 000 18z"
        stroke="#000"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <path
        d="M8 12h7.6m-2.9-3.6l3 3c.4.4.4 1 0 1.4l-3 3"
        stroke="#000"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default SvgArrowRightCircle;
