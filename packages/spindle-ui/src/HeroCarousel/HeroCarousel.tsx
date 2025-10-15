import { useCarousel } from '@openameba/spindle-hooks';
import React, { type FC } from 'react';
import ChevronLeftBold from '../Icon/ChevronLeftBold';
import ChevronRightBold from '../Icon/ChevronRightBold';
import Pause from '../Icon/Pause';
import PlayFill from '../Icon/PlayFill';
import type { CarouselItem } from './HeroCarouselItem';
import HeroCarouselItem from './HeroCarouselItem';

type Props = {
  carouselList: CarouselItem[];
  autoplay?: boolean;
};

const BLOCK_NAME = 'spui-HeroCarousel';
const ITEM_LINK_CLASS_NAME = 'js-auto-play-carousel-item-link';

export const HeroCarousel: FC<Props> = React.memo(function HeroCarousel({
  carouselList,
  autoplay = true,
}) {
  const {
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
  } = useCarousel({
    items: carouselList,
    itemLinkClassName: ITEM_LINK_CLASS_NAME,
    shouldAutoPlaying: autoplay,
  });

  if (carouselList.length === 0) {
    return null;
  }

  return (
    <div>
      <div
        className={`${BLOCK_NAME}-container`}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onMouseDown={handleMouseDown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTransitionEnd={handleTransitionEnd}
      >
        <ul
          aria-roledescription="カルーセル"
          className={`${BLOCK_NAME}-list`}
          ref={listRef}
          role="group"
          style={listStyles}
        >
          {itemsToRender.map((item: CarouselItem) => (
            <HeroCarouselItem
              carouselItem={item}
              isLinkClicked={isLinkClicked}
              itemLinkClassName={ITEM_LINK_CLASS_NAME}
              key={item.link}
            />
          ))}
        </ul>
      </div>

      <div className={`${BLOCK_NAME}-controls`}>
        <button
          aria-label="1つ前のアイテムに移動"
          className={`${BLOCK_NAME}-control ${BLOCK_NAME}-control--prev`}
          type="button"
          onClick={handleSlideToPrev}
        >
          <ChevronLeftBold aria-hidden={true} />
        </button>
        <button
          aria-label={isAutoPlaying ? 'スライドを停止' : 'スライドを再生'}
          className={`${BLOCK_NAME}-control`}
          type="button"
          onClick={toggleAutoPlay}
        >
          {isAutoPlaying ? (
            <Pause aria-hidden={true} />
          ) : (
            <PlayFill aria-hidden={true} />
          )}
        </button>
        <button
          aria-label="1つ後ろのアイテムに移動"
          className={`${BLOCK_NAME}-control ${BLOCK_NAME}-control--next`}
          type="button"
          onClick={handleSlideToNext}
        >
          <ChevronRightBold aria-hidden={true} />
        </button>
      </div>
    </div>
  );
});
