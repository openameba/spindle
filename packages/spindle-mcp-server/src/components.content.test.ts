import { describe, expect, it } from 'vitest';
import { getComponentInfo, getComponents } from './components';

/**
 * コンポーネントデータの整合性テスト
 * リファクタリング後もデータの完全性が保たれることを検証する
 */
describe('Components content integrity', () => {
  describe('getComponents', () => {
    it('should contain all known components', async () => {
      const result = await getComponents();

      const expectedComponents = [
        'BottomButton',
        'Button',
        'Dialog',
        'DropdownMenu',
        'IconButton',
        'InlineNotification',
        'LinkButton',
        'Pagination',
        'Rating',
        'SegmentedControl',
        'SnackBar',
        'SubtleButton',
        'Table',
        'TextButton',
        'TextLink',
        'Toast',
      ];

      for (const name of expectedComponents) {
        expect(
          result.componentList,
          `componentList should contain ${name}`,
        ).toContain(name);
      }
    });

    it('should not return an empty component list', async () => {
      const result = await getComponents();
      expect(result.componentList.length).toBeGreaterThan(20);
    });
  });

  describe('getComponentInfo', () => {
    it('should return valid implementation content for Button', () => {
      const result = getComponentInfo('Button', '');
      expect(result).not.toBeNull();

      // 実装ファイルにReactコンポーネントのコードが含まれること
      expect(result!.implementation).toBeDefined();
      expect(result!.implementation!.name).toBe('Button.tsx');
      expect(result!.implementation!.content).toContain('export');
      expect(result!.implementation!.content).toContain('Button');
    });

    it('should return valid styles content for Button', () => {
      const result = getComponentInfo('Button', '');

      expect(result!.styles).toBeDefined();
      expect(result!.styles!.name).toBe('Button.css');
      expect(result!.styles!.content).toContain('.spui-');
    });

    it('should return valid documentation content for Button', () => {
      const result = getComponentInfo('Button', '');

      expect(result!.documentation).toBeDefined();
      expect(result!.documentation!.name).toBe('Button.mdx');
      expect(result!.documentation!.content.length).toBeGreaterThan(0);
    });

    it('should return valid test content for Button', () => {
      const result = getComponentInfo('Button', '');

      expect(result!.tests).toBeDefined();
      expect(result!.tests!.name).toBe('Button.test.tsx');
      expect(result!.tests!.content).toContain('test');
    });

    it('should return valid figma content for Button', () => {
      const result = getComponentInfo('Button', '');

      expect(result!.figma).toBeDefined();
      expect(result!.figma!.name).toBe('Button.figma.tsx');
      expect(result!.figma!.content).toContain('figma');
    });

    it('should return correct directory path', () => {
      const result = getComponentInfo('Button', '');

      expect(result!.directory).toBe('Button');
    });

    it('should return all file types for Dialog', () => {
      const result = getComponentInfo('Dialog', '');
      expect(result).not.toBeNull();

      // Dialog も全ファイルタイプが揃っていること
      expect(result!.implementation).toBeDefined();
      expect(result!.styles).toBeDefined();
      expect(result!.documentation).toBeDefined();
    });

    it('should contain actual source code, not empty strings', () => {
      const result = getComponentInfo('Button', '');

      const files = [
        result!.implementation,
        result!.styles,
        result!.documentation,
      ];
      for (const file of files) {
        expect(file).toBeDefined();
        expect(file!.content.length).toBeGreaterThan(10);
        // 改行を含む実際のファイル内容であること
        expect(file!.content).toContain('\n');
      }
    });

    it('should preserve multiline content with original formatting', () => {
      const result = getComponentInfo('Button', '');

      const impl = result!.implementation!.content;
      const lines = impl.split('\n');
      // 複数行のソースコードであること
      expect(lines.length).toBeGreaterThan(5);
    });
  });
});
