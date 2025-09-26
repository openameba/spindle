import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { MoreLink } from './MoreLink';

const meta: Meta<typeof MoreLink> = {
  title: 'List/MoreLink',
  args: {
    onClick: action('clicked'),
    onMouseOver: action('action'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <MoreLink href="#" {...args}>
      もっと見る
    </MoreLink>
  ),
};
