import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { action } from 'storybook/actions';
import { Radio as RadioComponent } from './Radio';

const meta: Meta<typeof RadioComponent> = {
  title: 'Form/Radio',
  component: RadioComponent,
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

export const Radio: Story = {
  args: {
    'aria-label': 'Amebaブログ',
    id: 'normal',
    name: 'blog',
  },
};

export const RadioChecked: Story = {
  args: {
    'aria-label': 'Amebaブログ',
    checked: true,
    id: 'checked',
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

export const RadioDisabledChecked: Story = {
  args: {
    'aria-label': 'Amebaブログ',
    checked: true,
    disabled: true,
    id: 'disabledChecked',
    name: 'blog',
  },
};

export const RadioWithText: Story = {
  render: (args) => (
    <>
      <fieldset
        style={{
          display: 'flex',
          gap: '20px',
          flexDirection: 'column',
          border: 'none',
          padding: 0,
          margin: 0,
        }}
      >
        <legend
          style={{
            color: 'var(--color-text-medium-emphasis)',
            display: 'block',
            fontSize: '0.875em',
            fontWeight: 'bold',
            lineHeight: 1.4,
            padding: 0,
            marginBottom: '16px',
          }}
        >
          サービスを選択
        </legend>
        <RadioComponent {...args} id="withText1" name="select">
          選択肢１
        </RadioComponent>
        <RadioComponent {...args} id="withText2" name="select">
          選択肢２：文言が長い時の表示を確認するための選択肢です。基本的にはここまで長い文言は推奨されませんが表示の確認用です
        </RadioComponent>
        <RadioComponent {...args} id="withText3" name="select">
          選択肢３
        </RadioComponent>
      </fieldset>
    </>
  ),
};
