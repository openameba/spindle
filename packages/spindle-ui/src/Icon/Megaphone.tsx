import * as React from 'react';

function SvgMegaphone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <g clipPath="url(#megaphone_svg__a)">
        <path d="M20 2.75h-2c-.8 0-1.5.5-1.8 1.2l-8.3 2.3H5c-1.7 0-3 1.3-3 3v3c0 1.2.7 2.2 1.7 2.7l2.1 5.1c.3.7 1 1.2 1.8 1.2h1.2c.6 0 1.1-.2 1.5-.7.4-.4.6-1 .5-1.5l-.3-3.1 5.6 1.5c.3.7 1 1.2 1.8 1.2h2c1.1 0 2-.9 2-2V4.75c.1-1.1-.8-2-1.9-2zM4 9.25c0-.6.4-1 1-1h1.5c.3 0 .5.2.5.5v4c0 .3-.2.5-.5.5H5c-.5 0-1-.5-1-1v-3zm3.7 10l-1.6-3.8 2.5.3.3 3.6H7.7v-.1zM16 6.05v9.4l-6.6-1.8c-.3-.1-.4-.3-.4-.5v-4.8c0-.2.2-.4.4-.5l6.6-1.8zm3.5 10.7h-1c-.3 0-.5-.2-.5-.5v-11c0-.3.2-.5.5-.5h1c.3 0 .5.2.5.5v11c0 .3-.2.5-.5.5z" />
      </g>
      <defs>
        <clipPath id="megaphone_svg__a">
          <path transform="translate(2 2.75)" d="M0 0h20v18.5H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgMegaphone;
