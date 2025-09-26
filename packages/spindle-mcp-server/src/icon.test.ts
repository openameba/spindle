import { describe, expect, it } from 'vitest';
import { getIconInfo, getIcons } from './icon';

describe('Icon functions', () => {
  describe('getIcons', () => {
    it('should return icon list and documentation', async () => {
      const result = await getIcons();

      // アイコンリストの検証
      expect(result).toEqual(
        expect.objectContaining({
          iconList: expect.arrayContaining([expect.any(String)]),
          documentation: expect.any(String),
        }),
      );
    });
  });

  describe('getIconInfo', () => {
    it('should return icon info for an existing icon', async () => {
      const result = await getIconInfo('Clock');

      // 戻り値の型を検証
      expect(result).toEqual(
        expect.objectContaining({
          name: 'Clock',
          path: expect.stringContaining('Clock.tsx'),
          documentation: expect.stringContaining('Icon'),
        }),
      );

      // パスの妥当性を検証
      expect(result?.path).toMatch(/[\\/]Icon[\\/]Clock\.tsx$/);
    });

    it('should return null for non-existent icon', async () => {
      const result = await getIconInfo('NonExistentIcon');
      expect(result).toBeNull();
    });
  });
});
