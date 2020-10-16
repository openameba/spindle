import * as React from 'react';

function SvgSearch(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M20.2 17.8l-3.6-3.6C17.5 13 18 11.6 18 10c0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.6 0 3-.5 4.2-1.4l3.6 3.6c.2.2.5.3.7.3.2 0 .5-.1.7-.3.3-.3.3-1 0-1.4zM10.9 15c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" />
    </svg>
  );
}

export default SvgSearch;
