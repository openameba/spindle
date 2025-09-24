/**
 * Polyfill for under React@16.
 * In react@16, `flushSync` is not defined so we need to use polyfill.
 */

import ReactDOM from 'react-dom';

// biome-ignore lint/suspicious/noExplicitAny: Accessing undocumented React API
const flushSync = (ReactDOM as any).flushSync;
type FlushSyncCallback = () => void;

export const useFlushSync = (): ((cb: FlushSyncCallback) => void) => {
  if (flushSync) {
    return flushSync;
  }
  return (cb) => {
    cb();
  };
};
