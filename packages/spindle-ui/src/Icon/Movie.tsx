import * as React from 'react';

function SvgMovie(props: React.SVGProps<SVGSVGElement>) {
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
        d="M17.54 10.38l2.74-2.87c.63-.65 1.73-.21 1.72.69v7.6c0 .9-1.1 1.34-1.72.69l-2.74-2.87v3.06c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7.33c0-1.1.9-2 2-2h11.54c1.1 0 2 .9 2 2v3.05zM5.77 12a3.999 3.999 0 108 0c0-2.21-1.79-4-4-4s-4 1.79-4 4zm6.5 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
      />
    </svg>
  );
}

export default SvgMovie;
