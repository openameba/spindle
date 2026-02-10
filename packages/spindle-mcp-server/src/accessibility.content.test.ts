import { describe, expect, it } from 'vitest';
import { getAccessibilityDocs } from './accessibility';

/**
 * アクセシビリティデータの整合性テスト
 * リファクタリング後もチェックリストの完全性が保たれることを検証する
 */
describe('Accessibility content integrity', () => {
  describe('getAccessibilityDocs', () => {
    it('should contain CSV header row', async () => {
      const result = await getAccessibilityDocs();

      expect(result.checkList).toContain(
        'チェック内容,重要度,該当ガイドライン,ガイドラインURL',
      );
    });

    it('should contain all severity levels', async () => {
      const result = await getAccessibilityDocs();

      expect(result.checkList).toContain('厳守');
      expect(result.checkList).toContain('基本必須');
      expect(result.checkList).toContain('できれば');
    });

    it('should contain expected number of checklist items', async () => {
      const result = await getAccessibilityDocs();

      // ヘッダー行を除いた行数
      const lines = result.checkList.trim().split('\n');
      const headerLine = 1;
      const dataLines = lines.length - headerLine;

      // 45項目のチェックリスト
      expect(dataLines).toBe(45);
    });

    it('should contain guideline URLs', async () => {
      const result = await getAccessibilityDocs();

      expect(result.checkList).toContain(
        'https://a11y-guidelines.ameba.design/',
      );
    });

    it('should contain key accessibility checks', async () => {
      const result = await getAccessibilityDocs();

      // 画像の代替テキスト
      expect(result.checkList).toContain('代替テキスト');
      // キーボード操作
      expect(result.checkList).toContain('キーボード');
      // コントラスト
      expect(result.checkList).toContain('コントラスト');
      // フォーカス
      expect(result.checkList).toContain('フォーカス');
    });
  });
});
