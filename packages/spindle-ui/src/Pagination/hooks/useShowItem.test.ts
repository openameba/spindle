import { renderHook } from '@testing-library/react-hooks';
import { useShowItem } from './useShowItem';

describe('useShowItem()', () => {
  it('should return show props', () => {
    const current = 8;
    const total = 20;

    const { result } = renderHook(() => useShowItem({ current, total }));

    expect(result.current.displayItem).toEqual([1, 7, 8, 9, 20]);
    expect(result.current.showHorizontal).toEqual(true);
    expect(result.current.hideDisplayItemLevel1).toEqual(false);
    expect(result.current.hideDisplayItemLevel2).toEqual(true);
    expect(result.current.hideDisplayItemLevel3).toEqual(false);
  });

  it('should return show props is current first', () => {
    const current = 1;
    const total = 20;

    const { result } = renderHook(() => useShowItem({ current, total }));

    expect(result.current.displayItem).toEqual([1, 2, 3, 4, 20]);
    expect(result.current.showHorizontal).toEqual(true);
    expect(result.current.hideDisplayItemLevel1).toEqual(false);
    expect(result.current.hideDisplayItemLevel2).toEqual(true);
    expect(result.current.hideDisplayItemLevel3).toEqual(false);
  });

  it('should return show props is current last', () => {
    const current = 20;
    const total = 20;

    const { result } = renderHook(() => useShowItem({ current, total }));

    expect(result.current.displayItem).toEqual([1, 17, 18, 19, 20]);
    expect(result.current.showHorizontal).toEqual(true);
    expect(result.current.hideDisplayItemLevel1).toEqual(false);
    expect(result.current.hideDisplayItemLevel2).toEqual(true);
    expect(result.current.hideDisplayItemLevel3).toEqual(false);
  });

  it('should return show props is total is less than max page item', () => {
    const current = 2;
    const total = 3;

    const { result } = renderHook(() => useShowItem({ current, total }));

    expect(result.current.displayItem).toEqual([1, 2, 3]);
    expect(result.current.showHorizontal).toEqual(false);
    expect(result.current.hideDisplayItemLevel1).toEqual(false);
    expect(result.current.hideDisplayItemLevel2).toEqual(false);
    expect(result.current.hideDisplayItemLevel3).toEqual(false);
  });

  it('should return show props is total is less than max page item', () => {
    const current = 98;
    const total = 100;

    const { result } = renderHook(() => useShowItem({ current, total }));

    expect(result.current.displayItem).toEqual([96, 97, 98, 99, 100]);
    expect(result.current.showHorizontal).toEqual(true);
    expect(result.current.hideDisplayItemLevel1).toEqual(false);
    expect(result.current.hideDisplayItemLevel2).toEqual(false);
    expect(result.current.hideDisplayItemLevel3).toEqual(true);
  });
});
