import type { Meta, StoryObj } from '@storybook/react';
import { Rating } from './Rating';

const meta: Meta<typeof Rating> = {
  title: 'Rating',
  component: Rating,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Max5Value0: Story = {
  args: {
    max: 5,
    value: 0,
    size: 'medium',
  },
};

export const Max5Value35: Story = {
  args: {
    max: 5,
    value: 3.5,
    size: 'medium',
  },
};

export const Max5Value5: Story = {
  args: {
    max: 5,
    value: 5,
    size: 'medium',
  },
};

export const Max5Value3SmallSize: Story = {
  args: {
    max: 5,
    value: 3,
    size: 'small',
  },
};

export const Max5Value3MediumSize: Story = {
  args: {
    max: 5,
    value: 3,
    size: 'medium',
  },
};

export const Max5Value3LargeSize: Story = {
  args: {
    max: 5,
    value: 3,
    size: 'large',
  },
};

export const ShowTextSmallSize: Story = {
  args: {
    max: 5,
    value: 3,
    size: 'small',
    showText: true,
  },
};

export const ShowTextMediumSize: Story = {
  args: {
    max: 5,
    value: 3,
    size: 'medium',
    showText: true,
  },
};

export const ShowTextLargeSize: Story = {
  args: {
    max: 5,
    value: 3,
    size: 'large',
    showText: true,
  },
};
