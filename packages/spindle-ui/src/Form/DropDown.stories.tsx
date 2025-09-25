import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DropDown as DropDownComponent } from './DropDown';

const meta: Meta<typeof DropDownComponent> = {
  title: 'Form/DropDown',
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

export const DropDown: Story = {
  render: (args) => (
    <>
      <DropDownComponent {...args} aria-label="期間を選択" name="term">
        <option value="today">今日</option>
        <option value="seven_days">7日間</option>
        <option value="thirty_days">30日間</option>
      </DropDownComponent>
    </>
  ),
};

export const DropDownWithSelectedAndDisabled: Story = {
  render: (args) => (
    <>
      <DropDownComponent {...args} aria-label="期間を選択" name="term">
        <option value="today">今日</option>
        <option value="seven_days" selected disabled>
          7日間
        </option>
        <option value="thirty_days">30日間</option>
      </DropDownComponent>
    </>
  ),
};

export const DropDownWithError: Story = {
  render: (args) => (
    <>
      <DropDownComponent
        {...args}
        aria-label="期間を選択"
        hasError
        name="termWithError"
      >
        <option value="today">今日</option>
        <option value="seven_days">7日間</option>
        <option value="thirty_days">30日間</option>
      </DropDownComponent>
    </>
  ),
};
