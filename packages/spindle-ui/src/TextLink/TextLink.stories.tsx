import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { action } from 'storybook/actions';
import { ChevronRightBold, PencilAdd } from '../Icon';
import { TextLink } from './TextLink';

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

export const CustomStyle: Story = {
  decorators: [
    (Story) => (
      <div
        style={
          {
            '--TextLink-color': 'var(--color-text-medium-emphasis)',
            '--TextLink-icon-color': 'var(--color-object-accent-primary)',
            '--TextLink-fontWeight': 'normal',
          } as React.CSSProperties
        }
      >
        <Story />
      </div>
    ),
  ],
  args: {
    href: '#custom',
    children: 'カスタマイズされたリンク',
    icon: <ChevronRightBold aria-hidden="true" />,
    iconPosition: 'end',
  },
};
