import { useCallback, useEffect, useMemo, useState } from 'react';
import { useAutoSlide } from './useAutoSlide';
import { useCarouselFocus } from './useCarouselFocus';
import { useSliderMoveEvent } from './useSliderMoveEvent';
import { useSliderTransition } from './useSliderTransition';
import { useValueRef } from './useValueRef';

type Payload<Item> = {
  items: Item[];
  itemLinkClassName: string;
  shouldAutoPlaying?: boolean;
  displayCount?: number;
};

const SWIPE_THRESHOLD_X = 20;

export function useCarousel<Item>({
  items,
  itemLinkClassName,
  shouldAutoPlaying,
  displayCount = 5,
}: Payload<Item>) {
  const { diffXRef, diffYRef, setDiffX, setDiffY, setStartX, setStartY } =
    useSliderMoveEvent();
  const [focusOffset, setFocusOffset] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isLinkClicked, setIsLinkClicked] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const isHoveringRef = useValueRef(isHovering);
  const slideToNextRef = useValueRef(() => slideToNext());
  const itemCount = useMemo(() => items.length, [items]);
  const getIsCopiedItem = useCallback(
    (index: number) => {
      return index < displayCount || index >= itemCount + displayCount;
    },
    [displayCount, itemCount],
  );
  const {
    isAutoPlaying,
    setIsAutoPlaying,
    resetAutoSlide,
    resetTimeOut,
    toggleAutoPlay,
  } = useAutoSlide({
    onTimeOut: slideToNextRef.current,
    shouldAutoPlaying,
  });
  const { linkRefs, listRef } = useCarouselFocus({
    getIsCopiedItem,
    itemLinkClassName,
  });
  const isAutoPlayingRef = useValueRef(isAutoPlaying);
  const {
    currentIndexRef,
    currentIndex,
    handleTransitionEnd,
    listStyles,
    disableTransition,
    setCurrentIndex,
    setDisableAutoFocus,
    setDisableTransition,
  } = useSliderTransition({
    copyCount: displayCount,
    itemCount,
    isAutoPlaying,
    isFocus,
    linkRefs,
  });

  const itemsToRender = useMemo(
    // generate copy contents on both ends to make carousel look like looping
    () => [
      ...items.slice(-displayCount),
      ...items,
      ...items.slice(0, displayCount),
    ],
    [displayCount, items],
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: Refs are used for mutable values that don't trigger re-renders
  const slideToNext = useCallback((ignoreHover = false) => {
    const shouldSlideToNext =
      ((!isHoveringRef.current && isAutoPlayingRef.current) || ignoreHover) &&
      currentIndexRef.current <= itemCount;

    if (shouldSlideToNext) {
      setIsFocus(false);
      setDisableTransition(false);
      setCurrentIndex(currentIndexRef.current + 1);
    }
    resetAutoSlide();
  }, [itemCount, resetAutoSlide]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: Refs are used for mutable values that don't trigger re-renders
  const slideToPrev = useCallback(() => {
    if (currentIndexRef.current >= 0) {
      setIsFocus(false);
      setDisableTransition(false);
      setCurrentIndex(currentIndexRef.current - 1);
    }
    resetAutoSlide();
  }, [resetAutoSlide]);

  const handleMouseEnter = () => setIsHovering(true);

  const handleMouseLeave = () => {
    setIsHovering(false);
    resetAutoSlide();
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    resetTimeOut();
    setStartX(e.clientX);
    setStartY(e.clientY);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: Refs are used for mutable values that don't trigger re-renders
  const onMouseUp = useCallback(() => {
    if (diffXRef.current > SWIPE_THRESHOLD_X) {
      setIsLinkClicked(false);
      setIsAutoPlaying(false);
      slideToPrev();
    }
    if (diffXRef.current < -SWIPE_THRESHOLD_X) {
      setIsLinkClicked(false);
      setIsAutoPlaying(false);
      slideToNext(true);
    }
    if (diffXRef.current === 0 && diffYRef.current === 0) {
      setIsLinkClicked(true);
    }

    setStartX(null);
    setStartY(null);
    setDiffX(0);
    setDiffY(0);
  }, [slideToPrev, slideToNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!e.touches.length) return;

    const touch = e.touches[0];

    resetTimeOut();
    handleMouseEnter();
    setStartX(touch.clientX);
    setStartY(touch.clientY);
  };

  const onTouchEnd = useCallback(() => {
    setIsHovering(false);
    onMouseUp();
  }, [onMouseUp]);

  const handleSlideToPrev = () => {
    resetTimeOut();
    setIsAutoPlaying(false);
    slideToPrev();
  };

  const handleSlideToNext = () => {
    resetTimeOut();
    setIsAutoPlaying(false);
    slideToNext(true);
  };

  const handleFocus = (e: React.FocusEvent<HTMLDivElement>) => {
    setIsAutoPlaying(false);
    setIsFocus(true);

    const { offsetLeft: newFocusOffset } = e.target;

    setFocusOffset(newFocusOffset);

    if (focusOffset === 0 || disableTransition) {
      setDisableTransition(false);
      return;
    }

    setDisableAutoFocus(true);

    if (isHovering && diffXRef.current === 0 && diffYRef.current === 0) {
      setIsLinkClicked(true);
      return;
    }
    if (focusOffset > newFocusOffset) {
      setDisableTransition(false);
      setCurrentIndex(currentIndexRef.current - 1);
    }
    if (focusOffset < newFocusOffset) {
      setDisableTransition(false);
      setCurrentIndex(currentIndexRef.current + 1);
    }
  };

  const handleBlur = () => {
    if (shouldAutoPlaying) {
      setIsAutoPlaying(true);
    }
    setDisableAutoFocus(false);
  };

  useEffect(() => {
    document.body.addEventListener('mouseup', onMouseUp);
    document.body.addEventListener('touchend', onTouchEnd);

    return () => {
      document.body.removeEventListener('mouseup', onMouseUp);
      document.body.removeEventListener('touchend', onTouchEnd);
    };
  }, [onMouseUp, onTouchEnd]);

  return {
    handleSlideToPrev,
    handleSlideToNext,
    handleMouseEnter,
    handleMouseDown,
    handleMouseLeave,
    handleTouchStart,
    handleTransitionEnd,
    isAutoPlaying,
    isLinkClicked,
    itemsToRender,
    listRef,
    listStyles,
    toggleAutoPlay,
    handleFocus,
    handleBlur,
    currentIndex,
    disableTransition,
  };
}
