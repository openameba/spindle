import { describe, expect, it } from 'vitest';
import type { IllustState } from '../types';
import { getDefaultState } from './defaults';
import { paramsToState, stateToParams } from './url-state';

describe('url-state', () => {
  describe('stateToParams', () => {
    it('ポーズと選択済みパーツをパラメータに含める', () => {
      const state = getDefaultState('adult-standing');
      const params = stateToParams(state);
      expect(params.get('pose')).toBe('adult-standing');
      expect(params.has('head')).toBe(true);
      expect(params.has('body')).toBe(true);
      expect(params.has('leg')).toBe(true);
    });

    it('nullのパーツはパラメータに含めない', () => {
      const state = getDefaultState('adult-standing');
      const params = stateToParams(state);
      expect(params.has('hat')).toBe(false);
      expect(params.has('glasses')).toBe(false);
    });

    it('/illust/ プレフィックスと .svg を省略する', () => {
      const state = getDefaultState('adult-standing');
      const params = stateToParams(state);
      const head = params.get('head')!;
      expect(head).not.toContain('/illust/');
      expect(head).not.toContain('.svg');
    });

    it('既定値のままの首の傾き・入れ替え・サイズはパラメータに含めない', () => {
      const params = stateToParams(getDefaultState('adult-standing'));
      expect(params.has('neckTilt')).toBe(false);
      expect(params.has('headBodySwap')).toBe(false);
      expect(params.has('bodyLegSwap')).toBe(false);
      expect(params.has('scale')).toBe(false);
    });

    it('既定値から変更した首の傾き・入れ替え・サイズをパラメータに含める', () => {
      const state: IllustState = {
        ...getDefaultState('adult-standing'),
        neckTilt: 'up',
        headBodySwap: true,
        bodyLegSwap: true,
        scale: 2,
      };
      const params = stateToParams(state);
      expect(params.get('neckTilt')).toBe('up');
      expect(params.get('headBodySwap')).toBe('true');
      expect(params.get('bodyLegSwap')).toBe('true');
      expect(params.get('scale')).toBe('2');
    });

    it('ポーズ既定で入れ替え済みの adult-bowing を解除した場合も差分として残す', () => {
      const state: IllustState = {
        ...getDefaultState('adult-bowing'),
        headBodySwap: false,
      };
      expect(stateToParams(state).get('headBodySwap')).toBe('false');
    });
  });

  describe('paramsToState', () => {
    it('poseパラメータがない場合はnullを返す', () => {
      expect(paramsToState(new URLSearchParams())).toBeNull();
    });

    it('無効なポーズの場合はnullを返す', () => {
      expect(paramsToState(new URLSearchParams('pose=invalid'))).toBeNull();
    });

    it('有効なパラメータからstateを復元する', () => {
      const original = getDefaultState('adult-standing');
      const params = stateToParams(original);

      const restored = paramsToState(params);
      expect(restored).toEqual(original);
    });

    it('不正なパスは無視してデフォルトを使う', () => {
      const params = new URLSearchParams('pose=adult-standing&head=../../evil');
      const state = paramsToState(params);
      expect(state).not.toBeNull();
      expect(state!.head).not.toContain('evil');
    });

    it('首の傾き・入れ替え・サイズを復元する', () => {
      const params = new URLSearchParams(
        'pose=adult-standing&neckTilt=down&headBodySwap=true&bodyLegSwap=true&scale=0.5',
      );
      const state = paramsToState(params)!;
      expect(state.neckTilt).toBe('down');
      expect(state.headBodySwap).toBe(true);
      expect(state.bodyLegSwap).toBe(true);
      expect(state.scale).toBe(0.5);
    });

    it('不正な首の傾き・入れ替え・サイズは無視してデフォルトを使う', () => {
      const params = new URLSearchParams(
        'pose=adult-standing&neckTilt=sideways&headBodySwap=yes&bodyLegSwap=1&scale=100',
      );
      const defaults = getDefaultState('adult-standing');
      const state = paramsToState(params)!;
      expect(state.neckTilt).toBe(defaults.neckTilt);
      expect(state.headBodySwap).toBe(defaults.headBodySwap);
      expect(state.bodyLegSwap).toBe(defaults.bodyLegSwap);
      expect(state.scale).toBe(defaults.scale);
    });

    it('ラウンドトリップで全ポーズの状態がすべて保持される', () => {
      const poses = [
        'adult-standing',
        'adult-sitting',
        'adult-desk',
        'adult-riding',
        'adult-bowing',
        'old',
        'child',
        'baby',
      ] as const;
      for (const poseId of poses) {
        const original: IllustState = {
          ...getDefaultState(poseId),
          neckTilt: 'up',
          headBodySwap: true,
          bodyLegSwap: true,
          scale: 2,
        };
        const restored = paramsToState(stateToParams(original));
        expect(restored, `${poseId} のラウンドトリップ`).toEqual(original);
      }
    });
  });
});
