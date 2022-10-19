import { renderHook } from '@testing-library/react-hooks';
import { useItemPageNumber } from './useItemPageNumber';

describe('useItemPageNumber()', () => {
  it('should return first page number', () => {
    const type = 'first';
    const isDisabled = false;
    const current = 8;
    const total = 20;

    const { result } = renderHook(() =>
      useItemPageNumber({ type, isDisabled, current, total }),
    );

    expect(result.current.pageNumber).toEqual(1);
  });

  it('should return prev page number', () => {
    const type = 'prev';
    const isDisabled = false;
    const current = 8;
    const total = 20;

    const { result } = renderHook(() =>
      useItemPageNumber({ type, isDisabled, current, total }),
    );

    expect(result.current.pageNumber).toEqual(current - 1);
  });

  it('should return next page number', () => {
    const type = 'next';
    const isDisabled = false;
    const current = 8;
    const total = 20;

    const { result } = renderHook(() =>
      useItemPageNumber({ type, isDisabled, current, total }),
    );

    expect(result.current.pageNumber).toEqual(current + 1);
  });

  it('should return last page number', () => {
    const type = 'last';
    const isDisabled = false;
    const current = 8;
    const total = 20;

    const { result } = renderHook(() =>
      useItemPageNumber({ type, isDisabled, current, total }),
    );

    expect(result.current.pageNumber).toEqual(total);
  });
});
