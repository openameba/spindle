import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InputLabel } from './InputLabel';

const meta: Meta<typeof InputLabel> = {
  title: 'Form/InputLabel',
  component: InputLabel,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InputLabelStory: Story = {
  render: () => <InputLabel id="comment">コメントを入力</InputLabel>,
};
