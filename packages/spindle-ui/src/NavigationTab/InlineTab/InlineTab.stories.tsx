import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { action } from 'storybook/actions';
import { InlineTab } from './InlineTab';

const meta: Meta<typeof InlineTab> = {
  title: 'NavigationTab/InlineTab',
  args: {
    onClick: action('clicked'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  render: (args) => (
    <>
      <InlineTab
        defaultSelectedId={'normal-all'}
        options={[
          { id: 'normal-all', label: 'すべて' },
          { id: 'normal-follow', label: 'フォロー' },
          { id: 'normal-follower', label: 'フォロワー' },
        ]}
        {...args}
      />
      <div
        id="normal-all-tabpanel"
        role="tabpanel"
        aria-labelledby="normal-all"
      />
      <div
        id="normal-follow-tabpanel"
        role="tabpanel"
        aria-labelledby="normal-follow"
      />
      <div
        id="normal-follower-tabpanel"
        role="tabpanel"
        aria-labelledby="normal-follower"
      />
    </>
  ),
};

export const TwoItems: Story = {
  render: (args) => (
    <>
      <InlineTab
        defaultSelectedId={'two-recommend'}
        options={[
          { id: 'two-recommend', label: 'おすすめ' },
          { id: 'two-following', label: 'フォロー中' },
        ]}
        {...args}
      />
      <div
        id="two-recommend-tabpanel"
        role="tabpanel"
        aria-labelledby="two-recommend"
      />
      <div
        id="two-following-tabpanel"
        role="tabpanel"
        aria-labelledby="two-following"
      />
    </>
  ),
};

export const LongLabel: Story = {
  render: (args) => (
    <>
      <InlineTab
        defaultSelectedId={'long-all'}
        options={[
          { id: 'long-all', label: 'すべて' },
          {
            id: 'long-others',
            label: 'とても長い項目名は1行内で省略されます',
          },
        ]}
        {...args}
      />
      <div id="long-all-tabpanel" role="tabpanel" aria-labelledby="long-all" />
      <div
        id="long-others-tabpanel"
        role="tabpanel"
        aria-labelledby="long-others"
      />
    </>
  ),
};
