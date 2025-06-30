import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from './Button';
import { PlusBold, Link, FileAdd, ChevronDownBold } from '../Icon';

const meta: Meta<typeof Button> = {
  title: 'Button',
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
      <Button size="large" variant="contained">
        申請する
      </Button>
      <Button size="large" variant="outlined">
        選択する
      </Button>
      <Button size="large" variant="neutral">
        修正する
      </Button>
      <Button size="large" variant="danger">
        削除する
      </Button>
      <Button size="large" variant="lighted">
        フォロー中
      </Button>
    </>
  ),
};

export const LargeFullWidth: Story = {
  render: () => (
    <>
      <Button layout="fullWidth" size="large" variant="contained">
        申請する
      </Button>
      <Button layout="fullWidth" size="large" variant="outlined">
        選択する
      </Button>
      <Button layout="fullWidth" size="large" variant="neutral">
        修正する
      </Button>
      <Button layout="fullWidth" size="large" variant="danger">
        削除する
      </Button>
      <Button layout="fullWidth" size="large" variant="lighted">
        フォロー中
      </Button>
    </>
  ),
};

export const Medium: Story = {
  render: () => (
    <>
      <Button size="medium" variant="contained">
        申請する
      </Button>
      <Button size="medium" variant="outlined">
        選択する
      </Button>
      <Button size="medium" variant="neutral">
        修正する
      </Button>
      <Button size="medium" variant="danger">
        削除する
      </Button>
      <Button size="medium" variant="lighted">
        フォロー中
      </Button>
    </>
  ),
};

export const MediumFullWidth: Story = {
  render: () => (
    <>
      <Button layout="fullWidth" size="medium" variant="contained">
        申請する
      </Button>
      <Button layout="fullWidth" size="medium" variant="outlined">
        選択する
      </Button>
      <Button layout="fullWidth" size="medium" variant="neutral">
        修正する
      </Button>
      <Button layout="fullWidth" size="medium" variant="danger">
        削除する
      </Button>
      <Button layout="fullWidth" size="medium" variant="lighted">
        フォロー中
      </Button>
    </>
  ),
};

export const Small: Story = {
  render: () => (
    <>
      <Button size="small" variant="contained">
        申請する
      </Button>
      <Button size="small" variant="outlined">
        選択する
      </Button>
      <Button size="small" variant="neutral">
        修正する
      </Button>
      <Button size="small" variant="danger">
        削除する
      </Button>
      <Button size="small" variant="lighted">
        フォロー中
      </Button>
    </>
  ),
};

export const SmallFullWidth: Story = {
  render: () => (
    <>
      <Button layout="fullWidth" size="small" variant="contained">
        申請する
      </Button>
      <Button layout="fullWidth" size="small" variant="outlined">
        選択する
      </Button>
      <Button layout="fullWidth" size="small" variant="neutral">
        修正する
      </Button>
      <Button layout="fullWidth" size="small" variant="danger">
        削除する
      </Button>
      <Button layout="fullWidth" size="small" variant="lighted">
        フォロー中
      </Button>
    </>
  ),
};

export const Disabled: Story = {
  render: () => (
    <>
      <Button disabled size="medium" variant="contained">
        申請する
      </Button>
      <Button disabled size="medium" variant="outlined">
        選択する
      </Button>
      <Button disabled size="medium" variant="neutral">
        修正する
      </Button>
      <Button disabled size="medium" variant="danger">
        削除する
      </Button>
      <Button disabled size="medium" variant="lighted">
        フォロー中
      </Button>
    </>
  ),
};

export const DisabledFullWidth: Story = {
  render: () => (
    <>
      <Button layout="fullWidth" disabled size="medium" variant="contained">
        申請する
      </Button>
      <Button layout="fullWidth" disabled size="medium" variant="outlined">
        選択する
      </Button>
      <Button layout="fullWidth" disabled size="medium" variant="neutral">
        修正する
      </Button>
      <Button layout="fullWidth" disabled size="medium" variant="danger">
        削除する
      </Button>
      <Button layout="fullWidth" disabled size="medium" variant="lighted">
        フォロー中
      </Button>
    </>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <>
      <Button icon={<FileAdd />} size="large" variant="contained">
        ファイルを選択する
      </Button>
      <Button icon={<Link />} size="medium" variant="outlined">
        リンクをコピーする
      </Button>
      <Button icon={<PlusBold />} size="small" variant="neutral">
        フォロー
      </Button>
      <Button
        icon={<ChevronDownBold />}
        iconPosition="end"
        size="large"
        variant="contained"
      >
        さらに表示
      </Button>
      <Button
        icon={<ChevronDownBold />}
        iconPosition="end"
        size="medium"
        variant="outlined"
      >
        もっと見る
      </Button>
      <Button
        icon={<ChevronDownBold />}
        iconPosition="end"
        size="small"
        variant="neutral"
      >
        さらに表示
      </Button>
    </>
  ),
};

export const FullWidthWithIcon: Story = {
  render: () => (
    <>
      <Button
        layout="fullWidth"
        icon={<FileAdd />}
        size="large"
        variant="contained"
      >
        ファイルを選択する
      </Button>
      <Button
        layout="fullWidth"
        icon={<Link />}
        size="medium"
        variant="outlined"
      >
        リンクをコピーする
      </Button>
      <Button
        layout="fullWidth"
        icon={<PlusBold />}
        size="small"
        variant="neutral"
      >
        フォロー
      </Button>
      <Button
        layout="fullWidth"
        icon={<ChevronDownBold />}
        iconPosition="end"
        size="large"
        variant="contained"
      >
        さらに表示
      </Button>
      <Button
        layout="fullWidth"
        icon={<ChevronDownBold />}
        iconPosition="end"
        size="medium"
        variant="outlined"
      >
        もっと見る
      </Button>
      <Button
        layout="fullWidth"
        icon={<ChevronDownBold />}
        iconPosition="end"
        size="small"
        variant="neutral"
      >
        さらに表示
      </Button>
    </>
  ),
};
