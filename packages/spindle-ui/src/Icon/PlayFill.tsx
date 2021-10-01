import * as React from 'react';

function SvgPlayFill(props: React.SVGProps<SVGSVGElement>) {
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
        d="M18.76 10.73L7.38 3.65c-1-.62-2.29.1-2.29 1.27v14.16c0 1.18 1.29 1.9 2.29 1.27l11.38-7.08c.94-.58.94-1.96 0-2.54z"
      />
    </svg>
  );
}

export default SvgPlayFill;
