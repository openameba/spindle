import * as React from 'react';

function SvgSpeakerOff(props: React.SVGProps<SVGSVGElement>) {
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
        d="M7.13 8.96l3.18-3.16c.63-.63 1.7-.19 1.7.7v10.99c0 .89-1.08 1.34-1.71.71l-3.26-3.24H4.02c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3.11zm13.55 1.25L18.89 12l1.8 1.79c.39.39.39 1.02 0 1.41-.2.19-.45.29-.71.29-.26 0-.51-.09-.71-.29l-1.79-1.79-1.79 1.79c-.2.19-.45.29-.71.29a.996.996 0 01-.71-1.7L16.06 12l-1.78-1.79a.996.996 0 111.41-1.41l1.79 1.79 1.79-1.79a.996.996 0 111.41 1.41z"
      />
    </svg>
  );
}

export default SvgSpeakerOff;
