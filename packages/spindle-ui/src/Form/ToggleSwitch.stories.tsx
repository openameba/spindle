import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ToggleSwitch as ToggleSwitchComponent } from './ToggleSwitch';

const meta: Meta<typeof ToggleSwitchComponent> = {
  title: 'Form/ToggleSwitch',
  component: ToggleSwitchComponent,
  args: {
    onClick: action('clicked'),
    onMouseOver: action('action'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ToggleSwitch: Story = {
  render: () => (
    <ToggleSwitchComponent aria-label="自動で挿入する" id="toggle" />
  ),
};

export const ToggleSwitchDisabled: Story = {
  render: () => (
    <ToggleSwitchComponent
      aria-label="自動で挿入する"
      disabled
      id="toggleDisabled"
    />
  ),
};
