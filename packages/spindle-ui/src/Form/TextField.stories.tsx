import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Form/TextField',
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

export const Large: Story = {
  render: (args) => (
    <TextField
      {...args}
      id="TextField"
      placeholder="ameba-blog"
      variant="large"
    />
  ),
};

export const LargeWithError: Story = {
  render: (args) => (
    <TextField
      {...args}
      placeholder="ameba-blog"
      hasError
      id="TextFieldWithError"
      variant="large"
    />
  ),
};

export const Medium: Story = {
  render: (args) => (
    <TextField
      {...args}
      placeholder="ameba-blog"
      id="TextField"
      variant="medium"
    />
  ),
};

export const MediumWithError: Story = {
  render: (args) => (
    <TextField
      {...args}
      placeholder="ameba-blog"
      hasError
      id="TextFieldWithError"
      variant="medium"
    />
  ),
};
