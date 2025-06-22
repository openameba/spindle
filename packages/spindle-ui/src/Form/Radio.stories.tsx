import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Form/Radio',
  component: Radio,
  args: {
    onClick: action('clicked'),
    onMouseOver: action('action'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioStory: Story = {
  render: () => <Radio aria-label="Amebaブログ" id="normal" name="blog" />,
};

export const RadioDisabled: Story = {
  render: () => (
    <Radio aria-label="Amebaブログ" disabled id="disabled" name="blog" />
  ),
};

export const RadioWithText: Story = {
  render: () => (
    <>
      <div style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
        <Radio id="withText1" name="select">
          選択肢１
        </Radio>
        <Radio id="withText2" name="select">
          選択肢２：文言が長い時の表示を確認するための選択肢です。基本的にはここまで長い文言は推奨されませんが表示の確認用です
        </Radio>
        <Radio id="withText3" name="select">
          選択肢３
        </Radio>
      </div>
    </>
  ),
};
