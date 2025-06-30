import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '../Button/Button';
import { SubtleButton } from '../SubtleButton/SubtleButton';

const meta: Meta<typeof ButtonGroup> = {
  title: 'ButtonGroup',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const RowDirectionWithLargeButtons: Story = {
  render: () => (
    <>
      <ButtonGroup direction="row" size="large">
        <Button size="large" variant="contained">
          新規登録
        </Button>
        <Button size="large" variant="outlined">
          ログイン
        </Button>
      </ButtonGroup>
    </>
  ),
};

export const ColumnDirectionWithLargeButtons: Story = {
  render: () => (
    <>
      <ButtonGroup direction="column" size="large">
        <Button variant="contained">新規登録</Button>
        <Button variant="outlined">ログイン</Button>
      </ButtonGroup>
    </>
  ),
};

export const RowDirectionWithMediumButtons: Story = {
  render: () => (
    <>
      <ButtonGroup direction="row" size="medium">
        <Button size="medium" variant="contained">
          新規登録
        </Button>
        <Button size="medium" variant="outlined">
          ログイン
        </Button>
      </ButtonGroup>
    </>
  ),
};

export const ColumnDirectionWithMediumButtons: Story = {
  render: () => (
    <>
      <ButtonGroup direction="column" size="medium">
        <Button size="medium" variant="contained">
          新規登録
        </Button>
        <Button size="medium" variant="outlined">
          ログイン
        </Button>
      </ButtonGroup>
    </>
  ),
};

export const RowDirectionWithSmallButtons: Story = {
  render: () => (
    <>
      <ButtonGroup direction="row" size="small">
        <Button size="small" variant="contained">
          新規登録
        </Button>
        <Button size="small" variant="outlined">
          ログイン
        </Button>
      </ButtonGroup>
    </>
  ),
};

export const ColumnDirectionWithSmallButtons: Story = {
  render: () => (
    <>
      <ButtonGroup direction="column" size="small">
        <Button size="small" variant="contained">
          新規登録
        </Button>
        <Button size="small" variant="outlined">
          ログイン
        </Button>
      </ButtonGroup>
    </>
  ),
};

export const ColumnDirectionWithLargeSubtleButton: Story = {
  render: () => (
    <>
      <ButtonGroup direction="column" size="large">
        <Button variant="contained">申請する</Button>
        <SubtleButton size="large">とじる</SubtleButton>
      </ButtonGroup>
    </>
  ),
};

export const ColumnDirectionWithMediumSubtleButton: Story = {
  render: () => (
    <>
      <ButtonGroup direction="column" size="medium">
        <Button size="medium" variant="contained">
          申請する
        </Button>
        <SubtleButton size="medium">とじる</SubtleButton>
      </ButtonGroup>
    </>
  ),
};

export const ColumnDirectionWithSmallSubtleButton: Story = {
  render: () => (
    <>
      <ButtonGroup direction="column" size="small">
        <Button size="small" variant="contained">
          申請する
        </Button>
        <SubtleButton size="small">とじる</SubtleButton>
      </ButtonGroup>
    </>
  ),
};
