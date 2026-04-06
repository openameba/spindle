import { describe, it, expect } from 'vitest';
import { stateToParams, paramsToState } from './url-state';
import { getDefaultState } from './defaults';

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
      expect(restored).not.toBeNull();
      expect(restored!.pose).toBe('adult-standing');
      expect(restored!.head).toBe(original.head);
      expect(restored!.body).toBe(original.body);
      expect(restored!.leg).toBe(original.leg);
    });

    it('不正なパスは無視してデフォルトを使う', () => {
      const params = new URLSearchParams('pose=adult-standing&head=../../evil');
      const state = paramsToState(params);
      expect(state).not.toBeNull();
      expect(state!.head).not.toContain('evil');
    });

    it('ラウンドトリップで全ポーズの状態が保持される', () => {
      const poses = ['adult-standing', 'old', 'child', 'baby'] as const;
      for (const poseId of poses) {
        const original = getDefaultState(poseId);
        const restored = paramsToState(stateToParams(original));
        expect(restored!.pose).toBe(poseId);
        expect(restored!.head).toBe(original.head);
        expect(restored!.body).toBe(original.body);
      }
    });
  });
});
