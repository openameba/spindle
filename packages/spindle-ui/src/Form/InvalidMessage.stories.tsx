import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InvalidMessage } from './InvalidMessage';

const meta: Meta<typeof InvalidMessage> = {
  title: 'Form/InvalidMessage',
  component: InvalidMessage,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InvalidMessageStory: Story = {
  render: () => (
    <InvalidMessage visible>ファイル形式が正しくありません</InvalidMessage>
  ),
};
