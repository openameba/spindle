import * as React from 'react';

function SvgProfile(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 25 25"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M18.73 4.18H6.25a4.159 4.159 0 00-4.16 4.16v8.32a4.159 4.159 0 004.16 4.16h12.48a4.159 4.159 0 004.159-4.16V8.34a4.165 4.165 0 00-4.16-4.16zm2.08 12.48c0 1.144-.937 2.08-2.08 2.08H6.25a2.086 2.086 0 01-2.08-2.08V8.34c0-1.144.936-2.08 2.08-2.08h12.48c1.143 0 2.08.936 2.08 2.08v8.32zM7.747 10.514a1.612 1.612 0 111.611 1.612 1.613 1.613 0 01-1.611-1.612zm4.669 4.295a.714.714 0 01-.489.915 9.574 9.574 0 01-5.137 0 .714.714 0 01-.489-.915c.354-1.03 1.238-1.966 3.057-1.966 1.82 0 2.715.936 3.058 1.966zm6.27-4.888c0 .291-.228.52-.52.52H14.04a.515.515 0 01-.52-.52c0-.291.229-.52.52-.52h4.129c.29 0 .52.229.52.52zm0 2.6c0 .291-.228.52-.52.52H14.04a.515.515 0 01-.52-.52c0-.291.229-.52.52-.52h4.129c.29 0 .52.229.52.52zm0 2.6c0 .29-.228.52-.52.52H14.04a.515.515 0 01-.52-.52c0-.292.229-.52.52-.52h4.129c.29 0 .52.228.52.52z" />
    </svg>
  );
}

export default SvgProfile;
