import * as React from 'react';

function SvgStampside(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M21 16.5v1.25c0 .41-.34.75-.75.75H3.75c-.41 0-.75-.34-.75-.75V16.5c0-1.66 1.34-3 3-3h4.5v-1.77c0-.87-.42-1.65-1.05-2.24-.93-.86-1.42-2.17-1.11-3.59a3.73 3.73 0 012.77-2.8 3.751 3.751 0 014.63 3.65c0 1.09-.47 2.07-1.21 2.75-.63.58-1.04 1.37-1.04 2.23v1.77H18c1.66 0 3 1.34 3 3zm-.75 3H3.75c-.41 0-.75.34-.75.75s.34.75.75.75h16.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z" />
    </svg>
  );
}

export default SvgStampside;
