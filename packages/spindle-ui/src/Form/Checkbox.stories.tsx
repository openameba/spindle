import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    onClick: action('clicked'),
    onMouseOver: action('action'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxStory: Story = {
  render: () => (
    <Checkbox aria-label="Amebaブログ" name="blog" value="amebaBlog" />
  ),
};

export const CheckboxDisabled: Story = {
  render: () => (
    <Checkbox aria-label="Amebaブログ" disabled name="blog" value="amebaBlog" />
  ),
};

export const CheckboxWithText: Story = {
  render: () => (
    <Checkbox name="blog" value="amebaBlog">
      Amebaブログ
    </Checkbox>
  ),
};
