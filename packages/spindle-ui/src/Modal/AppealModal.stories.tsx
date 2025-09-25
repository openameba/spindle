import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import type { AppealModal } from './AppealModal';
import {
  AppealModalExample,
  StyleOnly,
  StyleOnlyCustomized,
  StyleOnlyMedium,
  StyleOnlySmall,
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
