import { useCallback, useEffect, useState } from 'react';

const AUTO_SLIDE_SPEED = 4000; // ms

type Payload = {
  onTimeOut: () => void;
  shouldAutoPlaying?: boolean;
};

export function useAutoSlide({ onTimeOut, shouldAutoPlaying = true }: Payload) {
  const [isAutoPlaying, setIsAutoPlaying] = useState(shouldAutoPlaying);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const resetTimeOut = useCallback(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }, [timeoutId]);

  const activateAutoSlide = useCallback(() => {
    resetTimeOut();

    const newTimeoutId = setTimeout(() => {
      onTimeOut();
    }, AUTO_SLIDE_SPEED);

    setTimeoutId(newTimeoutId);
  }, [resetTimeOut, onTimeOut]);

  const resetAutoSlide = () => {
    if (isAutoPlaying) {
      activateAutoSlide();
    }
  };

  const toggleAutoPlay = () => {
    resetTimeOut();

    if (!isAutoPlaying) {
      activateAutoSlide();
    }
    setIsAutoPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (shouldAutoPlaying) {
      activateAutoSlide();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    isAutoPlaying,
    setIsAutoPlaying,
    resetAutoSlide,
    resetTimeOut,
    toggleAutoPlay,
  };
}
