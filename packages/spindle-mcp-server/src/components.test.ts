import { describe, expect, it } from 'vitest';
import { getComponentInfo, getComponents } from './components';

describe('Components functions', () => {
  describe('getComponents', () => {
    it('should return all components', async () => {
      const result = await getComponents();

      expect(result).toEqual(
        expect.objectContaining({
          componentList: expect.any(Array),
          documentation: expect.any(String),
        }),
      );
    });
  });

  describe('getComponentInfo', () => {
    it('should return component info for a given component', async () => {
      const result = await getComponentInfo('Button', 'Button');

      expect(result).toEqual(
        expect.objectContaining({
          name: 'Button',
          directory: 'Button',
          implementation: expect.any(Object),
          styles: expect.any(Object),
          documentation: expect.any(Object),
          tests: expect.any(Object),
          // ファイル名まで固定して、拡張子の退行や assets のコピー漏れを検知する
          figma: expect.objectContaining({ name: 'Button.figma.ts' }),
        }),
      );
    });

    // 単一の Figma コンポーネントセットの variant として定義されているコンポーネントは
    // 自ディレクトリにテンプレートを持たず、親ディレクトリの共有テンプレートを参照する
    it.each([
      'CapsuleTab',
      'InlineTab',
      'UnderlineTab',
    ])('should resolve the shared template in the parent directory for %s', (componentName) => {
      const result = getComponentInfo(
        componentName,
        `NavigationTab/${componentName}`,
      );

      expect(result?.figma?.name).toBe('NavigationTab.figma.ts');
      expect(result?.figma?.content).toContain('component=NavigationTab');
    });

    it('should not attach a Figma template when no shared template exists', () => {
      const result = getComponentInfo('DropDown', 'Form/DropDown');

      expect(result?.implementation).toBeDefined();
      expect(result?.figma).toBeUndefined();
    });

    it('should return null for a non-existent component', async () => {
      const result = await getComponentInfo(
        'NonExistentComponent',
        'NonExistentComponent',
      );

      expect(result).toBeNull();
    });
  });
});
