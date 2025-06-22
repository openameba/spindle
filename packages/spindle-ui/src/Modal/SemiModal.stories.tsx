import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SemiModal } from './SemiModal';
import {
  PopupModalExample,
  SheetModalExample,
  StyleOnlyPopupSmall,
  StyleOnlyPopupMedium,
  StyleOnlyPopupLarge,
  StyleOnlySheetSmall,
  StyleOnlySheetMedium,
  StyleOnlySheetLarge,
} from './SemiModal.stories.example';

const meta: Meta<typeof SemiModal> = {
  title: 'Modal/SemiModal',
  component: SemiModal,
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
