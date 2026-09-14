import { useCallback, useEffect, useRef } from 'react';
import { createImageLoader } from '../lib/image-loader';
import { drawToCanvas, loadLayers, paintLayers } from '../lib/render';
import type { IllustState } from '../types';

const imageLoader = createImageLoader('/illust');

export function useIllustCanvas(state: IllustState) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const exportToCanvas = useCallback(async () => {
    const canvas = document.createElement('canvas');
    await drawToCanvas(canvas, state, imageLoader, state.scale);
    return canvas;
  }, [state]);

  useEffect(() => {
    // 画像読み込み中に state が変わったら、古い読み込み結果は描かずに捨てる。
    // 読み込み完了順が操作順と入れ違っても、表示が最新 state 以外にならないようにする
    let cancelled = false;

    loadLayers(state, imageLoader).then((layers) => {
      const canvas = canvasRef.current;
      if (cancelled || !canvas) return;
      paintLayers(canvas, state, layers, 1);
    });

    return () => {
      cancelled = true;
    };
  }, [state]);

  return { canvasRef, exportToCanvas };
}
