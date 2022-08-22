import React, { useCallback, useEffect, useRef, useState } from 'react';
import { CrossBold } from '../Icon';
import { IconButton } from '../IconButton';

type Position = 'top' | 'bottom';
type PositionOffset = {
  [K in Position]?: number;
};

type Variant = 'information' | 'confirmation' | 'error';

type Props = {
  children?: React.ReactNode;
  active?: boolean;
  order?: number;
  offset?: PositionOffset;
  // milliseconds to hide
  duration?: number;
  onHide?: () => void;
  position?: Position;
  icon?: React.ReactNode;
  variant?: Variant;
};

export const BLOCK_NAME = 'spui-Toast';

// Duration for css animation.
export const ANIMATION_DURATION = 300;

const MAX_DURATION = 4000;
const VERTICAL_GAP = 20;
const TOTAL_ANIMATION_DURATION = MAX_DURATION - ANIMATION_DURATION;

export const Toast = ({
  children,
  active = false,
  position = 'top',
  order = 0,
  offset: _offset = {},
  onHide,
  icon,
  variant = 'information',
}: Props): React.ReactElement => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const offset: PositionOffset = {
    top: _offset.top || 24,
    bottom: _offset.bottom || 24,
  };
  const timeoutID = useRef<number | null>(null);
  const [clientHeight, setClientHeight] = useState(0);

  const setIsShowWithTimeout = useCallback(() => {
    // Out animation is executed after `TOTAL_ANIMATION_DURATION` seconds.
    if (timeoutID.current === null && isShow) {
      timeoutID.current = window.setTimeout(() => {
        setIsShow(false);
      }, TOTAL_ANIMATION_DURATION);
    }
  }, [isShow, timeoutID, setIsShow]);

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
  }, [isShow, onHide]);

  const handleOnClickCloseButton = useCallback(() => {
    setIsShow(false);
  }, []);

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

  const contentHeight = clientHeight;
  const offsetPosition = offset[position] || 0;
  const orderOffset = order * (contentHeight + VERTICAL_GAP) + offsetPosition;

  return (
    <div
      style={{
        ['--Toast--initial-height' as string]: `${
          orderOffset - contentHeight + offsetPosition
        }px`,
        ['--Toast--order-offset-top' as string]: `${orderOffset}px`,
        ['--Toast--order-offset-bottom' as string]: `${-orderOffset}px`,
        ['--Toast--offset-top' as string]: `${offset.top}px`,
        ['--Toast--offset-bottom' as string]: `${offset.bottom}px`,
      }}
      className={[
        BLOCK_NAME,
        `${BLOCK_NAME}--${position}`,
        `${BLOCK_NAME}--slide`,
        isShow && `${BLOCK_NAME}-slide--in`,
        !active && `${BLOCK_NAME}--hidden`,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-hidden={!active}
      onTransitionEnd={handleTransitionEnd}
      ref={(ref) => setClientHeight(ref?.clientHeight || 0)}
    >
      <div
        className={`${BLOCK_NAME}-content ${BLOCK_NAME}-content--${variant}`}
        onMouseOver={resetTimeout}
        onMouseOut={setIsShowWithTimeout}
        onFocus={resetTimeout}
        onBlur={setIsShowWithTimeout}
      >
        {icon && <div className={`${BLOCK_NAME}-contentInfo`}>{icon}</div>}
        <span className={`${BLOCK_NAME}-contentText`}>{children}</span>
        <div
          className={`${BLOCK_NAME}-iconButton ${BLOCK_NAME}-iconButton--${variant}`}
          onTransitionEnd={(e) => e.stopPropagation()}
        >
          <IconButton
            size="exSmall"
            variant="neutral"
            onClick={handleOnClickCloseButton}
          >
            <CrossBold aria-label="閉じる" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
