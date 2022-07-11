import { useMemo, useState, MutableRefObject } from 'react';
import { useFlushSync } from '../internal/useFlushSync';
import { useValueRef } from './useValueRef';

type Payload = {
  copyCount: number;
  itemCount: number;
  linkRefs: MutableRefObject<HTMLLinkElement[]>;
  isAutoPlaying: boolean;
  isFocus: boolean;
};

export function useSliderTransition({
  copyCount,
  itemCount,
  linkRefs,
  isAutoPlaying,
  isFocus,
}: Payload) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useValueRef(currentIndex);
  const [disableTransition, setDisableTransition] = useState(false);
  const [disableAutoFocus, setDisableAutoFocus] = useState(false);
  const flushSync = useFlushSync();

  const listStyles = useMemo(() => {
    const transitionStyle = disableTransition ? { transition: 'none' } : {};
    return {
      ...transitionStyle,
      transform: `translate3d(${
        -100 * (currentIndex + copyCount)
      }%, 0, 0) translateX(0)`,
    };
  }, [copyCount, currentIndex, disableTransition]);

  const handleTransitionEnd = () => {
    // if reach contents end, rewind without transition to make it look like looping
    if (!isFocus) {
      flushSync(() => {
        setDisableTransition(true);
      });
      flushSync(() => {
        setCurrentIndex((prev) => (prev + itemCount) % itemCount);
      });
      if (!isAutoPlaying && !disableAutoFocus) {
        linkRefs.current[
          ((currentIndex + itemCount) % itemCount) + copyCount
        ].focus();
      }
    }
  };

  return {
    currentIndexRef,
    currentIndex,
    handleTransitionEnd,
    listStyles,
    setCurrentIndex,
    setDisableAutoFocus,
    disableTransition,
    setDisableTransition,
  };
}
