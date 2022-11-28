import { renderHook } from '@testing-library/react-hooks';
import { useShowItem } from './useShowItem';

// ページ総数の閾値
const TOTAL_THRESHOLD = 100;
// 表示出来る数字(アイテム)の最大数
const MAX_SHOW_ITEM_SIZE = 5;

describe('useShowItem()', () => {
  it('use show item current 1 total 1', () => {
    const current = 1;
    const total = 1;

    const { result } = renderHook(() =>
      useShowItem({
        current,
        total,
        totalThreshold: TOTAL_THRESHOLD,
        maxShowItemSize: MAX_SHOW_ITEM_SIZE,
      }),
    );

    expect(result.current).toEqual([1]);
  });

  it('use show item current 1 total 2', () => {
    const current = 1;
    const total = 2;

    const { result } = renderHook(() =>
      useShowItem({
        current,
        total,
        totalThreshold: TOTAL_THRESHOLD,
        maxShowItemSize: MAX_SHOW_ITEM_SIZE,
      }),
    );

    expect(result.current).toEqual([1, 2]);
  });

  it('use show item current 2 total 2', () => {
    const current = 2;
    const total = 2;

    const { result } = renderHook(() =>
      useShowItem({
        current,
        total,
        totalThreshold: TOTAL_THRESHOLD,
        maxShowItemSize: MAX_SHOW_ITEM_SIZE,
      }),
    );

    expect(result.current).toEqual([1, 2]);
  });

  it('use show item current 1 total 3', () => {
    const current = 1;
    const total = 3;

    const { result } = renderHook(() =>
      useShowItem({
        current,
        total,
        totalThreshold: TOTAL_THRESHOLD,
        maxShowItemSize: MAX_SHOW_ITEM_SIZE,
      }),
    );

    expect(result.current).toEqual([1, 2, 3]);
  });

  it('use show item current 2 total 3', () => {
    const current = 2;
    const total = 3;

    const { result } = renderHook(() =>
      useShowItem({
        current,
        total,
        totalThreshold: TOTAL_THRESHOLD,
        maxShowItemSize: MAX_SHOW_ITEM_SIZE,
      }),
    );

    expect(result.current).toEqual([1, 2, 3]);
  });

  it('use show item current 3 total 3', () => {
    const current = 3;
    const total = 3;

    const { result } = renderHook(() =>
      useShowItem({
        current,
        total,
        totalThreshold: TOTAL_THRESHOLD,
        maxShowItemSize: MAX_SHOW_ITEM_SIZE,
      }),
    );

    expect(result.current).toEqual([1, 2, 3]);
  });

  it('use show item current 1 total 4', () => {
    const current = 1;
    const total = 4;

    const { result } = renderHook(() =>
      useShowItem({
        current,
        total,
        totalThreshold: TOTAL_THRESHOLD,
        maxShowItemSize: MAX_SHOW_ITEM_SIZE,
      }),
    );

    expect(result.current).toEqual([1, 2, 3, 4]);
  });

  it('use show item current 2 total 4', () => {
    const current = 2;
    const total = 4;

    const { result } = renderHook(() =>
      useShowItem({
        current,
        total,
        totalThreshold: TOTAL_THRESHOLD,
        maxShowItemSize: MAX_SHOW_ITEM_SIZE,
      }),
    );

    expect(result.current).toEqual([1, 2, 3, 4]);
  });

  it('use show item current 3 total 4', () => {
    const current = 3;
    const total = 4;

    const { result } = renderHook(() =>
      useShowItem({
        current,
        total,
        totalThreshold: TOTAL_THRESHOLD,
        maxShowItemSize: MAX_SHOW_ITEM_SIZE,
      }),
    );

    expect(result.current).toEqual([1, 2, 3, 4]);
  });

  it('use show item current 4 total 4', () => {
    const current = 4;
    const total = 4;

    const { result } = renderHook(() =>
      useShowItem({
        current,
        total,
        totalThreshold: TOTAL_THRESHOLD,
        maxShowItemSize: MAX_SHOW_ITEM_SIZE,
      }),
    );

    expect(result.current).toEqual([1, 2, 3, 4]);
  });

  it('use show item current 1 total 5', () => {
    const current = 1;
    const total = 5;

    const { result } = renderHook(() =>
      useShowItem({
        current,
        total,
        totalThreshold: TOTAL_THRESHOLD,
        maxShowItemSize: MAX_SHOW_ITEM_SIZE,
      }),
    );

    expect(result.current).toEqual([1, 2, 3, 4, 5]);
  });

  it('use show item current 2 total 5', () => {
    const current = 2;
    const total = 5;

    const { result } = renderHook(() =>
      useShowItem({
        current,
        total,
        totalThreshold: TOTAL_THRESHOLD,
        maxShowItemSize: MAX_SHOW_ITEM_SIZE,
      }),
    );

    expect(result.current).toEqual([1, 2, 3, 4, 5]);
  });

  it('use show item current 3 total 5', () => {
    const current = 3;
    const total = 5;

    const { result } = renderHook(() =>
      useShowItem({
        current,
        total,
        totalThreshold: TOTAL_THRESHOLD,
        maxShowItemSize: MAX_SHOW_ITEM_SIZE,
      }),
    );

    expect(result.current).toEqual([1, 2, 3, 4, 5]);
  });

  it('use show item current 4 total 5', () => {
    const current = 4;
    const total = 5;

    const { result } = renderHook(() =>
      useShowItem({
        current,
        total,
        totalThreshold: TOTAL_THRESHOLD,
        maxShowItemSize: MAX_SHOW_ITEM_SIZE,
      }),
    );

    expect(result.current).toEqual([1, 2, 3, 4, 5]);
  });

  it('use show item current 5 total 5', () => {
    const current = 5;
    const total = 5;

    const { result } = renderHook(() =>
      useShowItem({
        current,
        total,
        totalThreshold: TOTAL_THRESHOLD,
        maxShowItemSize: MAX_SHOW_ITEM_SIZE,
      }),
    );

    expect(result.current).toEqual([1, 2, 3, 4, 5]);
  });

  it('use show item current 1 total 6', () => {
    const current = 1;
    const total = 6;

    const { result } = renderHook(() =>
      useShowItem({
        current,
        total,
        totalThreshold: TOTAL_THRESHOLD,
        maxShowItemSize: MAX_SHOW_ITEM_SIZE,
      }),
    );

    expect(result.current).toEqual([1, 2, 3, 4, 6]);
  });

  it('use show item current 2 total 6', () => {
    const current = 2;
    const total = 6;

    const { result } = renderHook(() =>
      useShowItem({
        current,
        total,
        totalThreshold: TOTAL_THRESHOLD,
        maxShowItemSize: MAX_SHOW_ITEM_SIZE,
      }),
    );

    expect(result.current).toEqual([1, 2, 3, 4, 6]);
  });

  it('use show item current 3 total 6', () => {
    const current = 3;
    const total = 6;

    const { result } = renderHook(() =>
      useShowItem({
        current,
        total,
        totalThreshold: TOTAL_THRESHOLD,
        maxShowItemSize: MAX_SHOW_ITEM_SIZE,
      }),
    );

    expect(result.current).toEqual([1, 3, 4, 5, 6]);
  });

  it('use show item current 4 total 6', () => {
    const current = 4;
    const total = 6;

    const { result } = renderHook(() =>
      useShowItem({
        current,
        total,
        totalThreshold: TOTAL_THRESHOLD,
        maxShowItemSize: MAX_SHOW_ITEM_SIZE,
      }),
    );

    expect(result.current).toEqual([1, 3, 4, 5, 6]);
  });

  it('use show item current 5 total 6', () => {
    const current = 5;
    const total = 6;

    const { result } = renderHook(() =>
      useShowItem({
        current,
        total,
        totalThreshold: TOTAL_THRESHOLD,
        maxShowItemSize: MAX_SHOW_ITEM_SIZE,
      }),
    );

    expect(result.current).toEqual([1, 3, 4, 5, 6]);
  });

  it('use show item current 6 total 6', () => {
    const current = 6;
    const total = 6;

    const { result } = renderHook(() =>
      useShowItem({
        current,
        total,
        totalThreshold: TOTAL_THRESHOLD,
        maxShowItemSize: MAX_SHOW_ITEM_SIZE,
      }),
    );

    expect(result.current).toEqual([1, 3, 4, 5, 6]);
  });

  it('use show item current 1 total 7', () => {
    const current = 1;
    const total = 7;

    const { result } = renderHook(() =>
      useShowItem({
        current,
        total,
        totalThreshold: TOTAL_THRESHOLD,
        maxShowItemSize: MAX_SHOW_ITEM_SIZE,
      }),
    );

    expect(result.current).toEqual([1, 2, 3, 4, 7]);
  });

  it('use show item current 2 total 7', () => {
    const current = 2;
    const total = 7;

    const { result } = renderHook(() =>
      useShowItem({
        current,
        total,
        totalThreshold: TOTAL_THRESHOLD,
        maxShowItemSize: MAX_SHOW_ITEM_SIZE,
      }),
    );

    expect(result.current).toEqual([1, 2, 3, 4, 7]);
  });

  it('use show item current 3 total 7', () => {
    const current = 3;
    const total = 7;

    const { result } = renderHook(() =>
      useShowItem({
        current,
        total,
        totalThreshold: TOTAL_THRESHOLD,
        maxShowItemSize: MAX_SHOW_ITEM_SIZE,
      }),
    );

    expect(result.current).toEqual([1, 3, 4, 5, 7]);
  });

  it('use show item current 4 total 7', () => {
    const current = 4;
    const total = 7;

    const { result } = renderHook(() =>
      useShowItem({
        current,
        total,
        totalThreshold: TOTAL_THRESHOLD,
        maxShowItemSize: MAX_SHOW_ITEM_SIZE,
      }),
    );

    expect(result.current).toEqual([1, 4, 5, 6, 7]);
  });

  it('use show item current 5 total 7', () => {
    const current = 5;
    const total = 7;

    const { result } = renderHook(() =>
      useShowItem({
        current,
        total,
        totalThreshold: TOTAL_THRESHOLD,
        maxShowItemSize: MAX_SHOW_ITEM_SIZE,
      }),
    );

    expect(result.current).toEqual([1, 4, 5, 6, 7]);
  });

  it('use show item current 6 total 7', () => {
    const current = 6;
    const total = 7;

    const { result } = renderHook(() =>
      useShowItem({
        current,
        total,
        totalThreshold: TOTAL_THRESHOLD,
        maxShowItemSize: MAX_SHOW_ITEM_SIZE,
      }),
    );

    expect(result.current).toEqual([1, 4, 5, 6, 7]);
  });

  it('use show item current 7 total 7', () => {
    const current = 7;
    const total = 7;

    const { result } = renderHook(() =>
      useShowItem({
        current,
        total,
        totalThreshold: TOTAL_THRESHOLD,
        maxShowItemSize: MAX_SHOW_ITEM_SIZE,
      }),
    );

    expect(result.current).toEqual([1, 4, 5, 6, 7]);
  });

  it('use show item current 1 total 1000', () => {
    const current = 1;
    const total = 1000;

    const { result } = renderHook(() =>
      useShowItem({
        current,
        total,
        totalThreshold: TOTAL_THRESHOLD,
        maxShowItemSize: MAX_SHOW_ITEM_SIZE,
      }),
    );

    expect(result.current).toEqual([1, 2, 3, 4, 5]);
  });

  it('use show item current 2 total 1000', () => {
    const current = 2;
    const total = 1000;

    const { result } = renderHook(() =>
      useShowItem({
        current,
        total,
        totalThreshold: TOTAL_THRESHOLD,
        maxShowItemSize: MAX_SHOW_ITEM_SIZE,
      }),
    );

    expect(result.current).toEqual([1, 2, 3, 4, 5]);
  });

  it('use show item current 3 total 1000', () => {
    const current = 3;
    const total = 1000;

    const { result } = renderHook(() =>
      useShowItem({
        current,
        total,
        totalThreshold: TOTAL_THRESHOLD,
        maxShowItemSize: MAX_SHOW_ITEM_SIZE,
      }),
    );

    expect(result.current).toEqual([1, 2, 3, 4, 5]);
  });

  it('use show item current 4 total 1000', () => {
    const current = 4;
    const total = 1000;

    const { result } = renderHook(() =>
      useShowItem({
        current,
        total,
        totalThreshold: TOTAL_THRESHOLD,
        maxShowItemSize: MAX_SHOW_ITEM_SIZE,
      }),
    );

    expect(result.current).toEqual([2, 3, 4, 5, 6]);
  });

  it('use show item current 5 total 1000', () => {
    const current = 5;
    const total = 1000;

    const { result } = renderHook(() =>
      useShowItem({
        current,
        total,
        totalThreshold: TOTAL_THRESHOLD,
        maxShowItemSize: MAX_SHOW_ITEM_SIZE,
      }),
    );

    expect(result.current).toEqual([3, 4, 5, 6, 7]);
  });

  it('use show item current 200 total 1000', () => {
    const current = 200;
    const total = 1000;

    const { result } = renderHook(() =>
      useShowItem({
        current,
        total,
        totalThreshold: TOTAL_THRESHOLD,
        maxShowItemSize: MAX_SHOW_ITEM_SIZE,
      }),
    );

    expect(result.current).toEqual([198, 199, 200, 201, 202]);
  });

  it('use show item current 998 total 1000', () => {
    const current = 998;
    const total = 1000;

    const { result } = renderHook(() =>
      useShowItem({
        current,
        total,
        totalThreshold: TOTAL_THRESHOLD,
        maxShowItemSize: MAX_SHOW_ITEM_SIZE,
      }),
    );

    expect(result.current).toEqual([996, 997, 998, 999, 1000]);
  });

  it('use show item current 999 total 1000', () => {
    const current = 999;
    const total = 1000;

    const { result } = renderHook(() =>
      useShowItem({
        current,
        total,
        totalThreshold: TOTAL_THRESHOLD,
        maxShowItemSize: MAX_SHOW_ITEM_SIZE,
      }),
    );

    expect(result.current).toEqual([996, 997, 998, 999, 1000]);
  });

  it('use show item current 1000 total 1000', () => {
    const current = 1000;
    const total = 1000;

    const { result } = renderHook(() =>
      useShowItem({
        current,
        total,
        totalThreshold: TOTAL_THRESHOLD,
        maxShowItemSize: MAX_SHOW_ITEM_SIZE,
      }),
    );

    expect(result.current).toEqual([996, 997, 998, 999, 1000]);
  });
});
