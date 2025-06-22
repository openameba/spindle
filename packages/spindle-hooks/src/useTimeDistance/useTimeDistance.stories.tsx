import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useTimeDistance } from './useTimeDistance';

const Time = ({ date, options }: { date: string; options?: { relativeDate?: Date; locale?: 'ja'; interval?: number } }) => {
  const [dateString] = useTimeDistance(date, options);
  return <time dateTime={date}>{dateString}</time>;
};

const meta: Meta<typeof Time> = {
  title: 'useTimeDistance',
  component: Time,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    date: '2022-05-10T01:15:51.237Z',
  },
};

export const RelativeDate: Story = {
  args: {
    date: '2022-01-01T00:00:00.000Z',
    options: { relativeDate: new Date('2022-01-01T12:00:00.000Z') },
  },
};