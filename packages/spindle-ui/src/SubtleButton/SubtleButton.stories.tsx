import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';
import { SubtleButton } from './SubtleButton';

const meta: Meta<typeof SubtleButton> = {
  title: 'SubtleButton',
  component: SubtleButton,
  args: {
    onClick: action('clicked'),
    onMouseOver: action('mouse-over'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    size: 'large',
    children: 'とじる',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    children: 'とじる',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'とじる',
  },
};
