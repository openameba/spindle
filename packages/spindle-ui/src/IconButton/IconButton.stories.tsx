import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { IconButton } from './IconButton';
import { PlusBold } from '../Icon';

const meta: Meta<typeof IconButton> = {
  title: 'IconButton',
  component: IconButton,
  args: {
    onClick: action('clicked'),
    onMouseOver: action('action'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  render: () => (
    <>
      <IconButton size="large" variant="contained">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton size="large" variant="outlined">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton size="large" variant="neutral">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton size="large" variant="danger">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton size="large" variant="lighted">
        <PlusBold aria-label="追加" />
      </IconButton>
    </>
  ),
};

export const Medium: Story = {
  render: () => (
    <>
      <IconButton size="medium" variant="contained">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton size="medium" variant="outlined">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton size="medium" variant="neutral">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton size="medium" variant="danger">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton size="medium" variant="lighted">
        <PlusBold aria-label="追加" />
      </IconButton>
    </>
  ),
};

export const Small: Story = {
  render: () => (
    <>
      <IconButton size="small" variant="contained">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton size="small" variant="outlined">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton size="small" variant="neutral">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton size="small" variant="danger">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton size="small" variant="lighted">
        <PlusBold aria-label="追加" />
      </IconButton>
    </>
  ),
};

export const ExSmall: Story = {
  render: () => (
    <>
      <IconButton size="exSmall" variant="contained">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton size="exSmall" variant="outlined">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton size="exSmall" variant="neutral">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton size="exSmall" variant="danger">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton size="exSmall" variant="lighted">
        <PlusBold aria-label="追加" />
      </IconButton>
    </>
  ),
};

export const Disabled: Story = {
  render: () => (
    <>
      <IconButton disabled size="medium" variant="contained">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton disabled size="medium" variant="outlined">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton disabled size="medium" variant="neutral">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton disabled size="medium" variant="danger">
        <PlusBold aria-label="追加" />
      </IconButton>
      <IconButton disabled size="medium" variant="lighted">
        <PlusBold aria-label="追加" />
      </IconButton>
    </>
  ),
};
