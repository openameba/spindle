import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from '../Button/Button';
import { BottomButton } from './BottomButton';

const meta: Meta<typeof BottomButton> = {
  title: 'BottomButton',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FixedPosition: Story = {
  render: () => (
    <div style={{ '--BottomButton-z-index': 2 }}>
      <BottomButton position="fixed">
        <Button size="large" variant="contained" layout="fullWidth">
          新規登録
        </Button>
      </BottomButton>
    </div>
  ),
};

export const StickyPosition: Story = {
  render: () => (
    <BottomButton position="sticky">
      <Button size="large" variant="contained" layout="fullWidth">
        新規登録
      </Button>
    </BottomButton>
  ),
};
