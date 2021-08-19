import * as React from 'react';

function SvgNewbook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M19.9 7.4H6.8c-1 0-1.8-.8-1.8-1.79V5.6c0-.48.19-.93.53-1.27.33-.34.78-.53 1.27-.53h13.1c.5 0 .9-.4.9-.9s-.4-.9-.9-.9H6.8c-.97 0-1.87.38-2.55 1.06-.68.68-1.06 1.58-1.05 2.54v12.3c0 2.15 1.75 3.9 3.9 3.9h11.8c.51 0 .98-.2 1.34-.56.36-.36.56-.84.56-1.34V8.3c0-.5-.4-.9-.9-.9zm-1 12.6H7.1A2.1 2.1 0 015 17.9V8.7c.53.31 1.14.5 1.8.5H19v10.7c0 .05-.05.1-.1.1zm-.8-13.5h-11c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h11c.5 0 .9.4.9.9s-.4.9-.9.9zM8.62 16.61c-.16 0-.32-.08-.42-.22l-1.18-1.77v1.49c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-3.14c0-.22.14-.41.35-.48.21-.06.44.02.56.2l1.17 1.76-.01-1.48c0-.28.22-.5.5-.5s.5.22.5.5l.01 3.14a.495.495 0 01-.48.5zm8.19 0c-.22 0-.42-.15-.48-.36l-.42-1.46-.42 1.46c-.06.21-.26.36-.48.36-.22 0-.42-.15-.48-.36l-.9-3.14a.501.501 0 01.96-.28l.42 1.46.42-1.46c.06-.21.26-.36.48-.36.22 0 .42.15.48.36l.42 1.46.42-1.46c.08-.27.35-.42.62-.34.27.08.42.35.34.62l-.9 3.14c-.06.21-.26.36-.48.36zm-3.57-.5c0 .28-.22.5-.5.5h-2.32c-.28 0-.5-.22-.5-.5v-3.14c0-.28.22-.5.5-.5h2.32c.28 0 .5.22.5.5s-.22.5-.5.5h-1.82v.57h1.57c.28 0 .5.22.5.5s-.22.5-.5.5h-1.57v.57h1.82c.28 0 .5.22.5.5z" />
    </svg>
  );
}

export default SvgNewbook;
