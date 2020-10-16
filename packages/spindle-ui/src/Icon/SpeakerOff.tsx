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
      <path d="M11.99 6.47v10.99c0 .89-1.07 1.34-1.71.71l-3.26-3.24H4c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3.11l3.18-3.16c.62-.64 1.7-.19 1.7.7zm6.87 5.49l1.79-1.79a.996.996 0 10-1.41-1.41l-1.79 1.79-1.79-1.79a.996.996 0 10-1.41 1.41l1.79 1.79-1.79 1.79a.996.996 0 00.71 1.7c.26 0 .51-.1.71-.29l1.79-1.79 1.79 1.79c.2.2.45.29.71.29.26 0 .51-.1.71-.29a.996.996 0 000-1.41l-1.81-1.79z" />
    </svg>
  );
}

export default SvgSpeakerOff;
