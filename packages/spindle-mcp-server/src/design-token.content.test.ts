import { describe, expect, it } from 'vitest';
import { getAllCssDesignTokens, getCssDesignToken } from './design-token';

/**
 * デザイントークンデータの整合性テスト
 * リファクタリング後もトークン値の完全性が保たれることを検証する
 */
describe('Design token content integrity', () => {
  describe('getCssDesignToken', () => {
    describe('color tokens', () => {
      it('should contain brand colors', () => {
        const result = getCssDesignToken('color') as Record<string, string>;

        expect(result['ameba-green']).toBe('#2d8c3c');
        expect(result['ameba-black']).toBe('#000');
        expect(result['ameba-yellow-green']).toBe('#82be28');
        expect(result['ameba-white']).toBe('#fff');
        expect(result['ameba-yellow']).toBe('#f5e100');
      });

      it('should contain primary-green scale', () => {
        const result = getCssDesignToken('color') as Record<string, string>;

        for (const level of [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 5]) {
          expect(
            result,
            `should have primary-green-${level}`,
          ).toHaveProperty(`primary-green-${level}`);
        }
      });

      it('should contain theme color tokens', () => {
        const result = getCssDesignToken('color') as Record<string, string>;

        // Surface colors
        expect(result).toHaveProperty('color-surface-primary');
        expect(result).toHaveProperty('color-surface-accent-primary');

        // Text colors
        expect(result).toHaveProperty('color-text-high-emphasis');
        expect(result).toHaveProperty('color-text-medium-emphasis');
        expect(result).toHaveProperty('color-text-low-emphasis');
        expect(result).toHaveProperty('color-text-disabled');

        // Border colors
        expect(result).toHaveProperty('color-border-strong-emphasis');
        expect(result).toHaveProperty('color-border-high-emphasis');
        expect(result).toHaveProperty('color-border-medium-emphasis');
        expect(result).toHaveProperty('color-border-low-emphasis');

        // Object colors
        expect(result).toHaveProperty('color-object-high-emphasis');
        expect(result).toHaveProperty('color-object-accent-primary');
      });

      it('should contain third-party colors', () => {
        const result = getCssDesignToken('color') as Record<string, string>;

        expect(result).toHaveProperty('color-third-party-facebook-blue');
        expect(result).toHaveProperty('color-third-party-instagram-pink');
        expect(result).toHaveProperty('color-third-party-youtube-red');
      });

      it('should contain caution colors', () => {
        const result = getCssDesignToken('color') as Record<string, string>;

        expect(result).toHaveProperty('caution-red-100');
        expect(result).toHaveProperty('color-surface-caution');
        expect(result).toHaveProperty('color-text-caution');
      });
    });

    describe('animation tokens', () => {
      it('should return animation token values', () => {
        const result = getCssDesignToken('animation') as Record<string, string>;
        expect(result).not.toBeNull();
        expect(Object.keys(result).length).toBeGreaterThan(0);

        // アニメーショントークンのキーがspindle-tokens形式であること
        const keys = Object.keys(result);
        expect(keys.some((k) => k.includes('duration') || k.includes('ease'))).toBe(true);
      });
    });

    describe('font tokens', () => {
      it('should return font token values', () => {
        const result = getCssDesignToken('font') as Record<string, string>;
        expect(result).not.toBeNull();
        expect(Object.keys(result).length).toBeGreaterThan(0);
      });
    });

    describe('shadow tokens', () => {
      it('should return shadow token values', () => {
        const result = getCssDesignToken('shadow') as Record<string, string>;
        expect(result).not.toBeNull();
        expect(Object.keys(result).length).toBeGreaterThan(0);
      });
    });

    it('should return null for non-existent token type', () => {
      const result = getCssDesignToken('non-existent');
      expect(result).toBeNull();
    });
  });

  describe('getAllCssDesignTokens', () => {
    it('should contain all token types', () => {
      const result = getAllCssDesignTokens();
      const tokenTypes = Object.keys(result.tokenList);

      expect(tokenTypes).toContain('color');
      expect(tokenTypes).toContain('animation');
      expect(tokenTypes).toContain('font');
      expect(tokenTypes).toContain('shadow');
      expect(tokenTypes).toContain('spacing-mobile');
      expect(tokenTypes).toContain('spacing-tablet');
      expect(tokenTypes).toContain('spacing-desktop');
    });

    it('should have non-empty token objects for each type', () => {
      const result = getAllCssDesignTokens();

      for (const [type, tokens] of Object.entries(result.tokenList)) {
        expect(
          Object.keys(tokens).length,
          `${type} tokens should not be empty`,
        ).toBeGreaterThan(0);
      }
    });

    it('should have color tokens matching getCssDesignToken(color)', () => {
      const allTokens = getAllCssDesignTokens();
      const colorTokens = getCssDesignToken('color');

      expect(allTokens.tokenList.color).toEqual(colorTokens);
    });
  });
});
