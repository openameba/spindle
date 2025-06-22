import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { TextButton } from './TextButton';
import { ChevronRightBold, PencilAdd } from '../Icon';

const meta: Meta<typeof TextButton> = {
  title: 'TextButton',
  component: TextButton,
  args: {
    onClick: action('clicked'),
    onMouseOver: action('action'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  render: () => <TextButton>もっと見る</TextButton>,
};

export const NormalDisabled: Story = {
  render: () => <TextButton disabled>もっと見る</TextButton>,
};

export const NormalWithIcon: Story = {
  render: () => (
    <TextButton icon={<PencilAdd aria-hidden="true" />} iconPosition="start">
      ブログを書く
    </TextButton>
  ),
};

export const NormalWithIconDisabled: Story = {
  render: () => (
    <TextButton
      icon={<PencilAdd aria-hidden="true" />}
      iconPosition="start"
      disabled
    >
      ブログを書く
    </TextButton>
  ),
};

export const Subtle: Story = {
  render: () => <TextButton variant="subtle">もっと見る</TextButton>,
};

export const SubtleDisabled: Story = {
  render: () => (
    <TextButton variant="subtle" disabled>
      もっと見る
    </TextButton>
  ),
};

export const SubtleWithIcon: Story = {
  render: () => (
    <TextButton
      variant="subtle"
      icon={<ChevronRightBold aria-hidden="true" />}
      iconPosition="end"
    >
      もっと見る
    </TextButton>
  ),
};

export const SubtleWithIconDisabled: Story = {
  render: () => (
    <TextButton
      variant="subtle"
      icon={<ChevronRightBold aria-hidden="true" />}
      iconPosition="end"
      disabled
    >
      もっと見る
    </TextButton>
  ),
};

export const UnderlineHover: Story = {
  render: () => <TextButton underline="hover">もっと見る</TextButton>,
};

export const UnderlineHoverDisabled: Story = {
  render: () => (
    <TextButton underline="hover" disabled>
      もっと見る
    </TextButton>
  ),
};
