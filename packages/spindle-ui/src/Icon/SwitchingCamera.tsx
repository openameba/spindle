import type { SVGProps } from 'react';
import * as React from 'react';

const SvgSwitchingCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M20 5.22v4.29c0 .28-.22.5-.5.5h-4.29c-.45 0-.67-.54-.35-.85l1.4-1.4A5.94 5.94 0 0 0 12.02 6c-2.46 0-4.71 1.55-5.6 3.86a.99.99 0 0 1-1.29.57c-.52-.2-.77-.78-.58-1.29C5.73 6.07 8.73 4 12.02 4c2.16 0 4.17.86 5.65 2.35l1.48-1.48a.5.5 0 0 1 .85.35m-1.09 8.35a1 1 0 0 0-1.29.58 6.02 6.02 0 0 1-5.6 3.86c-1.61 0-3.12-.65-4.23-1.77l1.38-1.38c.31-.32.09-.86-.36-.86H4.52c-.28 0-.5.22-.5.5v4.29c0 .45.54.67.85.35l1.5-1.5A8 8 0 0 0 12.02 20c3.29 0 6.29-2.07 7.47-5.14a.99.99 0 0 0-.58-1.29M14.02 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2a2 2 0 0 0 2-2" />
  </svg>
);
export default SvgSwitchingCamera;
