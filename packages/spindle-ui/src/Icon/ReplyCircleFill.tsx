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
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.05 15.8c-.09.14-.25.23-.44.17-.2-.05-.3-.26-.25-.46a4.479 4.479 0 00-4.35-5.54h-.03v2.24c0 .62-.72.97-1.21.59l-5.02-3.92a.753.753 0 010-1.18l5.02-3.92a.751.751 0 011.21.59v2.24h.03c3.3 0 5.98 2.68 5.98 5.98 0 1.18-.35 2.28-.94 3.21z" />
    </svg>
  );
}

export default SvgReplyCircleFill;
