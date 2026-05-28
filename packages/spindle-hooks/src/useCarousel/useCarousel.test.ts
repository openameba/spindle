import { renderHook } from '@testing-library/react';
import { useCarousel } from './useCarousel';

type Item = { id: string };

const items: Item[] = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];

describe('useCarousel()', () => {
  it('itemKeys has the same length as itemsToRender', () => {
    const { result } = renderHook(() =>
      useCarousel({
        items,
        itemLinkClassName: 'link',
        shouldAutoPlaying: false,
      }),
    );

    expect(result.current.itemKeys).toHaveLength(
      result.current.itemsToRender.length,
    );
  });

  it('itemKeys are all unique even when items reference is duplicated by head/tail cloning', () => {
    const { result } = renderHook(() =>
      useCarousel({
        items,
        itemLinkClassName: 'link',
        shouldAutoPlaying: false,
      }),
    );

    const { itemKeys } = result.current;
    expect(new Set(itemKeys).size).toBe(itemKeys.length);
  });

  it('itemKeys use head-/body-/tail- prefixes to indicate cloned vs original items', () => {
    const { result } = renderHook(() =>
      useCarousel({
        items,
        itemLinkClassName: 'link',
        shouldAutoPlaying: false,
        displayCount: 2,
      }),
    );

    // displayCount=2 with 3 items → head(2) + body(3) + tail(2)
    expect(result.current.itemKeys).toEqual([
      'head-0',
      'head-1',
      'body-0',
      'body-1',
      'body-2',
      'tail-0',
      'tail-1',
    ]);
  });
});
