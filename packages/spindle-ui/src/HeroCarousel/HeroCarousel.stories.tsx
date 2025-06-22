import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { HeroCarousel } from './HeroCarousel';

const meta: Meta<typeof HeroCarousel> = {
  title: 'HeroCarousel',
  component: HeroCarousel,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  render: () => <HeroCarousel carouselList={carouselList} />,
};
