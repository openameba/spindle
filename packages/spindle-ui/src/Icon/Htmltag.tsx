import * as React from 'react';

function SvgHtmltag(props: React.SVGProps<SVGSVGElement>) {
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
        d="M7.81 5.32a.996.996 0 011.41 0c.39.39.39 1.02.01 1.41L3.96 12l5.27 5.28c.39.39.39 1.02 0 1.41-.2.19-.45.29-.71.29-.26 0-.51-.09-.71-.29l-5.27-5.27c-.78-.78-.78-2.05 0-2.83l5.27-5.27zm8.34 0l5.27 5.27c.79.78.79 2.04.01 2.82l-5.27 5.27c-.2.19-.45.29-.71.29a.996.996 0 01-.71-1.7L20.01 12l-5.27-5.27a.996.996 0 111.41-1.41z"
      />
    </svg>
  );
}

export default SvgHtmltag;
