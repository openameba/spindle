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

/**
 * 初回描画は埋め込み元からのリクエストを伴わないため、宛先を referrer から決める。
 * referrer policy で取得できないときだけ '*' に倒す
 */
function getParentOrigin(): string {
  try {
    return document.referrer ? new URL(document.referrer).origin : '*';
  } catch {
    return '*';
  }
}

function parseRequestState(data: {
  url?: string;
  params?: string;
}): IllustState | null {
  if (data.url) {
    try {
      return paramsToState(new URL(data.url).searchParams);
    } catch {
      return null;
    }
  }
  if (data.params) {
    return paramsToState(new URLSearchParams(data.params));
  }
  return null;
}

export function Embed() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const renderToDataUrl = useCallback(async (state: IllustState) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    await drawToCanvas(canvas, state, imageLoader, state.scale);
    return canvas.toDataURL('image/png');
  }, []);

  useEffect(() => {
    renderToDataUrl(getInitialState()).then((dataUrl) => {
      if (!dataUrl) return;
      window.parent.postMessage(
        { type: 'spindle-illust-maker:render', dataUrl },
        getParentOrigin(),
      );
    });
  }, [renderToDataUrl]);

  useEffect(() => {
    const handler = async (e: MessageEvent) => {
      if (e.data?.type !== 'spindle-illust-maker:request') return;
      // リクエストを送ってきた window にだけ返す。第三者の window に画像が届かないようにする。
      // 別オリジンの WindowProxy は instanceof Window が false になるため型で絞る
      const source = e.source as Window | null;
      if (!source) return;

      const state = parseRequestState(e.data);
      if (!state) return;

      const dataUrl = await renderToDataUrl(state);
      if (!dataUrl) return;
      source.postMessage(
        { type: 'spindle-illust-maker:render', dataUrl },
        e.origin,
      );
    };

    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, [renderToDataUrl]);

  return <canvas ref={canvasRef} style={{ display: 'none' }} />;
}
