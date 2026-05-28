import { render } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';
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

// useCarousel clones items at both ends to make the list look like a loop,
// so the same `link` appears at multiple positions. This test runs against
// the real hook (no mock) to catch React key collisions.
describe('<HeroCarousel /> key uniqueness', () => {
  test('does not warn about duplicated keys when items are cloned by useCarousel', () => {
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    render(<HeroCarousel carouselList={carouselList} autoplay={false} />);

    const duplicatedKeyWarning = consoleErrorSpy.mock.calls.find(([msg]) =>
      typeof msg === 'string'
        ? msg.includes('two children with the same key')
        : false,
    );
    expect(duplicatedKeyWarning).toBeUndefined();

    consoleErrorSpy.mockRestore();
  });
});
