import * as React from 'react';

function SvgKantangame(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M15.85 13.62c0 .76-.62 1.38-1.38 1.38-.76 0-1.38-.62-1.38-1.38 0-.76.62-1.38 1.38-1.38.76.01 1.38.63 1.38 1.38zm1.37-4.12c-.76 0-1.38.62-1.38 1.38 0 .76.62 1.38 1.38 1.38.76 0 1.38-.62 1.38-1.38 0-.76-.62-1.38-1.38-1.38zm-6.15 1.64H9.36V9.43c0-.24-.19-.43-.43-.43h-.86c-.24 0-.43.19-.43.43v1.71H5.93c-.24 0-.43.19-.43.43v.86c0 .24.19.43.43.43h1.71v1.71c0 .24.19.43.43.43h.86c.24 0 .43-.19.43-.43v-1.71h1.71c.24 0 .43-.19.43-.43v-.86c0-.24-.19-.43-.43-.43zM22 12c0 3.5-2.85 6.35-6.35 6.35h-7.3C4.85 18.35 2 15.5 2 12c0-3.5 2.85-6.35 6.35-6.35h7.3C19.15 5.65 22 8.5 22 12zm-2 0c0-2.4-1.95-4.35-4.35-4.35h-7.3C5.95 7.65 4 9.6 4 12c0 2.4 1.95 4.35 4.35 4.35h7.3c2.4 0 4.35-1.95 4.35-4.35z" />
    </svg>
  );
}

export default SvgKantangame;
