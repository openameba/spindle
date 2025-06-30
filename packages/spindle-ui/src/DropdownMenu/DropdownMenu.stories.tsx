import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DropdownMenu } from './DropdownMenu';
import {
  Text as TextExample,
  TextWithIcon as TextWithIconExample,
  HeadWithIcon as HeadWithIconExample,
  HeadWithIconAndCaption as HeadWithIconAndCaptionExample,
  Position as PositionExample,
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
