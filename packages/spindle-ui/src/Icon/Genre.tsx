import * as React from 'react';

function SvgGenre(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M8.13 13.46a.453.453 0 01.26-.78l2.26-.27.92-2.14c.16-.37.68-.37.84 0l.92 2.14 2.26.27c.38.05.54.52.26.78l-1.69 1.64.45 2.35c.08.39-.34.68-.68.48l-1.94-1.16-1.94 1.16c-.34.2-.76-.09-.68-.48l.45-2.35-1.69-1.64zm11.86-8.47v14.02c0 1.66-1.34 3-3 3h-10c-1.66 0-3-1.34-3-3V4.99c0-1.66 1.34-3 3-3h10c1.66 0 3 1.34 3 3zm-2 3h-12v11.02c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V7.99z" />
    </svg>
  );
}

export default SvgGenre;
