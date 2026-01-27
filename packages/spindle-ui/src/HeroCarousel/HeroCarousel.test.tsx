import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { vi } from 'vitest';

vi.mock('@openameba/spindle-hooks', () => {
  const React = require('react');
  return {
    useCarousel: ({
      items,
      shouldAutoPlaying,
    }: {
      items: unknown[];
      shouldAutoPlaying?: boolean;
    }) => {
      const [isAutoPlaying, setIsAutoPlaying] = React.useState(
        !!shouldAutoPlaying,
      );
      const toggleAutoPlay = () => setIsAutoPlaying((prev: boolean) => !prev);
      const handleFocus = () => setIsAutoPlaying(false);
      const handleBlur = () => setIsAutoPlaying(!!shouldAutoPlaying);
      return {
        handleSlideToPrev: () => {},
        handleSlideToNext: () => {},
        handleMouseEnter: () => {},
        handleMouseDown: () => {},
        handleMouseLeave: () => {},
        handleTouchStart: () => {},
        handleTransitionEnd: () => {},
        handleFocus,
        handleBlur,
        isAutoPlaying,
        isLinkClicked: true,
        itemsToRender: items,
        listRef: { current: null },
        listStyles: {},
        toggleAutoPlay,
      };
    },
  };
});

import { HeroCarousel } from './HeroCarousel';

type CarouselItem = {
  imageUrl: string;
  link: string;
  title: string;
};

const carouselList: CarouselItem[] = [
  {
    title: '1. 生きたコンテンツをつむぐ',
    imageUrl: 'https://example.com/1.webp',
    link: 'https://example.com/1',
  },
  {
    title: '2. 長期間続けるためのシステム開発',
    imageUrl: 'https://example.com/2.webp',
    link: 'https://example.com/2',
  },
  {
    title: '3.「Spindle」成立の軌跡',
    imageUrl: 'https://example.com/3.webp',
    link: 'https://example.com/3',
  },
];

describe('<HeroCarousel />', () => {
  test('Should render region landmark with aria-label and list with aria-roledescription', () => {
    render(<HeroCarousel carouselList={carouselList} autoplay={false} />);
    expect(
      screen.getByRole('region', { name: 'カルーセル' }),
    ).toBeInTheDocument();

    const list = screen.getByRole('list');
    expect(list).toHaveAttribute('aria-roledescription', 'カルーセル');
  });

  test('Links are named by item titles', () => {
    render(<HeroCarousel carouselList={carouselList} autoplay={false} />);
    for (const item of carouselList) {
      expect(
        screen.getByRole('link', { name: item.title }),
      ).toBeInTheDocument();
    }
  });

  test('Play or Pause button label toggles', async () => {
    const user = userEvent.setup();
    render(<HeroCarousel carouselList={carouselList} autoplay={false} />);

    const playPauseButton = screen.getByRole('button', {
      name: 'スライドを再生',
    });
    await user.click(playPauseButton);

    expect(
      screen.getByRole('button', { name: 'スライドを停止' }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'スライドを停止' }));
    expect(
      screen.getByRole('button', { name: 'スライドを再生' }),
    ).toBeInTheDocument();
  });

  test('Autoplay stops when a child receives focus', async () => {
    const user = userEvent.setup();
    render(<HeroCarousel carouselList={carouselList} autoplay={true} />);

    expect(
      screen.getByRole('button', { name: 'スライドを停止' }),
    ).toBeInTheDocument();

    await user.tab();
    const firstLink = screen.getByRole('link', { name: carouselList[0].title });
    expect(firstLink).toHaveFocus();

    expect(
      screen.getByRole('button', { name: 'スライドを再生' }),
    ).toBeInTheDocument();
  });

  test('Should not render when carouselList is empty', () => {
    const { container } = render(
      <HeroCarousel carouselList={[]} autoplay={false} />,
    );
    expect(container.firstChild).toBeNull();
  });
});
