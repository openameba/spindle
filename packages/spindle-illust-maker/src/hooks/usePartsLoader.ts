import { useCallback, useRef } from 'react';

const cache = new Map<string, HTMLImageElement>();

export function usePartsLoader() {
  const loadingRef = useRef(new Set<string>());

  const loadImage = useCallback((src: string): Promise<HTMLImageElement> => {
    const cached = cache.get(src);
    if (cached) return Promise.resolve(cached);

    if (loadingRef.current.has(src)) {
      return new Promise((resolve) => {
        const check = () => {
          const img = cache.get(src);
          if (img) resolve(img);
          else setTimeout(check, 50);
        };
        check();
      });
    }

    loadingRef.current.add(src);

    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        cache.set(src, img);
        loadingRef.current.delete(src);
        resolve(img);
      };
      img.onerror = () => {
        loadingRef.current.delete(src);
        reject(new Error(`Failed to load: ${src}`));
      };
      img.src = src;
    });
  }, []);

  return { loadImage };
}
