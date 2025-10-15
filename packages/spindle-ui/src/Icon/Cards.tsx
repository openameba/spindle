import type { SVGProps } from 'react';
import * as React from 'react';

const SvgCards = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="m19.517 6.4-3.492-.936-.063-.726a3 3 0 0 0-3.25-2.726l-6.973.61a3 3 0 0 0-2.727 3.25l.914 10.446a3 3 0 0 0 3.249 2.727l1.061-.093 7.387 1.98a2 2 0 0 0 2.45-1.415L20.93 8.85a2 2 0 0 0-1.414-2.45m-5.542 10.042L7 17.053a1.02 1.02 0 0 1-.73-.23 1 1 0 0 1-.353-.678L5.004 5.696a1 1 0 0 1 .909-1.082l6.974-.61a.987.987 0 0 1 .73.23 1 1 0 0 1 .353.68l.914 10.445a1.003 1.003 0 0 1-.91 1.083" />
  </svg>
);
export default SvgCards;
