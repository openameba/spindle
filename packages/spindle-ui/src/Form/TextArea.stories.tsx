import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';
import { TextArea as TextAreaComponent } from './TextArea';

const meta: Meta<typeof TextAreaComponent> = {
  title: 'Form/TextArea',
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

export const TextArea: Story = {
  render: (args) => (
    <TextAreaComponent
      {...args}
      id="TextArea"
      placeholder="ブログを読んで感じたことを伝えましょう"
    ></TextAreaComponent>
  ),
};

export const TextAreaWithError: Story = {
  render: (args) => (
    <TextAreaComponent
      {...args}
      placeholder="ブログを読んで感じたことを伝えましょう"
      hasError
      id="TextAreaWithError"
    ></TextAreaComponent>
  ),
};
