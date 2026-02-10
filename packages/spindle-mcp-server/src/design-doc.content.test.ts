import { describe, expect, it } from 'vitest';
import { getComponentDesignDocTemplate } from './design-doc';

/**
 * Design Docテンプレートの整合性テスト
 * リファクタリング後もテンプレートの完全性が保たれることを検証する
 */
describe('Design doc template content integrity', () => {
  describe('getComponentDesignDocTemplate', () => {
    it('should return a template', () => {
      const result = getComponentDesignDocTemplate();
      expect(result).not.toBeNull();
      expect(result!.template).toBeDefined();
    });

    it('should contain scaffdog template syntax', () => {
      const result = getComponentDesignDocTemplate();

      // scaffdogのテンプレート変数を含むこと
      expect(result!.template).toContain('inputs.');
    });

    it('should contain design doc structure sections', () => {
      const result = getComponentDesignDocTemplate();
      const template = result!.template;

      // Design Docの基本セクションが含まれること
      expect(template).toContain('#');
      expect(template.length).toBeGreaterThan(100);
    });
  });
});
