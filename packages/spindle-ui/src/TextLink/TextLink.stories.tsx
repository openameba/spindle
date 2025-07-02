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
  args: {
    href: '#',
    children: 'もっと見る',
  },
};

export const NormalWithIcon: Story = {
  args: {
    href: '#',
    children: 'ブログを書く',
    icon: <PencilAdd aria-hidden="true" />,
    iconPosition: 'start',
  },
};

export const Subtle: Story = {
  args: {
    href: '#',
    children: 'もっと見る',
    variant: 'subtle',
  },
};

export const SubtleWithIcon: Story = {
  args: {
    href: '#',
    children: 'もっと見る',
    variant: 'subtle',
    icon: <ChevronRightBold aria-hidden="true" />,
    iconPosition: 'end',
  },
};

export const UnderlineHover: Story = {
  args: {
    href: '#',
    children: 'もっと見る',
    underline: 'hover',
  },
};
