import * as React from 'react';

function SvgNice(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12C2 6.49 6.49 2 12 2s10 4.49 10 10-4.49 10-10 10S2 17.51 2 12zm2 0c0 4.41 3.59 8 8 8s8-3.59 8-8-3.59-8-8-8-8 3.59-8 8zm6.47-2.01a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm4.54 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12 14.8c.8 0 1.55-.38 2.01-1.03.29-.4.85-.49 1.24-.21.41.29.5.86.21 1.26-.8 1.11-2.1 1.78-3.47 1.78s-2.67-.67-3.47-1.78a.908.908 0 01.21-1.26c.41-.29.97-.19 1.26.21.46.65 1.21 1.03 2.01 1.03z"
      />
    </svg>
  );
}

export default SvgNice;
