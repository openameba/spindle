import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AppealModal } from './AppealModal';
import {
  AppealModalExample,
  StyleOnly,
  StyleOnlyMedium,
  StyleOnlySmall,
  StyleOnlyCustomized,
} from './AppealModal.stories.example';

const meta: Meta<typeof AppealModal.Frame> = {
  title: 'Modal/AppealModal',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  render: () => <AppealModalExample />,
};

export const StyleOnlyLargeSize: Story = {
  render: () => <StyleOnly />,
};

export const StyleOnlyMediumSize: Story = {
  render: () => <StyleOnlyMedium />,
};

export const StyleOnlySmallSize: Story = {
  render: () => <StyleOnlySmall />,
};

export const StyleOnlyCustomizedVersion: Story = {
  render: () => <StyleOnlyCustomized />,
};
