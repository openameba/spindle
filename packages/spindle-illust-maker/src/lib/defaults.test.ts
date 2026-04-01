import { describe, it, expect } from 'vitest';
import { getDefaultState } from './defaults';
import type { PoseId } from '../types';

describe('getDefaultState', () => {
  it('引数なしで adult-standing のデフォルトを返す', () => {
    const state = getDefaultState();
    expect(state.pose).toBe('adult-standing');
  });

  it('共通のデフォルト値が設定される', () => {
    const state = getDefaultState();
    expect(state.neckTilt).toBe('normal');
    expect(state.headBodySwap).toBe(false);
    expect(state.bodyLegSwap).toBe(false);
    expect(state.scale).toBe(1);
  });

  it('オプショナルパーツが null である', () => {
    const state = getDefaultState();
    expect(state.hat).toBeNull();
    expect(state.glasses).toBeNull();
    expect(state.mask).toBeNull();
    expect(state.beard).toBeNull();
    expect(state.umbrella).toBeNull();
  });

  it('adult-standing で head, body, leg に緑バリアントが選ばれる', () => {
    const state = getDefaultState('adult-standing');
    expect(state.head).toContain('-green.');
    expect(state.body).toContain('-green.');
    expect(state.leg).toContain('-green.');
  });

  it('各ポーズで必須パーツが null でない', () => {
    const posesWithParts: [PoseId, string[]][] = [
      ['adult-standing', ['head', 'body', 'leg']],
      ['adult-sitting', ['head', 'body', 'leg']],
      ['adult-desk', ['head', 'body']],
      ['adult-riding', ['head', 'body']],
      ['adult-bowing', ['head', 'body', 'leg']],
      ['old', ['head', 'body', 'leg']],
      ['child', ['head', 'body']],
      ['baby', ['head', 'body']],
    ];

    for (const [poseId, requiredParts] of posesWithParts) {
      const state = getDefaultState(poseId);
      expect(state.pose).toBe(poseId);
      for (const part of requiredParts) {
        expect(
          state[part as keyof typeof state],
          `${poseId} の ${part} が設定されているべき`,
        ).not.toBeNull();
      }
    }
  });

  it('old ポーズで headTypes[0] に基づく head が選ばれる', () => {
    const state = getDefaultState('old');
    expect(state.head).not.toBeNull();
    expect(state.head).toContain('head/old');
  });

  it('baby ポーズで headTypes[0] に基づく head が選ばれる', () => {
    const state = getDefaultState('baby');
    expect(state.head).not.toBeNull();
    expect(state.head).toContain('head/baby');
  });
});
