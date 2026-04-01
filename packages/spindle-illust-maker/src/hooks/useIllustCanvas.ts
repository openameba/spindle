import { useCallback, useEffect, useRef } from 'react';
import type { IllustState } from '../types';
import { createImageLoader } from '../lib/image-loader';
import { drawToCanvas } from '../lib/render';

const imageLoader = createImageLoader('/illust');

export function useIllustCanvas(state: IllustState) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = useCallback(async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    await drawToCanvas(canvas, state, imageLoader, 1);
  }, [state]);

  const exportToCanvas = useCallback(async () => {
    const canvas = document.createElement('canvas');
    await drawToCanvas(canvas, state, imageLoader, state.scale);
    return canvas;
  }, [state]);

  useEffect(() => {
    draw();
  }, [draw]);

  return { canvasRef, exportToCanvas };
}
