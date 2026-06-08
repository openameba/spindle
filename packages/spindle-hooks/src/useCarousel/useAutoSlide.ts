import { useCallback, useEffect, useRef, useState } from 'react';

const AUTO_SLIDE_SPEED = 4000; // ms

type Payload = {
  onTimeOut: () => void;
  shouldAutoPlaying?: boolean;
};

export function useAutoSlide({ onTimeOut, shouldAutoPlaying = true }: Payload) {
  const [isAutoPlaying, setIsAutoPlaying] = useState(shouldAutoPlaying);

  // Hold the timer id in a ref so setting it neither triggers a re-render nor
  // invalidates the callbacks below, which would otherwise re-run the mount
  // effect on every commit and cause an infinite update loop.
  const timeoutIdRef = useRef<number | null>(null);

  // `onTimeOut` is a fresh closure on every render; read it through a ref so
  // callbacks can call the latest one while keeping a stable identity.
  const onTimeOutRef = useRef(onTimeOut);
  useEffect(() => {
    onTimeOutRef.current = onTimeOut;
  }, [onTimeOut]);

  const resetTimeOut = useCallback(() => {
    if (timeoutIdRef.current != null) {
      window.clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = null;
    }
  }, []);

  const activateAutoSlide = useCallback(() => {
    resetTimeOut();

    timeoutIdRef.current = window.setTimeout(() => {
      onTimeOutRef.current();
    }, AUTO_SLIDE_SPEED);
  }, [resetTimeOut]);

  const resetAutoSlide = useCallback(() => {
    if (isAutoPlaying) {
      activateAutoSlide();
    }
  }, [isAutoPlaying, activateAutoSlide]);

  const toggleAutoPlay = useCallback(() => {
    resetTimeOut();

    if (!isAutoPlaying) {
      activateAutoSlide();
    }
    setIsAutoPlaying((prev) => !prev);
  }, [isAutoPlaying, resetTimeOut, activateAutoSlide]);

  useEffect(() => {
    if (shouldAutoPlaying) {
      activateAutoSlide();
    }
    return () => resetTimeOut();
  }, [shouldAutoPlaying, activateAutoSlide, resetTimeOut]);

  return {
    isAutoPlaying,
    setIsAutoPlaying,
    resetAutoSlide,
    resetTimeOut,
    toggleAutoPlay,
  };
}
