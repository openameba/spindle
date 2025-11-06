import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ButtonSwitch } from './ButtonSwitch';
import { ButtonSwitchExample } from './ButtonSwitch.stories.example';

const meta: Meta<typeof ButtonSwitch> = {
  title: 'Form/ButtonSwitch',
  component: ButtonSwitch,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Twooptions: Story = {
  render: () => (
    <ButtonSwitchExample
      defaultValue="prefer"
      options={[
        { value: 'prefer', label: 'できれば' },
        { value: 'required', label: '必須' },
      ]}
    />
  ),
};

export const Threeoptions: Story = {
  render: () => (
    <ButtonSwitchExample
      defaultValue="one"
      options={[
        { value: 'one', label: 'ひとつ' },
        { value: 'multiple', label: '複数' },
        { value: 'all', label: '全部' },
      ]}
    />
  ),
};

export const WithExternalLabel: Story = {
  render: () => (
    <div className="preview">
      <h2 id="label-id">ラベル</h2>
      <ButtonSwitchExample
        defaultValue="prefer"
        ariaLabelledby="label-id"
        options={[
          { value: 'prefer', label: 'できれば' },
          { value: 'required', label: '必須' },
        ]}
      />
    </div>
  ),
};
