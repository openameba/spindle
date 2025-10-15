import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { action } from 'storybook/actions';
import { InlineDropDown } from './InlineDropDown';

const meta: Meta<typeof InlineDropDown> = {
  title: 'Form/InlineDropDown',
  args: {
    onClick: action('clicked'),
    onChange: action('changed'),
    onInput: action('input'),
    onFocus: action('focused'),
    onBlur: action('blurred'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  render: (args) => (
    <>
      <InlineDropDown {...args} aria-label="期間を選択" name="term">
        <option value="today">今日</option>
        <option value="seven_days">7日間</option>
        <option value="thirty_days">30日間</option>
      </InlineDropDown>
    </>
  ),
};

export const Small: Story = {
  render: (args) => (
    <>
      <InlineDropDown
        {...args}
        visualSize="small"
        aria-label="期間を選択"
        name="term"
      >
        <option value="today">今日</option>
        <option value="seven_days">7日間</option>
        <option value="thirty_days">30日間</option>
      </InlineDropDown>
    </>
  ),
};
