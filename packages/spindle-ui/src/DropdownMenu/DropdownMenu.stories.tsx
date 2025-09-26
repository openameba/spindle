import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import type { DropdownMenu } from './DropdownMenu';
import {
  HeadWithIconAndCaption as HeadWithIconAndCaptionExample,
  HeadWithIcon as HeadWithIconExample,
  Position as PositionExample,
  Text as TextExample,
  TextWithIcon as TextWithIconExample,
} from './DropdownMenu.stories.example';

const meta: Meta<typeof DropdownMenu.Frame> = {
  title: 'DropdownMenu',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  render: () => <TextExample />,
};

export const TextWithIcon: Story = {
  render: () => <TextWithIconExample />,
};

export const HeadWithIcon: Story = {
  render: () => <HeadWithIconExample />,
};

export const HeadWithIconAndCaption: Story = {
  render: () => <HeadWithIconAndCaptionExample />,
};

export const Position: Story = {
  render: () => <PositionExample />,
};
