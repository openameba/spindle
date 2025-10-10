import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';
import { ToggleSwitch as ToggleSwitchComponent } from './ToggleSwitch';

const meta: Meta<typeof ToggleSwitchComponent> = {
  title: 'Form/ToggleSwitch',
  component: ToggleSwitchComponent,
  args: {
    onClick: action('clicked'),
    onChange: action('changed'),
    onInput: action('input'),
    onFocus: action('focused'),
    onBlur: action('blurred'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ToggleSwitch: Story = {
  args: {
    'aria-label': '自動で挿入する',
    id: 'toggle',
  },
};

export const ToggleSwitchDisabled: Story = {
  args: {
    'aria-label': '自動で挿入する',
    disabled: true,
    id: 'toggleDisabled',
  },
};
