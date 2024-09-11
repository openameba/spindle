import { renderHook } from '@testing-library/react';
import { useShowItem } from './useShowItem';

// ページ総数の閾値
const TOTAL_THRESHOLD = 100;

describe('3 item size useShowItem()', () => {
  it('use show item current 1 total 1', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 1,
        total: 1,
        showItemSize: 3,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1]);
  });
  it('use show item current 1 total 2', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 1,
        total: 2,
        showItemSize: 3,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 2]);
  });
  it('use show item current 2 total 2', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 2,
        total: 2,
        showItemSize: 3,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 2]);
  });
  it('use show item current 1 total 3', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 1,
        total: 3,
        showItemSize: 3,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 2, 3]);
  });
  it('use show item current 2 total 3', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 2,
        total: 3,
        showItemSize: 3,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 2, 3]);
  });
  it('use show item current 3 total 3', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 3,
        total: 3,
        showItemSize: 3,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 2, 3]);
  });
  it('use show item current 1 total 4', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 1,
        total: 4,
        showItemSize: 3,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 2, 3]);
  });
  it('use show item current 2 total 4', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 2,
        total: 4,
        showItemSize: 3,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 2, 3]);
  });
  it('use show item current 3 total 4', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 3,
        total: 4,
        showItemSize: 3,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([2, 3, 4]);
  });
  it('use show item current 4 total 4', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 4,
        total: 4,
        showItemSize: 3,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([2, 3, 4]);
  });
  it('use show item current 1 total 5', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 1,
        total: 5,
        showItemSize: 3,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 2, 3]);
  });
  it('use show item current 2 total 5', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 2,
        total: 5,
        showItemSize: 3,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 2, 3]);
  });
  it('use show item current 3 total 5', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 3,
        total: 5,
        showItemSize: 3,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([2, 3, 4]);
  });
  it('use show item current 4 total 5', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 4,
        total: 5,
        showItemSize: 3,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([3, 4, 5]);
  });
  it('use show item current 5 total 5', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 5,
        total: 5,
        showItemSize: 3,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([3, 4, 5]);
  });
  it('use show item current 1 total 6', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 1,
        total: 6,
        showItemSize: 3,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 2, 6]);
  });
  it('use show item current 2 total 6', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 2,
        total: 6,
        showItemSize: 3,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 2, 6]);
  });
  it('use show item current 3 total 6', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 3,
        total: 6,
        showItemSize: 3,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 3, 6]);
  });
  it('use show item current 4 total 6', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 4,
        total: 6,
        showItemSize: 3,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 4, 6]);
  });
  it('use show item current 5 total 6', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 5,
        total: 6,
        showItemSize: 3,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 5, 6]);
  });
  it('use show item current 6 total 6', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 6,
        total: 6,
        showItemSize: 3,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 5, 6]);
  });
  it('use show item current 1 total 7', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 1,
        total: 7,
        showItemSize: 3,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 2, 7]);
  });
  it('use show item current 2 total 7', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 2,
        total: 7,
        showItemSize: 3,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 2, 7]);
  });
  it('use show item current 3 total 7', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 3,
        total: 7,
        showItemSize: 3,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 3, 7]);
  });
  it('use show item current 4 total 7', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 4,
        total: 7,
        showItemSize: 3,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 4, 7]);
  });
  it('use show item current 5 total 7', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 5,
        total: 7,
        showItemSize: 3,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 5, 7]);
  });
  it('use show item current 6 total 7', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 6,
        total: 7,
        showItemSize: 3,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 6, 7]);
  });
  it('use show item current 7 total 7', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 7,
        total: 7,
        showItemSize: 3,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 6, 7]);
  });
  it('use show item current 1 total 1000', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 1,
        total: 1000,
        showItemSize: 3,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 2, 3]);
  });
  it('use show item current 2 total 1000', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 2,
        total: 1000,
        showItemSize: 3,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 2, 3]);
  });
  it('use show item current 3 total 1000', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 3,
        total: 1000,
        showItemSize: 3,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([2, 3, 4]);
  });
  it('use show item current 4 total 1000', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 4,
        total: 1000,
        showItemSize: 3,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([3, 4, 5]);
  });
  it('use show item current 5 total 1000', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 5,
        total: 1000,
        showItemSize: 3,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([4, 5, 6]);
  });
  it('use show item current 200 total 1000', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 200,
        total: 1000,
        showItemSize: 3,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([199, 200, 201]);
  });
  it('use show item current 998 total 1000', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 998,
        total: 1000,
        showItemSize: 3,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([997, 998, 999]);
  });
  it('use show item current 999 total 1000', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 999,
        total: 1000,
        showItemSize: 3,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([998, 999, 1000]);
  });
  it('use show item current 1000 total 1000', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 1000,
        total: 1000,
        showItemSize: 3,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([998, 999, 1000]);
  });
});

