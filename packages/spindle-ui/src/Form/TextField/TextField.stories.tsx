import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { action } from 'storybook/actions';
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

export const MediumWithValue: Story = {
  render: (args) => (
    <TextField
      {...args}
      id="TextFieldWithValue"
      variant="medium"
      defaultValue="ameba-blog"
    />
  ),
};

export const MediumDisabled: Story = {
  render: (args) => (
    <TextField
      {...args}
      id="TextFieldDisabled"
      placeholder="ameba-blog"
      variant="medium"
      disabled
    />
  ),
};

export const MediumWithLongText: Story = {
  render: (args) => (
    <TextField
      {...args}
      id="TextFieldWithLongText"
      variant="medium"
      defaultValue="これは非常に長いテキストの例です。TextFieldが長いテキストをどのように表示するかを確認するためのストーリーです。テキストが入力欄の幅を超えた場合、水平スクロールが発生し、テキストが見切れることなく表示されることを確認できます。"
    />
  ),
};
