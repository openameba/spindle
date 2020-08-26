import * as React from 'react';

function SvgCameraswitching(props: React.SVGProps<SVGSVGElement>) {
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
        d="M19.12 4.87l-1.48 1.48A7.891 7.891 0 0012 4C8.71 4 5.71 6.07 4.53 9.14c-.2.52.06 1.09.58 1.29.12.04.24.07.36.07.4 0 .78-.24.93-.64C7.29 7.55 9.54 6 12 6c1.62 0 3.12.64 4.23 1.76l-1.4 1.4c-.32.32-.09.85.35.85h4.29c.28 0 .5-.22.5-.5V5.22c.01-.44-.53-.66-.85-.35zm-.23 8.7a.998.998 0 00-1.29.58C16.71 16.45 14.46 18 12 18c-1.61 0-3.12-.65-4.23-1.77l1.38-1.38a.5.5 0 00-.36-.85H4.5c-.28 0-.5.22-.5.5v4.29c0 .45.54.67.85.35l1.5-1.5A7.993 7.993 0 0012 20c3.29 0 6.29-2.07 7.47-5.14a.999.999 0 00-.58-1.29zM14 12a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  );
}

export default SvgCameraswitching;
