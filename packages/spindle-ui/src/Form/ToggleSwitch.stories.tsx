import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ToggleSwitch } from './ToggleSwitch';

const meta: Meta<typeof ToggleSwitch> = {
  title: 'Form/ToggleSwitch',
  component: ToggleSwitch,
  args: {
    onClick: action('clicked'),
    onMouseOver: action('action'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ToggleSwitchStory: Story = {
  render: () => <ToggleSwitch aria-label="自動で挿入する" id="toggle" />,
};

export const ToggleSwitchDisabled: Story = {
  render: () => (
    <ToggleSwitch aria-label="自動で挿入する" disabled id="toggleDisabled" />
  ),
};
