import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M17.52 20.61c-.25 0-.49-.06-.72-.19L12 17.8l-4.78 2.62c-.47.26-1.02.25-1.49-.02A1.52 1.52 0 0 1 5 19.11V5.95c0-1.65 1.35-3 3-3h8.01c1.65 0 3 1.35 3 3v13.16c0 .54-.28 1.02-.74 1.29-.22.14-.49.21-.75.21M12 15.73q.375 0 .72.18l4.3 2.35V5.95c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v12.31l4.27-2.34c.23-.13.48-.19.73-.19" />
  </svg>
);
export default SvgBookmark;
