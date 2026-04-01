const ILLUST_PREFIX = '/illust/';

export type ImageLoader = {
  loadImage(path: string): Promise<HTMLImageElement>;
};

export function createImageLoader(baseUrl: string): ImageLoader {
  const cache = new Map<string, HTMLImageElement>();
  const loading = new Map<string, Promise<HTMLImageElement>>();

  function resolveUrl(path: string): string {
    const relative = path.startsWith(ILLUST_PREFIX)
      ? path.slice(ILLUST_PREFIX.length)
      : path.startsWith('/')
        ? path.slice(1)
        : path;
    const base = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
    return `${base}${relative}`;
  }

  function loadImage(path: string): Promise<HTMLImageElement> {
    const cached = cache.get(path);
    if (cached) return Promise.resolve(cached);

    const inflight = loading.get(path);
    if (inflight) return inflight;

    const promise = new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        cache.set(path, img);
        loading.delete(path);
        resolve(img);
      };
      img.onerror = () => {
        loading.delete(path);
        reject(new Error(`Failed to load: ${path}`));
      };
      img.src = resolveUrl(path);
    });

    loading.set(path, promise);
    return promise;
  }

  return { loadImage };
}
