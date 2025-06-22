import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Form/TextArea',
  component: TextArea,
  args: {
    onClick: action('clicked'),
    onMouseOver: action('action'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TextAreaStory: Story = {
  render: () => (
    <TextArea
      id="TextArea"
      placeholder="ブログを読んで感じたことを伝えましょう"
    ></TextArea>
  ),
};

export const TextAreaWithError: Story = {
  render: () => (
    <TextArea
      placeholder="ブログを読んで感じたことを伝えましょう"
      hasError
      id="TextAreaWithError"
    ></TextArea>
  ),
};
