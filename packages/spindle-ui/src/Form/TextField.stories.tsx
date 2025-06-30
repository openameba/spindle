import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Form/TextField',
  component: TextField,
  args: {
    onClick: action('clicked'),
    onMouseOver: action('action'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  render: () => (
    <TextField id="TextField" placeholder="ameba-blog" variant="large" />
  ),
};

export const LargeWithError: Story = {
  render: () => (
    <TextField
      placeholder="ameba-blog"
      hasError
      id="TextFieldWithError"
      variant="large"
    />
  ),
};

export const Medium: Story = {
  render: () => (
    <TextField placeholder="ameba-blog" id="TextField" variant="medium" />
  ),
};

export const MediumWithError: Story = {
  render: () => (
    <TextField
      placeholder="ameba-blog"
      hasError
      id="TextFieldWithError"
      variant="medium"
    />
  ),
};
