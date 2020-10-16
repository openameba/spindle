import * as React from 'react';

function SvgStarFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <g clipPath="url(#star_fill_svg__clip0)">
        <path d="M18.1 14l4-3.7c1-1 .5-2.7-.9-2.9l-5.4-.6-2.2-4.9c-.6-1.3-2.4-1.3-3 0L8.3 6.8l-5.4.6c-1.4.2-2 1.9-.9 2.9L6 14l-1.1 5.3c-.3 1.4 1.2 2.5 2.4 1.8l4.7-2.7 4.7 2.7c1.2.7 2.7-.4 2.4-1.8l-1-5.3z" />
      </g>
      <defs>
        <clipPath id="star_fill_svg__clip0">
          <path d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgStarFill;
