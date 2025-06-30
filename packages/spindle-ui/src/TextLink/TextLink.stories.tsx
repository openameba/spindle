import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { TextLink } from './TextLink';
import { ChevronRightBold, PencilAdd } from '../Icon';

const meta: Meta<typeof TextLink> = {
  title: 'TextLink',
  component: TextLink,
  args: {
    onClick: action('clicked'),
    onMouseOver: action('action'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  render: () => <TextLink href="#">もっと見る</TextLink>,
};

export const NormalWithIcon: Story = {
  render: () => (
    <TextLink
      href="#"
      icon={<PencilAdd aria-hidden="true" />}
      iconPosition="start"
    >
      ブログを書く
    </TextLink>
  ),
};

export const Subtle: Story = {
  render: () => (
    <TextLink href="#" variant="subtle">
      もっと見る
    </TextLink>
  ),
};

export const SubtleWithIcon: Story = {
  render: () => (
    <TextLink
      href="#"
      variant="subtle"
      icon={<ChevronRightBold aria-hidden="true" />}
      iconPosition="end"
    >
      もっと見る
    </TextLink>
  ),
};

export const UnderlineHover: Story = {
  render: () => (
    <TextLink href="#" underline="hover">
      もっと見る
    </TextLink>
  ),
};
