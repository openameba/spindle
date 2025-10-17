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

export const CheckboxDisabledChecked: Story = {
  args: {
    'aria-label': 'Amebaブログ',
    disabled: true,
    checked: true,
    name: 'blog',
    value: 'amebaBlog',
  },
};

export const CheckboxChecked: Story = {
  args: {
    'aria-label': 'Amebaブログ',
    name: 'blog',
    value: 'amebaBlog',
    checked: true,
  },
};

export const CheckboxWithText: Story = {
  args: {
    name: 'blog',
    value: 'amebaBlog',
    children: 'Amebaブログ',
  },
};

export const CheckboxCheckedWithText: Story = {
  args: {
    name: 'blog',
    value: 'amebaBlog',
    children: 'Amebaブログ',
    checked: true,
  },
};

export const CheckboxInverse: Story = {
  args: {
    'aria-label': 'Amebaブログ',
    name: 'blog',
    value: 'amebaBlog',
    inverse: true,
  },
};

export const CheckboxInverseChecked: Story = {
  args: {
    'aria-label': 'Amebaブログ',
    name: 'blog',
    value: 'amebaBlog',
    inverse: true,
    checked: true,
  },
};

export const CheckboxInverseWithText: Story = {
  args: {
    name: 'blog',
    value: 'amebaBlog',
    children: 'Amebaブログ',
    inverse: true,
  },
};

export const CheckboxInverseCheckedWithText: Story = {
  args: {
    name: 'blog',
    value: 'amebaBlog',
    children: 'Amebaブログ',
    inverse: true,
    checked: true,
  },
};
