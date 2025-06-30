import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StackNotificationManagerExample } from './StackNotificationManager.stories.example';

const meta: Meta<typeof StackNotificationManagerExample> = {
  title: 'StackNotificationManager',
  component: StackNotificationManagerExample,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  render: () => <StackNotificationManagerExample />,
};
