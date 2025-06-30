import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SubtleButton } from './SubtleButton';

const meta: Meta<typeof SubtleButton> = {
  title: 'SubtleButton',
  component: SubtleButton,
  args: {
    onClick: action('clicked'),
    onMouseOver: action('action'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  render: () => <SubtleButton size="large">とじる</SubtleButton>,
};

export const Medium: Story = {
  render: () => <SubtleButton size="medium">とじる</SubtleButton>,
};

export const Small: Story = {
  render: () => <SubtleButton size="small">とじる</SubtleButton>,
};
