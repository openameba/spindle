import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { action } from 'storybook/actions';
import { ChevronRightBold, PencilAdd } from '../Icon';
import { TextButton } from './TextButton';

const meta: Meta<typeof TextButton> = {
  title: 'TextButton',
  component: TextButton,
  args: {
    onClick: action('clicked'),
    onMouseOver: action('mouse-over'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: 'もっと見る',
  },
};

export const NormalDisabled: Story = {
  args: {
    children: 'もっと見る',
    disabled: true,
  },
};

export const NormalWithIcon: Story = {
  args: {
    children: 'ブログを書く',
    icon: <PencilAdd aria-hidden="true" />,
    iconPosition: 'start',
  },
};

export const NormalWithIconDisabled: Story = {
  args: {
    children: 'ブログを書く',
    icon: <PencilAdd aria-hidden="true" />,
    iconPosition: 'start',
    disabled: true,
  },
};

export const Subtle: Story = {
  args: {
    children: 'もっと見る',
    variant: 'subtle',
  },
};

export const SubtleDisabled: Story = {
  args: {
    children: 'もっと見る',
    variant: 'subtle',
    disabled: true,
  },
};

export const SubtleWithIcon: Story = {
  args: {
    children: 'もっと見る',
    variant: 'subtle',
    icon: <ChevronRightBold aria-hidden="true" />,
    iconPosition: 'end',
  },
};

export const SubtleWithIconDisabled: Story = {
  args: {
    children: 'もっと見る',
    variant: 'subtle',
    icon: <ChevronRightBold aria-hidden="true" />,
    iconPosition: 'end',
    disabled: true,
  },
};

export const UnderlineHover: Story = {
  args: {
    children: 'もっと見る',
    underline: 'hover',
  },
};

export const UnderlineHoverDisabled: Story = {
  args: {
    children: 'もっと見る',
    underline: 'hover',
    disabled: true,
  },
};
