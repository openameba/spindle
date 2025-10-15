import type { SVGProps } from 'react';
import * as React from 'react';

const SvgFreeCircleFill = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.892 10.475v3.059a.97.97 0 0 1-.971.97h-.059a.97.97 0 0 1-.97-.97v-3.059a.97.97 0 0 1 .97-.971h.059a.97.97 0 0 1 .971.971M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0M11.25 8.36a.75.75 0 0 0-1.031.248l-1.111 1.817L8 8.608a.75.75 0 1 0-1.279.784L8 11.483h-.669a.5.5 0 0 0 0 1h1.027v.488H7.331a.5.5 0 0 0 0 1h1.027V15a.75.75 0 1 0 1.5 0v-1.029h.973a.5.5 0 0 0 0-1h-.973v-.488h.973a.5.5 0 0 0 0-1h-.612L11.5 9.392a.75.75 0 0 0-.25-1.032m6.142 2.115A2.47 2.47 0 0 0 14.921 8h-.059a2.47 2.47 0 0 0-2.47 2.471v3.059a2.47 2.47 0 0 0 2.47 2.47h.059a2.47 2.47 0 0 0 2.471-2.47z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFreeCircleFill;
