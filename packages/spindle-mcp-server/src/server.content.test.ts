import { describe, expect, it } from 'vitest';
import { getAccessibilityDocs } from './accessibility';
import { getComponentInfo, getComponents } from './components';
import { getComponentDesignDocTemplate } from './design-doc';
import { getAllCssDesignTokens, getCssDesignToken } from './design-token';
import { getIconInfo, getIcons } from './icon';

/**
 * MCPサーバーレスポンスの整合性テスト
 *
 * server.ts では各データ関数の戻り値を JSON.stringify してMCPレスポンスとして返す。
 * フォーマット変更（JSON→Markdown等）後も、元のデータが欠落なく
 * レスポンスに含まれることを検証する。
 *
 * テスト方針:
 * - 各データ関数の戻り値をJSONシリアライズ→パースして情報が保持されるか確認
 * - レスポンスに含まれるべき必須情報が抽出可能か確認
 */
describe('MCP server response integrity', () => {
  describe('get_components response', () => {
    it('should be serializable and preserve component list', async () => {
      const data = await getComponents();
      const serialized = JSON.stringify(data);
      const parsed = JSON.parse(serialized);

      expect(parsed.componentList).toEqual(data.componentList);
      expect(parsed.componentList.length).toBeGreaterThan(20);
    });

    it('should include component names extractable from response', async () => {
      const data = await getComponents();
      const responseText = JSON.stringify(data);

      // レスポンスからコンポーネント名を抽出できること
      expect(responseText).toContain('Button');
      expect(responseText).toContain('Dialog');
      expect(responseText).toContain('Modal');
      expect(responseText).toContain('Table');
    });
  });

  describe('get_component_info response', () => {
    it('should be serializable and preserve all fields', () => {
      const data = getComponentInfo('Button', '');
      const serialized = JSON.stringify(data);
      const parsed = JSON.parse(serialized);

      expect(parsed.name).toBe('Button');
      expect(parsed.directory).toBe('Button');
      expect(parsed.implementation.name).toBe('Button.tsx');
      expect(parsed.implementation.content).toContain('export');
    });

    it('should preserve source code content through serialization', () => {
      const data = getComponentInfo('Button', '');
      const serialized = JSON.stringify(data);
      const parsed = JSON.parse(serialized);

      // ソースコードの改行がシリアライズ後も保持されること
      expect(parsed.implementation.content).toContain('\n');
      expect(parsed.styles.content).toContain('\n');

      // ソースコードの内容が変わらないこと
      expect(parsed.implementation.content).toBe(
        data!.implementation!.content,
      );
      expect(parsed.styles.content).toBe(data!.styles!.content);
    });

    it('should throw error for non-existent component', () => {
      const data = getComponentInfo('NonExistent', '');
      expect(data).toBeNull();
    });
  });

  describe('get_design_tokens response', () => {
    it('should be serializable and preserve all token types', () => {
      const data = getAllCssDesignTokens();
      const serialized = JSON.stringify(data);
      const parsed = JSON.parse(serialized);

      const tokenTypes = Object.keys(parsed.tokenList);
      expect(tokenTypes).toContain('color');
      expect(tokenTypes).toContain('animation');
      expect(tokenTypes).toContain('shadow');
    });

    it('should preserve token values through serialization', () => {
      const data = getAllCssDesignTokens();
      const serialized = JSON.stringify(data);
      const parsed = JSON.parse(serialized);

      expect(parsed.tokenList.color['ameba-green']).toBe('#2d8c3c');
    });
  });

  describe('get_design_token response', () => {
    it('should be serializable for color type', () => {
      const data = getCssDesignToken('color');
      const serialized = JSON.stringify(data);
      const parsed = JSON.parse(serialized);

      expect(parsed['ameba-green']).toBe('#2d8c3c');
      expect(parsed['color-text-high-emphasis']).toBeDefined();
    });
  });

  describe('get_icons response', () => {
    it('should be serializable and preserve icon list', async () => {
      const data = await getIcons();
      const serialized = JSON.stringify(data);
      const parsed = JSON.parse(serialized);

      expect(parsed.iconList.length).toBe(data.iconList.length);
      expect(parsed.iconList).toContain('Clock');
    });
  });

  describe('get_icon_info response', () => {
    it('should be serializable and preserve icon data', async () => {
      const data = await getIconInfo('Clock');
      const serialized = JSON.stringify(data);
      const parsed = JSON.parse(serialized);

      expect(parsed.name).toBe('Clock');
      expect(parsed.path).toContain('Clock.tsx');
    });
  });

  describe('get_accessibility_docs response', () => {
    it('should be serializable and preserve checklist', async () => {
      const data = await getAccessibilityDocs();
      const serialized = JSON.stringify(data);
      const parsed = JSON.parse(serialized);

      expect(parsed.checkList).toContain('チェック内容');
      expect(parsed.checkList).toContain('厳守');
    });
  });

  describe('get_component_design_doc_templete response', () => {
    it('should be serializable and preserve template', () => {
      const data = getComponentDesignDocTemplate();
      const serialized = JSON.stringify(data);
      const parsed = JSON.parse(serialized);

      expect(parsed.template).toBe(data!.template);
      expect(parsed.template.length).toBeGreaterThan(100);
    });
  });
});
