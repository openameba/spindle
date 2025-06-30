import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Clock } from './index';

const meta: Meta<typeof Clock> = {
  title: 'Icon',
  component: Clock,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ClockIcon: Story = {
  render: () => <Clock aria-label="Clock" />,
};

export const ClockIconOverridingColor: Story = {
  render: () => (
    <>
      <p style={{ color: 'green' }}>
        <Clock aria-label="Clock" />
      </p>
    </>
  ),
};

export const ClockIconOverridingSize: Story = {
  render: () => <Clock aria-label="Clock" height="200" width="200" />,
};
