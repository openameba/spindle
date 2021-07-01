import React, { useCallback, useEffect, useRef, useState } from 'react';

type Position = 'top' | 'bottom';
type Animation = 'slide' | 'fade';

type Props = {
  children?: React.ReactNode;
  active?: boolean;
  // milliseconds to hide
  duration?: number;
  onHide?: () => void;
  position?: Position;
  animation?: Animation;
  hasError?: boolean;
};

export const BLOCK_NAME = 'spui-Toast';

// Duration for css animation.
export const ANIMATION_DURATION = 500;

const MIN_DURATION = 4000;
const MAX_DURATION = 100000;

const getAnimationClassName = (
  isShow: boolean,
  animation: Animation,
): string => {
  return isShow ? `${BLOCK_NAME}-${animation}--in` : '';
};

const limitDuration = (duration: number) => {
  if (duration < MIN_DURATION || duration > MAX_DURATION) {
    return MIN_DURATION;
  }
  return duration;
};

export const Toast = ({
  children,
  active = false,
  duration = 4000,
  animation = 'slide',
  position = 'top',
  hasError = false,
  onHide,
}: Props): React.ReactElement => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const animationClassName = getAnimationClassName(isShow, animation);
  const errorContentClassName = hasError ? `${BLOCK_NAME}-content--error` : '';
  const formattedDuration = limitDuration(duration) - ANIMATION_DURATION;
  const timeoutID = useRef<number | null>(null);
  const transitionElementRef = useRef<HTMLDivElement | null>(null);

  const setIsShowWithTimeout = useCallback(() => {
    // Out animation is executed after `formattedDuration` seconds.
    if (timeoutID.current === null && isShow) {
      timeoutID.current = window.setTimeout(() => {
        setIsShow(false);
      }, formattedDuration);
    }
  }, [isShow, timeoutID, setIsShow, formattedDuration]);

  const resetTimeout = useCallback(() => {
    if (timeoutID.current) {
      window.clearTimeout(timeoutID.current);
      timeoutID.current = null;
    }
  }, [timeoutID]);

  const handleTransitionEnd = useCallback(() => {
    if (onHide && !isShow) {
      onHide();
      timeoutID.current = null;
    }
  }, [isShow, setIsShow, onHide]);

  useEffect(() => {
    // Animation is not stopped even if `active` props is changed while running animation.
    if (active && timeoutID.current === null) {
      setIsShow(true);
    }
  }, [active]);

  useEffect(() => {
    setIsShowWithTimeout();
    return resetTimeout;
  }, [setIsShowWithTimeout, resetTimeout]);

  useEffect(() => {
    const transitionElement = transitionElementRef.current;

    // When out animation is finished, `onHide` method is invoked.
    if (transitionElement) {
      transitionElement.addEventListener('transitionend', handleTransitionEnd);
    }

    return () => {
      if (transitionElement) {
        transitionElement.removeEventListener(
          'transitionend',
          handleTransitionEnd,
        );
      }
    };
  }, [transitionElementRef, handleTransitionEnd]);

  return (
    <div
      className={`${BLOCK_NAME} ${BLOCK_NAME}--${position} ${BLOCK_NAME}--${animation} ${animationClassName}`}
      ref={transitionElementRef}
    >
      <div
        className={`${BLOCK_NAME}--content ${errorContentClassName}`}
        tabIndex={0}
        onMouseOver={resetTimeout}
        onMouseOut={setIsShowWithTimeout}
        onFocus={resetTimeout}
        onBlur={setIsShowWithTimeout}
      >
        {children}
      </div>
    </div>
  );
};
