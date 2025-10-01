import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';
import { UnderlineTab } from './UnderlineTab';

const meta: Meta<typeof UnderlineTab> = {
  title: 'NavigationTab/UnderlineTab',
  args: {
    onClick: action('clicked'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const VariantFixed: Story = {
  render: (args) => (
    <>
      <UnderlineTab
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
      <UnderlineTab
        defaultSelectedId={'scrollable-follow'}
        options={[
          { id: 'scrollable-all', label: 'すべて' },
          { id: 'scrollable-follow', label: 'フォロー' },
          { id: 'scrollable-follower', label: 'フォロワー' },
          {
            id: 'scrollable-others',
            label:
              'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          },
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
        id="scrollable-others-tabpanel"
        role="tabpanel"
        aria-labelledby="scrollable-others"
      />
    </>
  ),
};

export const VariantScrollableWithShortLabel: Story = {
  render: (args) => (
    <>
      <UnderlineTab
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
      <UnderlineTab
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

export const CountBadge: Story = {
  render: (args) => (
    <>
      <UnderlineTab
        defaultSelectedId={'countBadge-follow'}
        options={[
          { id: 'countBadge-all', label: 'すべて', countBadge: '1' },
          { id: 'countBadge-follow', label: 'フォロー' },
          { id: 'countBadge-follower', label: 'フォロワー', countBadge: '100' },
        ]}
        variant="scrollable"
        {...args}
      />
      <div
        id="countBadge-all-tabpanel"
        role="tabpanel"
        aria-labelledby="countBadge-all"
      />
      <div
        id="countBadge-follow-tabpanel"
        role="tabpanel"
        aria-labelledby="countBadge-follow"
      />
      <div
        id="countBadge-follower-tabpanel"
        role="tabpanel"
        aria-labelledby="countBadge-follower"
      />
    </>
  ),
};
