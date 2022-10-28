import { renderHook } from '@testing-library/react-hooks';
import { useShowItem } from './useShowItem';

describe('useShowItem()', () => {
  it('should return show props', () => {
    const current = 8;
    const total = 20;

    const { result } = renderHook(() => useShowItem({ current, total }));

    expect(result.current.displayItem).toEqual([1, 7, 8, 9, 20]);
    expect(result.current.showPrevHorizontal).toEqual(true);
    expect(result.current.showNextHorizontal).toEqual(true);
    expect(result.current.hideDisplayItem).toEqual(true);
  });

  it('should return show props is current first', () => {
    const current = 1;
    const total = 20;

    const { result } = renderHook(() => useShowItem({ current, total }));

    expect(result.current.displayItem).toEqual([1, 2, 3, 4, 20]);
    expect(result.current.showPrevHorizontal).toEqual(false);
    expect(result.current.showNextHorizontal).toEqual(true);
    expect(result.current.hideDisplayItem).toEqual(true);
  });

  it('should return show props is current last', () => {
    const current = 20;
    const total = 20;

    const { result } = renderHook(() => useShowItem({ current, total }));

    expect(result.current.displayItem).toEqual([1, 17, 18, 19, 20]);
    expect(result.current.showPrevHorizontal).toEqual(true);
    expect(result.current.showNextHorizontal).toEqual(false);
    expect(result.current.hideDisplayItem).toEqual(true);
  });

  it('should return show props is total is less than max page item', () => {
    const current = 2;
    const total = 3;

    const { result } = renderHook(() => useShowItem({ current, total }));

    expect(result.current.displayItem).toEqual([1, 2, 3]);
    expect(result.current.showPrevHorizontal).toEqual(false);
    expect(result.current.showNextHorizontal).toEqual(false);
    expect(result.current.hideDisplayItem).toEqual(false);
  });
});
