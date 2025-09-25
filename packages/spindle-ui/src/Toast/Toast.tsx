import React, { type FC } from 'react';
import CrossBold from '../Icon/CrossBold';
import { IconButton } from '../IconButton';
import {
  type ManagedStack,
  useStackNotificationComponent,
} from '../StackNotificationManager';
import type { StackNotificationComponentProps } from '../StackNotificationManager/StackNotificationManager';

type Position = keyof Pick<ManagedStack, 'topCenter' | 'bottomCenter'>;

type Variant = 'information' | 'confirmation' | 'error';

type Props = StackNotificationComponentProps<
  {
    children?: React.ReactNode;
    active?: boolean;
    // milliseconds to hide
    duration?: number;
    onHide?: () => void;
    icon?: React.ReactNode;
    variant?: Variant;
  },
  Position
>;

export const BLOCK_NAME = 'spui-Toast';

// Duration for css animation.
export const ANIMATION_DURATION = 300;

const MAX_DURATION = 4000;
export const DISPLAYING_TIMEOUT_DURATION = MAX_DURATION - ANIMATION_DURATION;

export const Toast: FC<Props> = ({
  children,
  active: _active,
  position: _position = 'topCenter',
  offset: _offset = {},
  onHide,
  icon,
  variant = 'information',
  stackPosition = 0,
  setContentHeight,
}) => {
  const {
    isShow,
    active,
    shouldAnimation,
    position,
    orderOffset,
    offset,
    initialHeight,
    focusEvent: { setIsShowWithTimeout, resetTimeout },
    setClientHeight,
    handleTransitionEnd,
    handleOnClickCloseButton,
  } = useStackNotificationComponent<Position>({
    active: _active,
    position: _position,
    offset: _offset,
    onHide,
    stackPosition,
    setContentHeight,
    displayingTimeout: DISPLAYING_TIMEOUT_DURATION,
  });

  return (
    <div
      style={{
        ['--Toast--initial-height' as string]: `${
          initialHeight[position.vertical]
        }px`,
        ['--Toast--order-offset-top' as string]: `${
          orderOffset[position.vertical]
        }px`,
        ['--Toast--order-offset-bottom' as string]: `${-orderOffset[
          position.vertical
        ]}px`,
        ['--Toast--offset-top' as string]: `${offset.top}px`,
        ['--Toast--offset-bottom' as string]: `${offset.bottom}px`,
      }}
      className={[
        BLOCK_NAME,
        `${BLOCK_NAME}--${position.vertical}`,
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
        role="status"
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
