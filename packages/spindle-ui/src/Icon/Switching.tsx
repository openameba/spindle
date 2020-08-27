import * as React from 'react';

function SvgSwitching(props: React.SVGProps<SVGSVGElement>) {
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
        d="M14.84 9.17c-.32.31-.1.85.35.85v-.01h4.29c.28 0 .5-.22.5-.5V5.22c0-.44-.54-.67-.85-.35l-1.48 1.48A7.932 7.932 0 0012 4C8.71 4 5.71 6.07 4.53 9.14c-.19.51.06 1.09.58 1.29a.99.99 0 001.29-.57C7.29 7.55 9.54 6 12 6c1.62 0 3.12.64 4.24 1.77l-1.4 1.4zM8.79 14H4.5c-.28 0-.5.22-.5.5v4.29c0 .45.54.67.86.35l1.5-1.5A7.953 7.953 0 0012 20c3.29 0 6.29-2.07 7.47-5.15.19-.51-.06-1.09-.58-1.29-.51-.19-1.09.06-1.29.58C16.71 16.45 14.46 18 12 18c-1.61 0-3.12-.65-4.24-1.77l1.38-1.38c.32-.31.1-.85-.35-.85z"
      />
    </svg>
  );
}

export default SvgSwitching;
