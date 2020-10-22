import * as React from 'react';

function SvgMicrophone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M12 15.01c1.93 0 3.5-1.57 3.5-3.5v-5c0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5v5c0 1.93 1.57 3.5 3.5 3.5zm-1.5-8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-5zm2.48 11.42c0 .03.02.05.02.08v1h2c.55 0 1 .45 1 1s-.45 1-1 1H9c-.55 0-1-.45-1-1s.45-1 1-1h2v-1c0-.03.01-.05.02-.08-3.12-.49-5.52-3.22-5.52-6.52 0-.55.45-1 1-1s1 .45 1 1c0 2.54 2.02 4.6 4.5 4.6s4.5-2.06 4.5-4.6c0-.55.45-1 1-1s1 .45 1 1c0 3.3-2.4 6.03-5.52 6.52z" />
    </svg>
  );
}

export default SvgMicrophone;
