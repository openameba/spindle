import * as React from 'react';

function SvgReplyCircleFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M12.08 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm5.62 14c-1.69-1.51-3.99-2.53-6.56-2.77v2.36c0 .33-.4.5-.64.27l-4.55-4.39a.38.38 0 010-.54l4.55-4.39c.24-.23.64-.06.64.27v2.5c3.48.48 6.3 3.01 7.19 6.34.09.35-.35.6-.63.35z" />
    </svg>
  );
}

export default SvgReplyCircleFill;
