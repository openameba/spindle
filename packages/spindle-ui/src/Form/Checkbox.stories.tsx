import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Checkbox as CheckboxComponent } from './Checkbox';

const meta: Meta<typeof CheckboxComponent> = {
  title: 'Form/Checkbox',
  component: CheckboxComponent,
  args: {
    onClick: action('clicked'),
    onMouseOver: action('action'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Checkbox: Story = {
  render: () => (
    <CheckboxComponent aria-label="Amebaブログ" name="blog" value="amebaBlog" />
  ),
};

export const CheckboxDisabled: Story = {
  render: () => (
    <CheckboxComponent
      aria-label="Amebaブログ"
      disabled
      name="blog"
      value="amebaBlog"
    />
  ),
};

export const CheckboxWithText: Story = {
  render: () => (
    <CheckboxComponent name="blog" value="amebaBlog">
      Amebaブログ
    </CheckboxComponent>
  ),
};
