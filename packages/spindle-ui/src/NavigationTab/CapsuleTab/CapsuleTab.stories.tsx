import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { action } from 'storybook/actions';
import { CapsuleTab } from './CapsuleTab';

const meta: Meta<typeof CapsuleTab> = {
  title: 'NavigationTab/CapsuleTab',
  args: {
    onClick: action('clicked'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const VariantFixed: Story = {
  render: (args) => (
    <>
      <CapsuleTab
        defaultSelectedId={'fixed-all'}
        options={[
          { id: 'fixed-all', label: 'すべて' },
          { id: 'fixed-follow', label: 'フォロー' },
          { id: 'fixed-follower', label: 'フォロワー' },
        ]}
        {...args}
      />
      <div
        id="fixed-all-tabpanel"
        role="tabpanel"
        aria-labelledby="fixed-all"
      />
      <div
        id="fixed-follow-tabpanel"
        role="tabpanel"
        aria-labelledby="fixed-follow"
      />
      <div
        id="fixed-follower-tabpanel"
        role="tabpanel"
        aria-labelledby="fixed-follower"
      />
    </>
  ),
};

export const VariantScrollable: Story = {
  render: (args) => (
    <>
      <CapsuleTab
        defaultSelectedId={'scrollable-follow'}
        options={[
          { id: 'scrollable-all', label: 'すべて' },
          { id: 'scrollable-follow', label: 'フォロー' },
          { id: 'scrollable-follower', label: 'フォロワー' },
          { id: 'scrollable-recommend', label: 'おすすめ' },
          { id: 'scrollable-ranking', label: 'ランキング' },
          { id: 'scrollable-official', label: '公式ジャンル' },
          { id: 'scrollable-topics', label: 'トピックス' },
        ]}
        variant="scrollable"
        {...args}
      />
      <div
        id="scrollable-all-tabpanel"
        role="tabpanel"
        aria-labelledby="scrollable-all"
      />
      <div
        id="scrollable-follow-tabpanel"
        role="tabpanel"
        aria-labelledby="scrollable-follow"
      />
      <div
        id="scrollable-follower-tabpanel"
        role="tabpanel"
        aria-labelledby="scrollable-follower"
      />
      <div
        id="scrollable-recommend-tabpanel"
        role="tabpanel"
        aria-labelledby="scrollable-recommend"
      />
      <div
        id="scrollable-ranking-tabpanel"
        role="tabpanel"
        aria-labelledby="scrollable-ranking"
      />
      <div
        id="scrollable-official-tabpanel"
        role="tabpanel"
        aria-labelledby="scrollable-official"
      />
      <div
        id="scrollable-topics-tabpanel"
        role="tabpanel"
        aria-labelledby="scrollable-topics"
      />
    </>
  ),
};

export const VariantScrollableWithShortLabel: Story = {
  render: (args) => (
    <>
      <CapsuleTab
        defaultSelectedId={'scrollable-short-follower'}
        options={[
          { id: 'scrollable-short-all', label: 'すべて' },
          { id: 'scrollable-short-follow', label: 'フォロー' },
          { id: 'scrollable-short-follower', label: 'フォロワー' },
        ]}
        variant="scrollable"
        {...args}
      />
      <div
        id="scrollable-short-all-tabpanel"
        role="tabpanel"
        aria-labelledby="scrollable-short-all"
      />
      <div
        id="scrollable-short-follow-tabpanel"
        role="tabpanel"
        aria-labelledby="scrollable-short-follow"
      />
      <div
        id="scrollable-short-follower-tabpanel"
        role="tabpanel"
        aria-labelledby="scrollable-short-follower"
      />
    </>
  ),
};

export const HasBorderTrue: Story = {
  render: (args) => (
    <>
      <CapsuleTab
        defaultSelectedId={'hasBorder-all'}
        hasBorder={true}
        options={[
          { id: 'hasBorder-all', label: 'すべて' },
          { id: 'hasBorder-follow', label: 'フォロー' },
          { id: 'hasBorder-follower', label: 'フォロワー' },
        ]}
        {...args}
      />
      <div
        id="hasBorder-all-tabpanel"
        role="tabpanel"
        aria-labelledby="hasBorder-all"
      />
      <div
        id="hasBorder-follow-tabpanel"
        role="tabpanel"
        aria-labelledby="hasBorder-follow"
      />
      <div
        id="hasBorder-follower-tabpanel"
        role="tabpanel"
        aria-labelledby="hasBorder-follower"
      />
    </>
  ),
};
