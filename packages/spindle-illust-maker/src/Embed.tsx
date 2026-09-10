import { useCallback, useEffect, useRef } from 'react';
import { getDefaultState } from './lib/defaults';
import { createImageLoader } from './lib/image-loader';
import { drawToCanvas } from './lib/render';
import { getStateFromUrl, paramsToState } from './lib/url-state';
import type { IllustState } from './types';

const imageLoader = createImageLoader('/illust');

function getInitialState(): IllustState {
  return getStateFromUrl() ?? getDefaultState();
}

export function Embed() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const renderAndPost = useCallback(async (state: IllustState) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    await drawToCanvas(canvas, state, imageLoader, state.scale);
    const dataUrl = canvas.toDataURL('image/png');
    window.parent.postMessage(
      { type: 'spindle-illust-maker:render', dataUrl },
      '*',
    );
  }, []);

  useEffect(() => {
    renderAndPost(getInitialState());
  }, [renderAndPost]);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type !== 'spindle-illust-maker:request') return;

      let state: IllustState | null = null;
      if (e.data.url) {
        try {
          const parsed = new URL(e.data.url);
          state = paramsToState(parsed.searchParams);
        } catch {
          // invalid URL
        }
      } else if (e.data.params) {
        state = paramsToState(new URLSearchParams(e.data.params));
      }

      if (state) {
        renderAndPost(state);
      }
    };

    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, [renderAndPost]);

  return <canvas ref={canvasRef} style={{ display: 'none' }} />;
}
