import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SegmentedControl } from './SegmentedControl';

const meta: Meta<typeof SegmentedControl> = {
  title: 'SegmentedControl',
  component: SegmentedControl,
  args: {
    onClick: action('clicked'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  render: () => (
    <>
      <SegmentedControl
        selectedId={'small'}
        options={[
          { id: 'small', label: '小' },
          { id: 'medium', label: '中' },
          { id: 'large', label: '大' },
        ]}
        size="large"
      />
    </>
  ),
};

export const Medium: Story = {
  render: () => (
    <>
      <SegmentedControl
        selectedId={'small'}
        options={[
          { id: 'small', label: '小' },
          { id: 'medium', label: '中' },
          { id: 'large', label: '大' },
        ]}
        size="medium"
      />
    </>
  ),
};

export const Total1: Story = {
  render: () => (
    <>
      <SegmentedControl
        selectedId={'all'}
        options={[{ id: 'all', label: 'すべて' }]}
      />
    </>
  ),
};

export const Total2: Story = {
  render: () => (
    <>
      <SegmentedControl
        selectedId={'article'}
        options={[
          { id: 'article', label: '記事ごとに見る' },
          { id: 'item', label: 'アイテムごとに見る' },
        ]}
      />
    </>
  ),
};

export const Total3: Story = {
  render: () => (
    <>
      <SegmentedControl
        selectedId={'follow'}
        options={[
          { id: 'all', label: 'すべて' },
          { id: 'follow', label: 'フォロー' },
          { id: 'follower', label: 'フォロワー' },
        ]}
      />
    </>
  ),
};

export const Total4: Story = {
  render: () => (
    <>
      <SegmentedControl
        selectedId={'access'}
        options={[
          { id: 'all', label: 'すべて' },
          { id: 'access', label: 'アクセス数' },
          { id: 'visitor', label: '訪問者数' },
          { id: 'good', label: 'いいね数' },
        ]}
      />
    </>
  ),
};

export const Total5: Story = {
  render: () => (
    <>
      <SegmentedControl
        selectedId={'6months'}
        options={[
          { id: '7days', label: '7日間' },
          { id: '30days', label: '30日間' },
          { id: '3months', label: '3ヶ月間' },
          { id: '6months', label: '6ヶ月間' },
          { id: '12months', label: '1年間' },
        ]}
      />
    </>
  ),
};

export const WrappedText: Story = {
  render: () => (
    <>
      <SegmentedControl
        selectedId={'longText'}
        options={[
          { id: 'all', label: 'すべて' },
          { id: 'access', label: 'アクセス数' },
          { id: 'longText', label: '文字数が多く折り返されるテキスト' },
          { id: 'visitor', label: '訪問者数' },
          { id: 'good', label: 'いいね数' },
        ]}
      />
    </>
  ),
};
