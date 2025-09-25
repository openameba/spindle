import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PlusBold } from '../Icon';
import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'IconButton',
  args: {
    onClick: action('clicked'),
    onMouseOver: action('mouse-over'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  render: (args) => (
    <>
      <IconButton {...args} size="large" variant="contained">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton {...args} size="large" variant="outlined">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton {...args} size="large" variant="neutral">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton {...args} size="large" variant="danger">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton {...args} size="large" variant="lighted">
        <PlusBold aria-label="追加" />
      </IconButton>
    </>
  ),
};

export const Medium: Story = {
  render: (args) => (
    <>
      <IconButton {...args} size="medium" variant="contained">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton {...args} size="medium" variant="outlined">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton {...args} size="medium" variant="neutral">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton {...args} size="medium" variant="danger">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton {...args} size="medium" variant="lighted">
        <PlusBold aria-label="追加" />
      </IconButton>
    </>
  ),
};

export const Small: Story = {
  render: (args) => (
    <>
      <IconButton {...args} size="small" variant="contained">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton {...args} size="small" variant="outlined">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton {...args} size="small" variant="neutral">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton {...args} size="small" variant="danger">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton {...args} size="small" variant="lighted">
        <PlusBold aria-label="追加" />
      </IconButton>
    </>
  ),
};

export const ExSmall: Story = {
  render: (args) => (
    <>
      <IconButton {...args} size="exSmall" variant="contained">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton {...args} size="exSmall" variant="outlined">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton {...args} size="exSmall" variant="neutral">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton {...args} size="exSmall" variant="danger">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton {...args} size="exSmall" variant="lighted">
        <PlusBold aria-label="追加" />
      </IconButton>
    </>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <>
      <IconButton {...args} disabled size="medium" variant="contained">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton {...args} disabled size="medium" variant="outlined">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton {...args} disabled size="medium" variant="neutral">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton {...args} disabled size="medium" variant="danger">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton {...args} disabled size="medium" variant="lighted">
        <PlusBold aria-label="追加" />
      </IconButton>
    </>
  ),
};
