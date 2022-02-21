import { useEffect, useRef } from 'react';

type Payload = {
  getIsCopiedItem: (index: number) => boolean;
  itemLinkClassName: string;
};

export function useCarouselFocus({
  getIsCopiedItem,
  itemLinkClassName,
}: Payload) {
  const listRef = useRef<HTMLUListElement>(null);
  const linkRefs = useRef<HTMLLinkElement[]>([]);

  useEffect(() => {
    if (!listRef.current) return;

    const linkElements = listRef.current.querySelectorAll(
      `a.${itemLinkClassName}`,
    );

    if (!linkElements) return;

    // NOTE: use NodeList forEach as IE polyfill
    Array.prototype.forEach.call(
      linkElements,
      (link: HTMLLinkElement, index) => {
        linkRefs.current.push(link);
        link.setAttribute('tabindex', getIsCopiedItem(index) ? '-1' : '0');
        link.setAttribute(
          'aria-hidden',
          getIsCopiedItem(index) ? 'true' : 'false',
        );
      },
    );
  }, [getIsCopiedItem, itemLinkClassName]);

  return {
    linkRefs,
    listRef,
  };
}
