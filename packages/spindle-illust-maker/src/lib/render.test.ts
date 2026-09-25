import { describe, expect, it } from 'vitest';
import type { IllustState } from '../types';
import { getDefaultState } from './defaults';
import type { ImageLoader } from './image-loader';
import { loadLayers } from './render';

function createFakeLoader(failPaths: string[] = []): ImageLoader & {
  requested: string[];
} {
  const requested: string[] = [];
  return {
    requested,
    loadImage(path: string) {
      requested.push(path);
      if (failPaths.includes(path)) {
        return Promise.reject(new Error(`Failed to load: ${path}`));
      }
      return Promise.resolve({ src: path } as unknown as HTMLImageElement);
    },
  };
}

describe('loadLayers', () => {
  it('選択中のパーツの画像をすべて読み込み、描画順で返す', async () => {
    const state = getDefaultState('adult-standing');
    const loader = createFakeLoader();

    const layers = await loadLayers(state, loader);

    expect(layers.map((l) => l.layer.part)).toEqual(['leg', 'body', 'head']);
    expect(layers.map((l) => l.path)).toEqual([
      state.leg,
      state.body,
      state.head,
    ]);
  });

  it('読み込みに失敗したパーツは除外し、他のパーツは描画対象に残す', async () => {
    const state = getDefaultState('adult-standing');
    const loader = createFakeLoader([state.body!]);

    const layers = await loadLayers(state, loader);

    expect(layers.map((l) => l.layer.part)).toEqual(['leg', 'head']);
  });

  it('画像の読み込みを直列ではなく並列に開始する', async () => {
    const state = getDefaultState('adult-standing');
    const loader = createFakeLoader();
    const resolveOrder: string[] = [];
    const slowLoader: ImageLoader = {
      loadImage(path) {
        // 先に要求された leg を最後に解決させ、開始順に依存しないことを確かめる
        const delay = path === state.leg ? 30 : 0;
        return new Promise((resolve) =>
          setTimeout(() => {
            resolveOrder.push(path);
            loader.loadImage(path).then(resolve);
          }, delay),
        );
      },
    };

    const layers = await loadLayers(state, slowLoader);

    expect(resolveOrder[resolveOrder.length - 1]).toBe(state.leg);
    expect(layers.map((l) => l.layer.part)).toEqual(['leg', 'body', 'head']);
  });

  it('未対応のポーズでは空配列を返す', async () => {
    const state = {
      ...getDefaultState('adult-standing'),
      pose: 'unknown',
    } as unknown as IllustState;

    expect(await loadLayers(state, createFakeLoader())).toEqual([]);
  });
});
