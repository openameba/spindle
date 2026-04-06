import { useEffect, useRef } from 'react';
import type { IllustState } from './types';
import { getDefaultState } from './lib/defaults';
import { getStateFromUrl } from './lib/url-state';
import { createImageLoader } from './lib/image-loader';
import { drawToCanvas } from './lib/render';

const imageLoader = createImageLoader('/illust');

function getInitialState(): IllustState {
  return getStateFromUrl() ?? getDefaultState();
}

export function Embed() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const state = getInitialState();
    const canvas = canvasRef.current;
    if (!canvas) return;

    drawToCanvas(canvas, state, imageLoader, state.scale).then(() => {
      const dataUrl = canvas.toDataURL('image/png');
      window.parent.postMessage(
        { type: 'spindle-illust-maker:render', dataUrl },
        '*',
      );
    });
  }, []);

  return <canvas ref={canvasRef} style={{ display: 'none' }} />;
}
