import { renderHook, act } from '@testing-library/react-hooks';
import { useSample } from './useSample';

test('useSample', () => {
  const { result } = renderHook(() => useSample(5));

  act(() => {
    result.current[1]();
  });

  expect(result.current[0]).toBe(6);
});
