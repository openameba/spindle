import * as React from 'react';

function SvgCamera(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <g clipPath="url(#camera_svg__clip0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19 5.5h-2.14L16 4.33c-.38-.51-.97-.81-1.61-.81H9.62A2 2 0 008 4.34L7.16 5.5H5c-1.66 0-3 1.34-3 3v8.99c0 1.66 1.34 3 3 3h14c1.66 0 3-1.34 3-3V8.5c0-1.66-1.34-3-3-3zm-7 12.49c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm247 136.03h-2.14l-.86-1.17c-.38-.51-.97-.81-1.61-.81h-4.77a2 2 0 00-1.62.82l-.84 1.16H245c-1.66 0-3 1.34-3 3v8.99c0 1.66 1.34 3 3 3h14c1.66 0 3-1.34 3-3v-8.99c0-1.66-1.34-3-3-3zm-7 12.49c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm3-5a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </g>
      <defs>
        <clipPath id="camera_svg__clip0">
          <path d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgCamera;
