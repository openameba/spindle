import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BottomButton } from './BottomButton';
import { Button } from '../Button/Button';

const meta: Meta<typeof BottomButton> = {
  title: 'BottomButton',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FixedPosition: Story = {
  render: () => (
    <>
      <div>
        <BottomButton position="fixed">
          <Button size="large" variant="contained" layout="fullWidth">
            新規登録
          </Button>
        </BottomButton>
      </div>
    </>
  ),
};

export const StickyPosition: Story = {
  render: () => (
    <>
      <BottomButton position="sticky">
        <Button size="large" variant="contained" layout="fullWidth">
          新規登録
        </Button>
      </BottomButton>
    </>
  ),
};
