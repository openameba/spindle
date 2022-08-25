import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { ManagedStack, StackPositionOffset } from '../StackNotificationManager';
import { CrossBold } from '../Icon';
import { IconButton } from '../IconButton';

type Position = keyof Pick<ManagedStack, 'topCenter' | 'bottomCenter'>;
type PositionOffset = {
  [K in keyof StackPositionOffset<'top' | 'bottom'>]?: StackPositionOffset[K];
};

type Variant = 'information' | 'confirmation' | 'error';

type Props = {
  children?: React.ReactNode;
  active?: boolean;
  offset?: PositionOffset;
  // milliseconds to hide
  duration?: number;
  onHide?: () => void;
  position?: Position;
  icon?: React.ReactNode;
  variant?: Variant;
  setContentHeight?: (height: number) => void;
  stackPosition?: number;
};

export const BLOCK_NAME = 'spui-Toast';

// Duration for css animation.
export const ANIMATION_DURATION = 300;

const MAX_DURATION = 4000;
const VERTICAL_GAP = 20;
const TOTAL_ANIMATION_DURATION = MAX_DURATION - ANIMATION_DURATION;

export const Toast: FC<Props> = ({
  children,
  active: _active,
  position = 'topCenter',
  offset: _offset = {},
  onHide,
  icon,
  variant = 'information',
  stackPosition = 0,
  setContentHeight,
}) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const offset: PositionOffset = {
    top: _offset.top ?? 24,
    bottom: _offset.bottom ?? 24,
  };
  const timeoutID = useRef<number | null>(null);
  const [clientHeight, setClientHeight] = useState(0);
  const [shouldAnimation, setShouldAnimation] = useState(false);
  const [active, setActive] = useState(false);

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
      setActive(false);
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
    if (isShow) {
      setShouldAnimation(true);
    }
    if (!active) {
      setShouldAnimation(false);
    }
  }, [active, isShow]);

  useEffect(() => {
    setIsShowWithTimeout();
    return resetTimeout;
  }, [setIsShowWithTimeout, resetTimeout]);

  useEffect(() => {
    if (_active) {
      setActive(true);
    }
    if (!_active && isShow) {
      setIsShow(false);
    }
  }, [_active, isShow]);

  useEffect(() => {
    setContentHeight?.(clientHeight + VERTICAL_GAP);
  }, [clientHeight]);

  const positionPrefix = position.startsWith('top') ? 'top' : 'bottom';
  const offsetPosition = offset[positionPrefix] || 0;
  const orderOffset = stackPosition + offsetPosition;

  return (
    <div
      style={{
        ['--Toast--initial-height' as string]: `${
          orderOffset - clientHeight + offsetPosition
        }px`,
        ['--Toast--order-offset-top' as string]: `${orderOffset}px`,
        ['--Toast--order-offset-bottom' as string]: `${-orderOffset}px`,
        ['--Toast--offset-top' as string]: `${offset.top}px`,
        ['--Toast--offset-bottom' as string]: `${offset.bottom}px`,
      }}
      className={[
        BLOCK_NAME,
        `${BLOCK_NAME}--${positionPrefix}`,
        shouldAnimation && `${BLOCK_NAME}--slide`,
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
