import * as React from 'react';

function SvgFacebook(props: React.SVGProps<SVGSVGElement>) {
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
        d="M22 12.06c0-5.52-4.48-10-10-10s-10 4.48-10 10c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54v-2.2c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46H15.2c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.89h-2.33v6.99c4.77-.76 8.43-4.9 8.43-9.89z"
      />
    </svg>
  );
}

export default SvgFacebook;
