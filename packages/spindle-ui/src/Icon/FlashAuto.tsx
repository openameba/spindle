import * as React from 'react';

function SvgFlashAuto(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M19.89 20.32l-1.85-4.69c-.2-.51-1.03-.51-1.23 0l-1.85 4.69c-.1.26.02.55.28.65.26.1.55-.02.65-.28l.39-.99h2.29l.39.99c.08.2.27.32.46.32.06 0 .12-.01.18-.04.27-.1.39-.39.29-.65zm-3.21-1.62l.75-1.9.75 1.9h-1.5zm1.27-7.79h-3.67c-.28 0-.51-.23-.51-.51V3.5c0-.48-.61-.7-.91-.32l-7.25 9.01c-.27.34-.03.84.4.84h3.67c.28 0 .51.23.51.51v6.9c0 .48.61.7.91.32l7.25-9.01c.27-.34.03-.84-.4-.84z" />
    </svg>
  );
}

export default SvgFlashAuto;
