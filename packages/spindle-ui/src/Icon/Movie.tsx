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
        d="M17.54 10.38l2.74-2.87c.63-.65 1.72-.21 1.72.69v7.59c0 .91-1.09 1.35-1.73.7l-2.74-2.87v2.06c0 1.66-1.34 3-3 3H4.99c-1.66 0-3-1.34-3-3V8.33c0-1.66 1.34-3 3-3h9.55c1.66 0 3 1.34 3 3v2.05zM5.77 12a3.999 3.999 0 108 0c0-2.21-1.79-4-4-4s-4 1.79-4 4zm6.5 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
      />
    </svg>
  );
}

export default SvgMovie;
