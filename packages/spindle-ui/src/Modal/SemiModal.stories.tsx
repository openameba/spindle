import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import type { SemiModal } from './SemiModal';
import {
  PopupModalExample,
  SheetModalExample,
  StyleOnlyPopupLarge,
  StyleOnlyPopupMedium,
  StyleOnlyPopupSmall,
  StyleOnlySheetLarge,
  StyleOnlySheetMedium,
  StyleOnlySheetSmall,
} from './SemiModal.stories.example';

const meta: Meta<typeof SemiModal.Frame> = {
  title: 'Modal/SemiModal',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PopupNormal: Story = {
  render: () => <PopupModalExample />,
};

export const SheetNormal: Story = {
  render: () => <SheetModalExample />,
};

export const PopupStyleOnlyLarge: Story = {
  render: () => <StyleOnlyPopupLarge />,
};

export const PopupStyleOnlyMedium: Story = {
  render: () => <StyleOnlyPopupMedium />,
};

export const PopupStyleOnlySmall: Story = {
  render: () => <StyleOnlyPopupSmall />,
};

export const SheetStyleOnlyLarge: Story = {
  render: () => <StyleOnlySheetLarge />,
};

export const SheetStyleOnlyMedium: Story = {
  render: () => <StyleOnlySheetMedium />,
};

export const SheetStyleOnlySmall: Story = {
  render: () => <StyleOnlySheetSmall />,
};
