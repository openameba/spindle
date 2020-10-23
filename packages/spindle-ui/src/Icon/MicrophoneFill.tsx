import * as React from 'react';

function SvgMicrophoneFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M8.5 11.51v-5c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5v5c0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5zm10-.1c0-.55-.45-1-1-1s-1 .45-1 1c0 2.54-2.02 4.6-4.5 4.6s-4.5-2.06-4.5-4.6c0-.55-.45-1-1-1s-1 .45-1 1c0 3.3 2.4 6.03 5.52 6.52 0 .03-.02.05-.02.08v1H9c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1h-2v-1c0-.03-.01-.05-.02-.08 3.12-.49 5.52-3.22 5.52-6.52z" />
    </svg>
  );
}

export default SvgMicrophoneFill;
