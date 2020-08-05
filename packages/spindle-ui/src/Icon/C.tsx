import * as React from 'react';

function SvgC(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.29 20.7c.2.19.45.29.71.29.25 0 .51-.1.71-.29a.996.996 0 000-1.41L13.42 12l7.28-7.3a.996.996 0 10-1.41-1.41L12 10.58c-.78.78-.78 2.05 0 2.83l7.29 7.29zM3 20c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1v16z"
      />
    </svg>
  );
}

export default SvgC;
