import { useMemo, useState, MutableRefObject } from 'react';
import { useValueRef } from './useValueRef';

type Payload = {
  copyCount: number;
  itemCount: number;
  linkRefs: MutableRefObject<HTMLLinkElement[]>;
  isAutoPlaying: boolean;
};

export function useSliderTransition({
  copyCount,
  itemCount,
  linkRefs,
  isAutoPlaying,
}: Payload) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useValueRef(currentIndex);
  const [disableTransition, setDisableTransition] = useState(false);
  const [disableAutoFocus, setDisableAutoFocus] = useState(false);

  const listStyles = useMemo(() => {
    return {
      transition: disableTransition ? 'none' : '',
      transform: `translate3d(${
        -100 * (currentIndex + copyCount)
      }%, 0, 0) translateX(0)`,
    };
  }, [copyCount, currentIndex, disableTransition]);

  const handleTransitionEnd = () => {
    if (!isAutoPlaying && !disableAutoFocus) {
      linkRefs.current[currentIndex + copyCount].focus();
    }
    // if reach contents end, rewind without transition to make it look like looping
    setDisableTransition(true);
    setCurrentIndex((prev) => (prev + itemCount) % itemCount);
  };

  return {
    currentIndexRef,
    handleTransitionEnd,
    listStyles,
    setCurrentIndex,
    setDisableAutoFocus,
    setDisableTransition,
  };
}
