import { describe, it, expect } from 'vitest';
import { getOptions } from './options';

describe('getOptions', () => {
  const options = getOptions();

  it('全8ポーズを返す', () => {
    expect(options.poses).toHaveLength(8);
    const ids = options.poses.map((p) => p.id);
    expect(ids).toEqual([
      'adult-standing',
      'adult-sitting',
      'adult-desk',
      'adult-riding',
      'adult-bowing',
      'old',
      'child',
      'baby',
    ]);
  });

  it('各ポーズに必須プロパティが含まれる', () => {
    for (const pose of options.poses) {
      expect(pose).toHaveProperty('id');
      expect(pose).toHaveProperty('label');
      expect(pose).toHaveProperty('canvasWidth');
      expect(pose).toHaveProperty('canvasHeight');
      expect(pose).toHaveProperty('headTypes');
      expect(pose).toHaveProperty('parts');
      expect(pose.canvasWidth).toBeGreaterThan(0);
      expect(pose.canvasHeight).toBeGreaterThan(0);
    }
  });

  it('adult-standing に body, leg, head, アクセサリの parts がある', () => {
    const standing = options.poses.find((p) => p.id === 'adult-standing')!;
    expect(standing.parts).toHaveProperty('body');
    expect(standing.parts).toHaveProperty('leg');
    expect(standing.parts).toHaveProperty('head/man');
    expect(standing.parts).toHaveProperty('head/woman');
    expect(standing.parts).toHaveProperty('hat');
    expect(standing.parts).toHaveProperty('glasses');
    expect(standing.parts).toHaveProperty('mask');
    expect(standing.parts).toHaveProperty('beard');
  });

  it('adult-standing の各パーツに1つ以上の選択肢がある', () => {
    const standing = options.poses.find((p) => p.id === 'adult-standing')!;
    for (const [key, items] of Object.entries(standing.parts)) {
      expect(items.length, `${key} should have items`).toBeGreaterThan(0);
      for (const item of items) {
        expect(item).toHaveProperty('id');
        expect(item).toHaveProperty('label');
        expect(item).toHaveProperty('path');
      }
    }
  });

  it('child / baby にアクセサリ系パーツがない', () => {
    for (const id of ['child', 'baby'] as const) {
      const pose = options.poses.find((p) => p.id === id)!;
      expect(pose.parts).not.toHaveProperty('hat');
      expect(pose.parts).not.toHaveProperty('glasses');
      expect(pose.parts).not.toHaveProperty('mask');
      expect(pose.parts).not.toHaveProperty('beard');
    }
  });

  it('adult-riding の body が body-ride のデータを使っている', () => {
    const riding = options.poses.find((p) => p.id === 'adult-riding')!;
    const bodyItems = riding.parts['body'];
    expect(bodyItems.length).toBeGreaterThan(0);
    expect(bodyItems[0].path).toContain('body-ride');
  });

  it('adult-bowing の body が body-bow のデータを使っている', () => {
    const bowing = options.poses.find((p) => p.id === 'adult-bowing')!;
    const bodyItems = bowing.parts['body'];
    expect(bodyItems.length).toBeGreaterThan(0);
    for (const item of bodyItems) {
      expect(parseInt(item.id, 10)).toBe(45);
    }
  });

  it('adult-bowing に neckTilt がない', () => {
    const bowing = options.poses.find((p) => p.id === 'adult-bowing')!;
    expect(bowing.hasNeckTilt).toBe(false);
  });

  it('adult-bowing に立ちと同じ leg, アクセサリがある', () => {
    const bowing = options.poses.find((p) => p.id === 'adult-bowing')!;
    expect(bowing.parts).toHaveProperty('leg');
    expect(bowing.parts).toHaveProperty('head/man');
    expect(bowing.parts).toHaveProperty('head/woman');
    expect(bowing.parts).toHaveProperty('hat');
    expect(bowing.parts).toHaveProperty('glasses');
    expect(bowing.parts).toHaveProperty('mask');
    expect(bowing.parts).toHaveProperty('beard');
  });

  it('neckTilts があるポーズだけ hasNeckTilt が true', () => {
    const standing = options.poses.find((p) => p.id === 'adult-standing')!;
    expect(standing.hasNeckTilt).toBe(true);

    const desk = options.poses.find((p) => p.id === 'adult-desk')!;
    expect(desk.hasNeckTilt).toBe(false);

    const child = options.poses.find((p) => p.id === 'child')!;
    expect(child.hasNeckTilt).toBe(false);
  });
});
