import * as React from 'react';

function SvgListBulleted(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M19.75 7.07H8.66c-.55 0-1-.45-1-1s.45-1 1-1h11.09c.55 0 1 .45 1 1s-.45 1-1 1zm1 4.93c0-.55-.45-1-1-1H8.66c-.55 0-1 .45-1 1s.45 1 1 1h11.09c.55 0 1-.45 1-1zm0 5.93c0-.55-.45-1-1-1H8.66c-.55 0-1 .45-1 1s.45 1 1 1h11.09c.55 0 1-.45 1-1zM5 4.5c-.83 0-1.5.67-1.5 1.5S4.17 7.5 5 7.5 6.5 6.83 6.5 6 5.83 4.5 5 4.5zm0 6c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 6c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
    </svg>
  );
}

export default SvgListBulleted;
