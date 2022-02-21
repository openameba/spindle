import { useCallback, useEffect, useState } from 'react';

const AUTO_SLIDE_SPEED = 4000; // ms

type Payload = {
  onTimeOut: () => void;
};

export function useAutoSlide({ onTimeOut }: Payload) {
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const resetTimeOut = useCallback(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }, [timeoutId]);

  const activateAutoSlide = () => {
    resetTimeOut();

    const newTimeoutId = setTimeout(() => {
      onTimeOut();
    }, AUTO_SLIDE_SPEED);

    setTimeoutId(newTimeoutId);
  };

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
    activateAutoSlide();
  }, []);

  return {
    isAutoPlaying,
    setIsAutoPlaying,
    resetAutoSlide,
    resetTimeOut,
    toggleAutoPlay,
  };
}
