import { useCallback, useEffect, useMemo, useState } from 'react';
import { useAutoSlide } from './useAutoSlide';
import { useCarouselFocus } from './useCarouselFocus';
import { useSliderMoveEvent } from './useSliderMoveEvent';
import { useSliderTransition } from './useSliderTransition';
import { useValueRef } from './useValueRef';

type Payload<Item> = {
  items: Item[];
  itemLinkClassName: string;
};

const COPY_COUNT = 5;
const SWIPE_THRESHOLD_X = 20;

export function useAutoPlayCarousel<Item>({
  items,
  itemLinkClassName,
}: Payload<Item>) {
  const {
    diffXRef,
    diffYRef,
    setDiffX,
    setDiffY,
    setStartX,
    setStartY,
  } = useSliderMoveEvent();
  const [focusOffset, setFocusOffset] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isLinkClicked, setIsLinkClicked] = useState(false);
  const isHoveringRef = useValueRef(isHovering);
  const slideToNextRef = useValueRef(() => slideToNext());
  const itemCount = useMemo(() => items.length, [items]);
  const getIsCopiedItem = useCallback(
    (index: number) => {
      return index < COPY_COUNT || index >= itemCount + COPY_COUNT;
    },
    [itemCount],
  );
  const {
    isAutoPlaying,
    setIsAutoPlaying,
    resetAutoSlide,
    resetTimeOut,
    toggleAutoPlay,
  } = useAutoSlide({
    onTimeOut: slideToNextRef.current,
  });
  const { linkRefs, listRef } = useCarouselFocus({
    getIsCopiedItem,
    itemLinkClassName,
  });
  const isAutoPlayingRef = useValueRef(isAutoPlaying);
  const {
    currentIndexRef,
    handleTransitionEnd,
    listStyles,
    setCurrentIndex,
    setDisableAutoFocus,
    setDisableTransition,
  } = useSliderTransition({
    copyCount: COPY_COUNT,
    itemCount,
    isAutoPlaying,
    linkRefs,
  });

  const itemsToRender = useMemo(
    // generate copy contents on both ends to make carousel look like looping
    () => [
      ...items.slice(-COPY_COUNT),
      ...items,
      ...items.slice(0, COPY_COUNT),
    ],
    [items],
  );

  const slideToNext = (ignoreHover = false) => {
    const shouldSlideToNext =
      ((!isHoveringRef.current && isAutoPlayingRef.current) || ignoreHover) &&
      currentIndexRef.current <= itemCount;

    if (shouldSlideToNext) {
      setDisableTransition(false);
      setCurrentIndex(currentIndexRef.current + 1);
    }
    resetAutoSlide();
  };

  const slideToPrev = () => {
    if (currentIndexRef.current >= 0) {
      setDisableTransition(false);
      setCurrentIndex(currentIndexRef.current - 1);
    }
    resetAutoSlide();
  };

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

  const onMouseUp = () => {
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
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!e.touches.length) return;

    const touch = e.touches[0];

    resetTimeOut();
    handleMouseEnter();
    setStartX(touch.clientX);
    setStartY(touch.clientY);
  };

  const onTouchEnd = () => {
    setIsHovering(false);
    onMouseUp();
  };

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

    const { offsetLeft: newFocusOffset } = e.target;

    setFocusOffset(newFocusOffset);

    if (focusOffset === 0) {
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
    setIsAutoPlaying(true);
  };

  useEffect(() => {
    document.body.addEventListener('mouseup', onMouseUp);
    document.body.addEventListener('touchend', onTouchEnd);

    return () => {
      document.body.removeEventListener('mouseup', onMouseUp);
      document.body.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

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
  };
}
