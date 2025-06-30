import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { TextArea as TextAreaComponent } from './TextArea';

const meta: Meta<typeof TextAreaComponent> = {
  title: 'Form/TextArea',
  component: TextAreaComponent,
  args: {
    onClick: action('clicked'),
    onMouseOver: action('action'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TextArea: Story = {
  render: () => (
    <TextAreaComponent
      id="TextArea"
      placeholder="ブログを読んで感じたことを伝えましょう"
    ></TextAreaComponent>
  ),
};

export const TextAreaWithError: Story = {
  render: () => (
    <TextAreaComponent
      placeholder="ブログを読んで感じたことを伝えましょう"
      hasError
      id="TextAreaWithError"
    ></TextAreaComponent>
  ),
};
