import { renderHook } from '@testing-library/react-hooks';
import { useShowItem } from './useShowItem';

describe('useShowItem()', () => {
  it('should return show props', () => {
    const current = 8;
    const total = 20;
    const pageItem = 5;

    const { result } = renderHook(() =>
      useShowItem({ current, total, pageItem }),
    );

    expect(result.current.displayItem).toEqual([1, 7, 8, 9, 20]);
    expect(result.current.showPrevHorizontal).toEqual(true);
    expect(result.current.showNextHorizontal).toEqual(true);
  });

  it('should return show props is current first', () => {
    const current = 1;
    const total = 20;
    const pageItem = 5;

    const { result } = renderHook(() =>
      useShowItem({ current, total, pageItem }),
    );

    expect(result.current.displayItem).toEqual([1, 2, 3, 4, 20]);
    expect(result.current.showPrevHorizontal).toEqual(false);
    expect(result.current.showNextHorizontal).toEqual(true);
  });

  it('should return show props is current first', () => {
    const current = 20;
    const total = 20;
    const pageItem = 5;

    const { result } = renderHook(() =>
      useShowItem({ current, total, pageItem }),
    );

    expect(result.current.displayItem).toEqual([1, 17, 18, 19, 20]);
    expect(result.current.showPrevHorizontal).toEqual(true);
    expect(result.current.showNextHorizontal).toEqual(false);
  });
});