describe('5 item size useShowItem()', () => {
  it('use show item current 1 total 1', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 1,
        total: 1,
        showItemSize: 5,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1]);
  });

  it('use show item current 1 total 2', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 1,
        total: 2,
        showItemSize: 5,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 2]);
  });

  it('use show item current 2 total 2', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 2,
        total: 2,
        showItemSize: 5,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 2]);
  });

  it('use show item current 1 total 3', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 1,
        total: 3,
        showItemSize: 5,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );

    expect(result.current).toEqual([1, 2, 3]);
  });

  it('use show item current 2 total 3', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 2,
        total: 3,
        showItemSize: 5,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 2, 3]);
  });

  it('use show item current 3 total 3', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 3,
        total: 3,
        showItemSize: 5,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 2, 3]);
  });

  it('use show item current 1 total 4', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 1,
        total: 4,
        showItemSize: 5,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 2, 3, 4]);
  });

  it('use show item current 2 total 4', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 2,
        total: 4,
        showItemSize: 5,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 2, 3, 4]);
  });

  it('use show item current 3 total 4', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 3,
        total: 4,
        showItemSize: 5,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 2, 3, 4]);
  });

  it('use show item current 4 total 4', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 4,
        total: 4,
        showItemSize: 5,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 2, 3, 4]);
  });

  it('use show item current 1 total 5', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 1,
        total: 5,
        showItemSize: 5,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 2, 3, 4, 5]);
  });

  it('use show item current 2 total 5', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 2,
        total: 5,
        showItemSize: 5,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 2, 3, 4, 5]);
  });

  it('use show item current 3 total 5', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 3,
        total: 5,
        showItemSize: 5,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 2, 3, 4, 5]);
  });

  it('use show item current 4 total 5', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 4,
        total: 5,
        showItemSize: 5,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 2, 3, 4, 5]);
  });

  it('use show item current 5 total 5', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 5,
        total: 5,
        showItemSize: 5,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 2, 3, 4, 5]);
  });

  it('use show item current 1 total 6', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 1,
        total: 6,
        showItemSize: 5,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 2, 3, 4, 6]);
  });

  it('use show item current 2 total 6', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 2,
        total: 6,
        showItemSize: 5,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 2, 3, 4, 6]);
  });

  it('use show item current 3 total 6', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 3,
        total: 6,
        showItemSize: 5,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 2, 3, 4, 6]);
  });

  it('use show item current 4 total 6', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 4,
        total: 6,
        showItemSize: 5,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 3, 4, 5, 6]);
  });

  it('use show item current 5 total 6', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 5,
        total: 6,
        showItemSize: 5,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 3, 4, 5, 6]);
  });

  it('use show item current 6 total 6', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 6,
        total: 6,
        showItemSize: 5,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 3, 4, 5, 6]);
  });

  it('use show item current 1 total 7', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 1,
        total: 7,
        showItemSize: 5,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 2, 3, 4, 7]);
  });

  it('use show item current 2 total 7', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 2,
        total: 7,
        showItemSize: 5,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 2, 3, 4, 7]);
  });

  it('use show item current 3 total 7', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 3,
        total: 7,
        showItemSize: 5,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 2, 3, 4, 7]);
  });

  it('use show item current 4 total 7', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 4,
        total: 7,
        showItemSize: 5,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 3, 4, 5, 7]);
  });

  it('use show item current 5 total 7', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 5,
        total: 7,
        showItemSize: 5,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 4, 5, 6, 7]);
  });

  it('use show item current 6 total 7', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 6,
        total: 7,
        showItemSize: 5,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 4, 5, 6, 7]);
  });

  it('use show item current 7 total 7', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 7,
        total: 7,
        showItemSize: 5,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 4, 5, 6, 7]);
  });

  it('use show item current 1 total 1000', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 1,
        total: 1000,
        showItemSize: 5,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 2, 3, 4, 5]);
  });

  it('use show item current 2 total 1000', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 2,
        total: 1000,
        showItemSize: 5,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 2, 3, 4, 5]);
  });

  it('use show item current 3 total 1000', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 3,
        total: 1000,
        showItemSize: 5,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([1, 2, 3, 4, 5]);
  });

  it('use show item current 4 total 1000', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 4,
        total: 1000,
        showItemSize: 5,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([2, 3, 4, 5, 6]);
  });

  it('use show item current 5 total 1000', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 5,
        total: 1000,
        showItemSize: 5,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([3, 4, 5, 6, 7]);
  });

  it('use show item current 200 total 1000', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 200,
        total: 1000,
        showItemSize: 5,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([198, 199, 200, 201, 202]);
  });

  it('use show item current 998 total 1000', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 998,
        total: 1000,
        showItemSize: 5,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([996, 997, 998, 999, 1000]);
  });

  it('use show item current 999 total 1000', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 999,
        total: 1000,
        showItemSize: 5,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([996, 997, 998, 999, 1000]);
  });

  it('use show item current 1000 total 1000', () => {
    const { result } = renderHook(() =>
      useShowItem({
        current: 1000,
        total: 1000,
        showItemSize: 5,
        totalThreshold: TOTAL_THRESHOLD,
      }),
    );
    expect(result.current).toEqual([996, 997, 998, 999, 1000]);
  });
});
