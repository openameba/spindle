import { renderHook } from '@testing-library/react-hooks';
import { useTimeDistance } from './useTimeDistance';

describe('useTimeDistance()', () => {
  it('should return formatted time distance', () => {
    const date = '2022-01-01T00:00:00.000Z';
    const baseTime = new Date('2022-01-01T03:00:00.000Z');

    const { result } = renderHook(() =>
      useTimeDistance(date, { relativeDate: baseTime }),
    );

    const epochDistance = baseTime.getTime() - new Date(date).getTime();

    expect(result.current).toEqual(['3時間前', epochDistance]);
  });

  it('should return empty string when date is empty', () => {
    const date = '';
    const { result } = renderHook(() => useTimeDistance(date));

    expect(result.current).toEqual(['', 0]);
  });
});
