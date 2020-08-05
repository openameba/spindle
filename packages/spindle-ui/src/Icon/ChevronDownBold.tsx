import * as React from 'react';

function SvgChevronDownBold(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M2.55 9.45c0-.38.15-.77.44-1.06a1.49 1.49 0 012.12 0l6.94 6.94 6.94-6.94a1.49 1.49 0 012.12 0c.58.59.59 1.54 0 2.12l-7.29 7.29c-.97.97-2.56.97-3.54 0l-7.29-7.29c-.29-.29-.44-.67-.44-1.06z" />
    </svg>
  );
}

export default SvgChevronDownBold;
