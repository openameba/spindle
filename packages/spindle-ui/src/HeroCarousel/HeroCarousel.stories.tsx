import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { HeroCarousel } from './HeroCarousel';
import type { CarouselItem } from './HeroCarouselItem';

const meta: Meta<typeof HeroCarousel> = {
  title: 'HeroCarousel',
};

export default meta;
type Story = StoryObj<typeof meta>;

const carouselList: CarouselItem[] = [
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

export const Normal: Story = {
  render: () => <HeroCarousel carouselList={carouselList} autoplay={false} />,
};
