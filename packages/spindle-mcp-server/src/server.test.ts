import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { beforeAll, describe, expect, it } from 'vitest';
import { createServer } from './server';

describe('MCP Server', () => {
  let server: McpServer;

  beforeAll(() => {
    server = createServer();
  });

  describe('Server creation', () => {
    it('should create a server instance', () => {
      expect(server).toBeDefined();
      expect(server).toBeInstanceOf(McpServer);
    });

    it('should have server configuration', () => {
      // McpServerインスタンスの基本的な検証
      expect(server).toBeDefined();
      // serverオブジェクトの構造を確認
      expect(server).toHaveProperty('tool');
      expect(typeof server.tool).toBe('function');
    });
  });

  describe('Tool functions', () => {
    it('should execute get_components function', async () => {
      const { getComponents } = await import('./components');
      const result = await getComponents();

      expect(result).toHaveProperty('componentList');
      expect(result).toHaveProperty('documentation');
      expect(Array.isArray(result.componentList)).toBe(true);
      expect(typeof result.documentation).toBe('string');
    });

    it('should execute get_icons function', async () => {
      const { getIcons } = await import('./icon');
      const result = await getIcons();

      expect(result).toHaveProperty('iconList');
      expect(result).toHaveProperty('documentation');
      expect(Array.isArray(result.iconList)).toBe(true);
      expect(typeof result.documentation).toBe('string');
    });

    it('should execute get_design_tokens function', async () => {
      const { getAllCssDesignTokens } = await import('./design-token');
      const result = getAllCssDesignTokens();

      expect(result).toHaveProperty('tokenList');
      expect(result).toHaveProperty('documentation');
      expect(typeof result.tokenList).toBe('object');
      expect(typeof result.documentation).toBe('string');
    });

    it('should execute get_design_token function with color type', async () => {
      const { getCssDesignToken } = await import('./design-token');
      const result = getCssDesignToken('color');

      expect(result).not.toBeNull();
      expect(typeof result).toBe('object');
    });

    it('should execute get_icon_info function with existing icon', async () => {
      const { getIconInfo } = await import('./icon');
      const result = await getIconInfo('Clock');

      expect(result).not.toBeNull();
      expect(result).toHaveProperty('name', 'Clock');
      expect(result).toHaveProperty('path');
      expect(result).toHaveProperty('documentation');
    });

    it('should return null for non-existent icon', async () => {
      const { getIconInfo } = await import('./icon');
      const result = await getIconInfo('NonExistentIcon');

      expect(result).toBeNull();
    });

    it('should execute get_accessibility_docs function', async () => {
      const { getAccessibilityDocs } = await import('./accessibility');
      const result = await getAccessibilityDocs();

      expect(result).toHaveProperty('checkList');
      expect(typeof result.checkList).toBe('string');
      expect(result.checkList).toContain('チェック内容');
    });

    it('should execute get_component_design_doc_template function', async () => {
      const { getComponentDesignDocTemplate } = await import('./design-doc');
      const result = getComponentDesignDocTemplate();

      if (result !== null) {
        expect(result).toHaveProperty('template');
        expect(typeof result.template).toBe('string');
      }
    });

    it('should execute get_component_info function', async () => {
      const { getComponentInfo } = await import('./components');

      const result = getComponentInfo('Button', '');

      if (result !== null) {
        expect(result).toHaveProperty('name');
        expect(result).toHaveProperty('directory');
        expect(typeof result.name).toBe('string');
        expect(typeof result.directory).toBe('string');
      }
    });
  });

  describe('Server integration', () => {
    it('should call the tool method', () => {
      expect(server.tool).toBeDefined();
      expect(typeof server.tool).toBe('function');
    });
  });
});
