import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from './Dialog';
import {
  DialogExample,
  StyleOnly as StyleOnlyComponent,
  ButtonRow as ButtonRowComponent,
  ButtonColumn as ButtonColumnComponent,
  ButtonColumnWithSubtleButton as ButtonColumnWithSubtleButtonComponent,
} from './DialogExample';

const meta: Meta<typeof Dialog.Frame> = {
  title: 'Dialog',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  render: () => <DialogExample />,
};

export const StyleOnly: Story = {
  render: () => <StyleOnlyComponent />,
};

export const ButtonRow: Story = {
  render: () => <ButtonRowComponent />,
};

export const ButtonColumn: Story = {
  render: () => <ButtonColumnComponent />,
};

export const ButtonColumnWithSubtleButton: Story = {
  render: () => <ButtonColumnWithSubtleButtonComponent />,
};
