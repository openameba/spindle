import type { Meta, StoryObj } from '@storybook/react';
import { InputLabel as InputLabelComponent } from './InputLabel';

const meta: Meta<typeof InputLabelComponent> = {
  title: 'Form/InputLabel',
  component: InputLabelComponent,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InputLabel: Story = {
  args: {
    id: 'comment',
    children: 'コメントを入力',
  },
};
