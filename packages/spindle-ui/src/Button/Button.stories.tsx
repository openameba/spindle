import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ChevronDownBold, FileAdd, Link, PlusBold } from '../Icon';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
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
      <Button {...args} size="large" variant="contained">
        申請する
      </Button>
      <Button {...args} size="large" variant="outlined">
        選択する
      </Button>
      <Button {...args} size="large" variant="neutral">
        修正する
      </Button>
      <Button {...args} size="large" variant="danger">
        削除する
      </Button>
      <Button {...args} size="large" variant="lighted">
        フォロー中
      </Button>
    </>
  ),
};

export const LargeFullWidth: Story = {
  render: (args) => (
    <>
      <Button {...args} layout="fullWidth" size="large" variant="contained">
        申請する
      </Button>
      <Button {...args} layout="fullWidth" size="large" variant="outlined">
        選択する
      </Button>
      <Button {...args} layout="fullWidth" size="large" variant="neutral">
        修正する
      </Button>
      <Button {...args} layout="fullWidth" size="large" variant="danger">
        削除する
      </Button>
      <Button {...args} layout="fullWidth" size="large" variant="lighted">
        フォロー中
      </Button>
    </>
  ),
};

export const Medium: Story = {
  render: (args) => (
    <>
      <Button {...args} size="medium" variant="contained">
        申請する
      </Button>
      <Button {...args} size="medium" variant="outlined">
        選択する
      </Button>
      <Button {...args} size="medium" variant="neutral">
        修正する
      </Button>
      <Button {...args} size="medium" variant="danger">
        削除する
      </Button>
      <Button {...args} size="medium" variant="lighted">
        フォロー中
      </Button>
    </>
  ),
};

export const MediumFullWidth: Story = {
  render: (args) => (
    <>
      <Button {...args} layout="fullWidth" size="medium" variant="contained">
        申請する
      </Button>
      <Button {...args} layout="fullWidth" size="medium" variant="outlined">
        選択する
      </Button>
      <Button {...args} layout="fullWidth" size="medium" variant="neutral">
        修正する
      </Button>
      <Button {...args} layout="fullWidth" size="medium" variant="danger">
        削除する
      </Button>
      <Button {...args} layout="fullWidth" size="medium" variant="lighted">
        フォロー中
      </Button>
    </>
  ),
};

export const Small: Story = {
  render: (args) => (
    <>
      <Button {...args} size="small" variant="contained">
        申請する
      </Button>
      <Button {...args} size="small" variant="outlined">
        選択する
      </Button>
      <Button {...args} size="small" variant="neutral">
        修正する
      </Button>
      <Button {...args} size="small" variant="danger">
        削除する
      </Button>
      <Button {...args} size="small" variant="lighted">
        フォロー中
      </Button>
    </>
  ),
};

export const SmallFullWidth: Story = {
  render: (args) => (
    <>
      <Button {...args} layout="fullWidth" size="small" variant="contained">
        申請する
      </Button>
      <Button {...args} layout="fullWidth" size="small" variant="outlined">
        選択する
      </Button>
      <Button {...args} layout="fullWidth" size="small" variant="neutral">
        修正する
      </Button>
      <Button {...args} layout="fullWidth" size="small" variant="danger">
        削除する
      </Button>
      <Button {...args} layout="fullWidth" size="small" variant="lighted">
        フォロー中
      </Button>
    </>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <>
      <Button {...args} disabled size="medium" variant="contained">
        申請する
      </Button>
      <Button {...args} disabled size="medium" variant="outlined">
        選択する
      </Button>
      <Button {...args} disabled size="medium" variant="neutral">
        修正する
      </Button>
      <Button {...args} disabled size="medium" variant="danger">
        削除する
      </Button>
      <Button {...args} disabled size="medium" variant="lighted">
        フォロー中
      </Button>
    </>
  ),
};

export const DisabledFullWidth: Story = {
  render: (args) => (
    <>
      <Button
        {...args}
        layout="fullWidth"
        disabled
        size="medium"
        variant="contained"
      >
        申請する
      </Button>
      <Button
        {...args}
        layout="fullWidth"
        disabled
        size="medium"
        variant="outlined"
      >
        選択する
      </Button>
      <Button
        {...args}
        layout="fullWidth"
        disabled
        size="medium"
        variant="neutral"
      >
        修正する
      </Button>
      <Button
        {...args}
        layout="fullWidth"
        disabled
        size="medium"
        variant="danger"
      >
        削除する
      </Button>
      <Button
        {...args}
        layout="fullWidth"
        disabled
        size="medium"
        variant="lighted"
      >
        フォロー中
      </Button>
    </>
  ),
};

export const WithIcon: Story = {
  render: (args) => (
    <>
      <Button {...args} icon={<FileAdd />} size="large" variant="contained">
        ファイルを選択する
      </Button>
      <Button {...args} icon={<Link />} size="medium" variant="outlined">
        リンクをコピーする
      </Button>
      <Button {...args} icon={<PlusBold />} size="small" variant="neutral">
        フォロー
      </Button>
      <Button
        {...args}
        icon={<ChevronDownBold />}
        iconPosition="end"
        size="large"
        variant="contained"
      >
        さらに表示
      </Button>
      <Button
        {...args}
        icon={<ChevronDownBold />}
        iconPosition="end"
        size="medium"
        variant="outlined"
      >
        もっと見る
      </Button>
      <Button
        {...args}
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
  render: (args) => (
    <>
      <Button
        {...args}
        layout="fullWidth"
        icon={<FileAdd />}
        size="large"
        variant="contained"
      >
        ファイルを選択する
      </Button>
      <Button
        {...args}
        layout="fullWidth"
        icon={<Link />}
        size="medium"
        variant="outlined"
      >
        リンクをコピーする
      </Button>
      <Button
        {...args}
        layout="fullWidth"
        icon={<PlusBold />}
        size="small"
        variant="neutral"
      >
        フォロー
      </Button>
      <Button
        {...args}
        layout="fullWidth"
        icon={<ChevronDownBold />}
        iconPosition="end"
        size="large"
        variant="contained"
      >
        さらに表示
      </Button>
      <Button
        {...args}
        layout="fullWidth"
        icon={<ChevronDownBold />}
        iconPosition="end"
        size="medium"
        variant="outlined"
      >
        もっと見る
      </Button>
      <Button
        {...args}
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
