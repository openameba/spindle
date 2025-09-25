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
          figma: expect.any(Object),
        }),
      );
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
