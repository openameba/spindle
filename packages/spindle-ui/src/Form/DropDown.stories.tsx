import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { DropDown } from './DropDown';

const meta: Meta<typeof DropDown> = {
  title: 'Form/DropDown',
  component: DropDown,
  args: {
    onClick: action('clicked'),
    onMouseOver: action('action'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DropDownStory: Story = {
  render: () => (
    <>
      <DropDown aria-label="期間を選択" name="term">
        <option value="today">今日</option>
        <option value="seven_days">7日間</option>
        <option value="thirty_days">30日間</option>
      </DropDown>
    </>
  ),
};

export const DropDownWithSelectedAndDisabled: Story = {
  render: () => (
    <>
      <DropDown aria-label="期間を選択" name="term">
        <option value="today">今日</option>
        <option value="seven_days" selected disabled>
          7日間
        </option>
        <option value="thirty_days">30日間</option>
      </DropDown>
    </>
  ),
};

export const DropDownWithError: Story = {
  render: () => (
    <>
      <DropDown aria-label="期間を選択" hasError name="termWithError">
        <option value="today">今日</option>
        <option value="seven_days">7日間</option>
        <option value="thirty_days">30日間</option>
      </DropDown>
    </>
  ),
};
