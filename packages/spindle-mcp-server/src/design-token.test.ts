import { describe, it, expect } from 'vitest';
import { getAllCssDesignTokens, getCssDesignToken } from './design-token';

describe('Design token functions', () => {
  describe('getAllCssDesignTokens', () => {
    it('should return all CSS design tokens', async () => {
      const result = await getAllCssDesignTokens();

      expect(result).toEqual(
        expect.objectContaining({
          color: expect.any(Object),
          animation: expect.any(Object),
        }),
      );
    });
  });

  describe('getCssDesignToken', () => {
    it('should return CSS design token for a given type', async () => {
      const result = await getCssDesignToken('color');

      expect(result).toEqual(
        expect.objectContaining({
          'ameba-green': expect.any(String),
          'ameba-black': expect.any(String),
        }),
      );
    });

    it('should return null for a non-existent type', async () => {
      const result = await getCssDesignToken('non-existent-type');

      expect(result).toBeNull();
    });
  });
});
