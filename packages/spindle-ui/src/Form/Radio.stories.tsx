import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Radio as RadioComponent } from './Radio';

const meta: Meta<typeof RadioComponent> = {
  title: 'Form/Radio',
  component: RadioComponent,
  args: {
    onClick: action('clicked'),
    onMouseOver: action('action'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Radio: Story = {
  args: {
    'aria-label': 'Amebaブログ',
    id: 'normal',
    name: 'blog',
  },
};

export const RadioDisabled: Story = {
  args: {
    'aria-label': 'Amebaブログ',
    disabled: true,
    id: 'disabled',
    name: 'blog',
  },
};

export const RadioWithText: Story = {
  render: () => (
    <>
      <div style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
        <RadioComponent id="withText1" name="select">
          選択肢１
        </RadioComponent>
        <RadioComponent id="withText2" name="select">
          選択肢２：文言が長い時の表示を確認するための選択肢です。基本的にはここまで長い文言は推奨されませんが表示の確認用です
        </RadioComponent>
        <RadioComponent id="withText3" name="select">
          選択肢３
        </RadioComponent>
      </div>
    </>
  ),
};
