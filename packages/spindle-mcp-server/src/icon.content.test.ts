import { describe, expect, it } from 'vitest';
import { getIconInfo, getIcons } from './icon';

/**
 * アイコンデータの整合性テスト
 * リファクタリング後もアイコンデータの完全性が保たれることを検証する
 */
describe('Icon content integrity', () => {
  describe('getIcons', () => {
    it('should return a substantial number of icons', async () => {
      const result = await getIcons();
      // 374アイコンが存在する前提
      expect(result.iconList.length).toBeGreaterThan(100);
    });

    it('should contain well-known icon names', async () => {
      const result = await getIcons();

      const expectedIcons = ['Clock', 'Search', 'Abemakun'];
      for (const name of expectedIcons) {
        expect(
          result.iconList,
          `iconList should contain ${name}`,
        ).toContain(name);
      }
    });

    it('should not contain file extensions in icon names', async () => {
      const result = await getIcons();

      for (const name of result.iconList) {
        expect(name).not.toContain('.tsx');
        expect(name).not.toContain('.ts');
      }
    });
  });

  describe('getIconInfo', () => {
    it('should return valid path for existing icon', async () => {
      const result = await getIconInfo('Clock');
      expect(result).not.toBeNull();
      expect(result!.path).toContain('Icon');
      expect(result!.path).toContain('Clock.tsx');
    });

    it('should return correct name', async () => {
      const result = await getIconInfo('Search');
      expect(result).not.toBeNull();
      expect(result!.name).toBe('Search');
    });

    it('should return null for non-existent icon', async () => {
      const result = await getIconInfo('ThisIconDoesNotExist');
      expect(result).toBeNull();
    });
  });
});
