import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';
import { Checkbox as CheckboxComponent } from './Checkbox';

const meta: Meta<typeof CheckboxComponent> = {
  title: 'Form/Checkbox',
  component: CheckboxComponent,
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

export const Checkbox: Story = {
  args: {
    'aria-label': 'Amebaブログ',
    name: 'blog',
    value: 'amebaBlog',
  },
};

export const CheckboxDisabled: Story = {
  args: {
    'aria-label': 'Amebaブログ',
    disabled: true,
    name: 'blog',
    value: 'amebaBlog',
  },
};

export const CheckboxWithText: Story = {
  args: {
    name: 'blog',
    value: 'amebaBlog',
    children: 'Amebaブログ',
  },
};
