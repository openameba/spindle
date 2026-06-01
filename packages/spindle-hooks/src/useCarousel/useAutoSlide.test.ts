import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useAutoSlide } from './useAutoSlide';

const AUTO_SLIDE_SPEED = 4000;

describe('useAutoSlide()', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it('does not throw "Maximum update depth exceeded" when mounted with autoplay enabled', () => {
    expect(() =>
      renderHook(() =>
        useAutoSlide({ onTimeOut: () => {}, shouldAutoPlaying: true }),
      ),
    ).not.toThrow();
  });

  it('calls onTimeOut after AUTO_SLIDE_SPEED when autoplay is enabled', () => {
    const onTimeOut = vi.fn();
    renderHook(() => useAutoSlide({ onTimeOut, shouldAutoPlaying: true }));

    expect(onTimeOut).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(AUTO_SLIDE_SPEED);
    });

    expect(onTimeOut).toHaveBeenCalledTimes(1);
  });

  it('does not start the timer when autoplay is disabled', () => {
    const onTimeOut = vi.fn();
    renderHook(() => useAutoSlide({ onTimeOut, shouldAutoPlaying: false }));

    act(() => {
      vi.advanceTimersByTime(AUTO_SLIDE_SPEED);
    });

    expect(onTimeOut).not.toHaveBeenCalled();
  });

  it('always invokes the latest onTimeOut closure', () => {
    const first = vi.fn();
    const second = vi.fn();
    const { rerender } = renderHook(
      ({ onTimeOut }) => useAutoSlide({ onTimeOut, shouldAutoPlaying: true }),
      { initialProps: { onTimeOut: first } },
    );

    rerender({ onTimeOut: second });

    act(() => {
      vi.advanceTimersByTime(AUTO_SLIDE_SPEED);
    });

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });

  it('toggles isAutoPlaying and stops advancing while paused', () => {
    const onTimeOut = vi.fn();
    const { result } = renderHook(() =>
      useAutoSlide({ onTimeOut, shouldAutoPlaying: true }),
    );

    expect(result.current.isAutoPlaying).toBe(true);

    act(() => {
      result.current.toggleAutoPlay();
    });

    expect(result.current.isAutoPlaying).toBe(false);

    act(() => {
      vi.advanceTimersByTime(AUTO_SLIDE_SPEED * 2);
    });

    expect(onTimeOut).not.toHaveBeenCalled();
  });

  it('clears the pending timer on unmount', () => {
    const onTimeOut = vi.fn();
    const { unmount } = renderHook(() =>
      useAutoSlide({ onTimeOut, shouldAutoPlaying: true }),
    );

    expect(vi.getTimerCount()).toBe(1);

    unmount();

    expect(vi.getTimerCount()).toBe(0);
  });
});
