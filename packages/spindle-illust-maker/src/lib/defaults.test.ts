import { describe, expect, it } from 'vitest';
import { PARTS_BY_CATEGORY } from '../constants/parts';
import { POSE_MAP } from '../constants/poses';
import type { PoseId } from '../types';
import { getDefaultState, getRandomParts } from './defaults';

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

describe('getRandomParts', () => {
  it('各ポーズで必須パーツが有効なパスを返す', () => {
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
      const result = getRandomParts(poseId);
      for (const part of requiredParts) {
        expect(
          result[part as keyof typeof result],
          `${poseId} の ${part} が設定されているべき`,
        ).not.toBeNull();
      }
    }
  });

  it('返されるパスが PARTS_BY_CATEGORY の候補に含まれる', () => {
    const result = getRandomParts('adult-standing');
    const pose = POSE_MAP['adult-standing'];
    const headType = pose.headTypes[0] ?? 'man';

    const headOptions = PARTS_BY_CATEGORY[`head/${headType}`]!.map(
      (i) => i.path,
    );
    expect(headOptions).toContain(result.head);

    const bodyOptions = PARTS_BY_CATEGORY[pose.bodySubdir ?? 'body']!.map(
      (i) => i.path,
    );
    expect(bodyOptions).toContain(result.body);

    const legOptions = PARTS_BY_CATEGORY[pose.legSubdir ?? 'leg']!.map(
      (i) => i.path,
    );
    expect(legOptions).toContain(result.leg);
  });

  it('アクセサリーは null または有効なパスを返す', () => {
    const accessories = ['hat', 'glasses', 'mask', 'beard'] as const;
    const seen = new Set<string>();

    for (let i = 0; i < 50; i++) {
      const result = getRandomParts('adult-standing');
      for (const part of accessories) {
        const value = result[part as keyof typeof result] as
          | string
          | null
          | undefined;
        if (value != null) {
          seen.add('non-null');
          const options = PARTS_BY_CATEGORY[part]!.map((item) => item.path);
          expect(options, `${part} のパスが候補に含まれるべき`).toContain(
            value,
          );
        } else {
          seen.add('null');
        }
      }
    }

    expect(seen.has('null'), 'アクセサリーが null になるケースがあるべき').toBe(
      true,
    );
    expect(
      seen.has('non-null'),
      'アクセサリーが選択されるケースがあるべき',
    ).toBe(true);
  });

  it('複数回呼び出すと異なる結果を返すことがある', () => {
    const results = new Set<string>();
    for (let i = 0; i < 20; i++) {
      const result = getRandomParts('adult-standing');
      results.add(result.head ?? '');
    }
    expect(
      results.size,
      'ランダムなので複数の異なる結果が返るべき',
    ).toBeGreaterThan(1);
  });
});
