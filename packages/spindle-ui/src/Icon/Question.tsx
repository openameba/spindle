import * as React from 'react';

function SvgQuestion(props: React.SVGProps<SVGSVGElement>) {
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
        d="M6.59 8.14c0-2.9 2.38-5.17 5.43-5.17 2.92 0 5.39 2.28 5.4 4.96 0 2.543-1.62 3.902-2.8 4.891l-.01.009c-.39.32-.76.64-1.01.93-.19.22-.25.52-.25 1.16.01.78-.62 1.41-1.39 1.41h-.01c-.77 0-1.4-.62-1.4-1.39-.01-.93.1-2.02.9-2.97.41-.48.89-.89 1.36-1.28 1.12-.93 1.8-1.57 1.8-2.75 0-1.14-1.23-2.17-2.59-2.17-1.3 0-2.63.81-2.63 2.37 0 .77-.63 1.4-1.4 1.4-.77 0-1.4-.63-1.4-1.4zm7.11 11.13a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0z"
      />
    </svg>
  );
}

export default SvgQuestion;
