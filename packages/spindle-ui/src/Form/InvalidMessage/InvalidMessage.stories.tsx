import type { Meta, StoryObj } from '@storybook/react';
import { InvalidMessage as InvalidMessageComponent } from './InvalidMessage';

const meta: Meta<typeof InvalidMessageComponent> = {
  title: 'Form/InvalidMessage',
  component: InvalidMessageComponent,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InvalidMessage: Story = {
  args: {
    visible: true,
    children: 'ファイル形式が正しくありません',
  },
};
