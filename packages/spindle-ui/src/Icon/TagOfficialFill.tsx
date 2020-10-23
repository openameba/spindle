import * as React from 'react';

function SvgTagOfficialFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M20.5 6.5H7.28c-.5 0-.98.19-1.35.53l-3.82 3.5c-.86.79-.86 2.16 0 2.95l3.82 3.5c.37.34.85.53 1.35.53H20.5c.55 0 1-.45 1-1v-9c0-.56-.45-1.01-1-1.01zM5 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12.58-1.57l-1.49 1.36.4 1.98c.09.42-.36.75-.74.54L14 14.3l-1.75.99a.504.504 0 01-.74-.54l.4-1.98-1.49-1.36a.501.501 0 01.28-.87l2-.23.83-1.84a.5.5 0 01.91 0l.83 1.84 2 .23c.45.07.62.6.31.89z" />
    </svg>
  );
}

export default SvgTagOfficialFill;
