import type { Meta, StoryObj } from '@storybook/react';
import React, { useCallback } from 'react';
import { useCarousel } from './useCarousel';

const ITEM_LINK_CLASS_NAME = 'js-auto-play-carousel-item-link';

const carouselList = [
  {
    title: '1. 生きたコンテンツをつむぐ',
    imageUrl:
      'https://images.microcms-assets.io/assets/24995dc41d5c40808fe4a9e3f6fb2b20/e2526e7bfa494168a2e547cfe55ac89f/top_mv.jpg?w=640&h=336&fit=crop&fm=webp&q=85',
    link: 'https://about.ameba.jp/',
  },
  {
    title: '2. 長期間続けるためのシステム開発',
    imageUrl:
      'https://images.microcms-assets.io/assets/24995dc41d5c40808fe4a9e3f6fb2b20/8582f4d2842741f78a7d8496019a2be2/team_article_003_cover.png?w=640&h=336&fm=webp&q=85',
    link: 'https://about.ameba.jp/contents/czriiu_tv/',
  },
  {
    title: '3.「Spindle」成立の軌跡',
    imageUrl:
      'https://images.microcms-assets.io/assets/24995dc41d5c40808fe4a9e3f6fb2b20/eb868ea0d6af41aaaff3091b7c1d4cfb/team_article_002_cover.png?w=640&h=336&fm=webp&q=85',
    link: 'https://about.ameba.jp/contents/ed88wdx61mf1/',
  },
  {
    title: '4. ブロガーを応援しよう',
    imageUrl:
      'https://ssl-stat.amebame.com/pub/ads/adx/a1ea86ff-7ba6-4155-b8e5-a89c67cd1292.png?size=640',
    link: 'https://cheering.ameba.jp/feature',
  },
  {
    title: '5.「人」や「文化」をご紹介',
    imageUrl:
      'https://images.microcms-assets.io/assets/24995dc41d5c40808fe4a9e3f6fb2b20/2ed4baaeb1b24a0096bef49b087fbe38/team_article_004__cover%402x.jpg?w=640&h=336&fit=crop&fm=webp&q=85',
    link: 'https://about.ameba.jp/team/',
  },
];

const HeroCarouselItem: React.FC<{
  carouselItem: { title: string; imageUrl: string; link: string };
  isLinkClicked: boolean;
  itemLinkClassName: string;
}> = ({ carouselItem, isLinkClicked, itemLinkClassName }) => {
  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!isLinkClicked) {
        e.preventDefault();
      }
    },
    [isLinkClicked],
  );
  return (
    <li style={{ width: '44vw', padding: '0 0.44em' }}>
      <a
        className={itemLinkClassName}
        style={{
          display: 'inline-block',
          width: '44vw',
          textAlign: 'center',
        }}
        href={carouselItem.link}
        onClick={handleLinkClick}
      >
        <span>
          <img
            alt=""
            style={{
              height: '30em',
              width: '100%',
              background: '#eee',
              objectFit: 'cover' as const,
            }}
            src={carouselItem.imageUrl}
          />
        </span>
        <div>
          <p style={{ fontWeight: 'bold' }}>{carouselItem.title}</p>
        </div>
      </a>
    </li>
  );
};

const HeroCarousel = () => {
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
    shouldAutoPlaying: false,
    displayCount: 3,
  });
  if (carouselList.length === 0) {
    return null;
  }
  return (
    <div>
      {/* biome-ignore lint/a11y/noStaticElementInteractions: Carousel container with complex touch/mouse interactions */}
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          overflow: 'hidden',
          justifyContent: 'center',
        }}
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
          ref={listRef}
          role="group"
          style={{
            display: 'flex',
            marginRight: '0.88em',
            padding: '0 0.44em',
            listStyle: 'none',
            width: '44vw',
            transition: 'transform 0.8s ease-out',
            ...listStyles,
          }}
        >
          {itemsToRender.map((item, index) => (
            <HeroCarouselItem
              carouselItem={item}
              isLinkClicked={isLinkClicked}
              itemLinkClassName={ITEM_LINK_CLASS_NAME}
              // biome-ignore lint/suspicious/noArrayIndexKey: Carousel items have fixed order
              key={`hero-carousel-${index}`}
            />
          ))}
        </ul>
      </div>
      <div>
        <button type="button" onClick={handleSlideToPrev}>
          前へ
        </button>
        <button type="button" onClick={toggleAutoPlay}>
          {isAutoPlaying ? '停止' : '再生'}
        </button>
        <button type="button" onClick={handleSlideToNext}>
          次へ
        </button>
      </div>
    </div>
  );
};

const meta: Meta<typeof HeroCarousel> = {
  title: 'useCarousel',
  component: HeroCarousel,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};
