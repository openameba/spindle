import type { Meta, StoryObj } from '@storybook/react';
import type { Tooltip } from './Tooltip';
import {
  DefaultOpen as DefaultOpenComponent,
  DirectionBottom as DirectionBottomComponent,
  DirectionLeft as DirectionLeftComponent,
  DirectionRight as DirectionRightComponent,
  DirectionTop as DirectionTopComponent,
  InitialOpen as InitialOpenComponent,
  LongText as LongTextComponent,
  PositionCenter as PositionCenterComponent,
  PositionEdgeEnd as PositionEdgeEndComponent,
  PositionEdgeStart as PositionEdgeStartComponent,
  PositionEnd as PositionEndComponent,
  PositionStart as PositionStartComponent,
  VariantConfirmation as VariantConfirmationComponent,
  VariantError as VariantErrorComponent,
  VariantInformation as VariantInformationComponent,
  WithOnClose as WithOnCloseComponent,
} from './Tooltip.stories.example';

const meta: Meta<typeof Tooltip.Frame> = {
  title: 'Tooltip',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  render: () => <DefaultOpenComponent />,
};

export const InitialOpen: Story = {
  render: () => <InitialOpenComponent />,
};

export const OnceOnly: Story = {
  render: () => <WithOnCloseComponent />,
};

export const VariantInformation: Story = {
  render: () => <VariantInformationComponent />,
};

export const VariantConfirmation: Story = {
  render: () => <VariantConfirmationComponent />,
};

export const VariantError: Story = {
  render: () => <VariantErrorComponent />,
};

export const DirectionTop: Story = {
  render: () => <DirectionTopComponent />,
};

export const DirectionBottom: Story = {
  render: () => <DirectionBottomComponent />,
};

export const DirectionLeft: Story = {
  render: () => <DirectionLeftComponent />,
};

export const DirectionRight: Story = {
  render: () => <DirectionRightComponent />,
};

export const PositionCenter: Story = {
  render: () => <PositionCenterComponent />,
};

export const PositionStart: Story = {
  render: () => <PositionStartComponent />,
};

export const PositionEnd: Story = {
  render: () => <PositionEndComponent />,
};

export const PositionEdgeStart: Story = {
  render: () => <PositionEdgeStartComponent />,
};

export const PositionEdgeEnd: Story = {
  render: () => <PositionEdgeEndComponent />,
};

export const LongText: Story = {
  render: () => <LongTextComponent />,
};
