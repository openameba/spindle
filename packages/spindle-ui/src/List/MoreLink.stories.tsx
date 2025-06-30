import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MoreLink } from './MoreLink';

const meta: Meta<typeof MoreLink> = {
  title: 'List/MoreLink',
  component: MoreLink,
  args: {
    onClick: action('clicked'),
    onMouseOver: action('action'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <MoreLink href="#">もっと見る</MoreLink>,
};
