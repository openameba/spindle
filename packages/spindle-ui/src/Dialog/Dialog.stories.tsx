import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from './Dialog';
import {
  DialogExample,
  StyleOnly,
  ButtonRow,
  ButtonColumn,
  ButtonColumnWithSubtleButton,
} from './DialogExample';

const meta: Meta<typeof Dialog> = {
  title: 'Dialog',
  component: Dialog,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  render: () => <DialogExample />,
};

export const StyleOnlyStory: Story = {
  render: () => <StyleOnly />,
};

export const ButtonRowStory: Story = {
  render: () => <ButtonRow />,
};

export const ButtonColumnStory: Story = {
  render: () => <ButtonColumn />,
};

export const ButtonColumnWithSubtleButtonStory: Story = {
  render: () => <ButtonColumnWithSubtleButton />,
};
