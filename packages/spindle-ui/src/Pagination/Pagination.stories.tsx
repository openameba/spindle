import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Pagination',
  component: Pagination,
  args: {
    onClick: action('clicked'),
    onMouseOver: action('action'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const current1total1: Story = {
  render: () => (
    <Pagination
      total={1}
      current={1}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const current1total2: Story = {
  render: () => (
    <Pagination
      total={2}
      current={1}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const current2total2: Story = {
  render: () => (
    <Pagination
      total={2}
      current={2}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const current1total3: Story = {
  render: () => (
    <Pagination
      total={3}
      current={1}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const current2total3: Story = {
  render: () => (
    <Pagination
      total={3}
      current={2}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const current3total3: Story = {
  render: () => (
    <Pagination
      total={3}
      current={3}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const current1total4: Story = {
  render: () => (
    <Pagination
      total={4}
      current={1}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const current2total4: Story = {
  render: () => (
    <Pagination
      total={4}
      current={2}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const current3total4: Story = {
  render: () => (
    <Pagination
      total={4}
      current={3}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const current4total4: Story = {
  render: () => (
    <Pagination
      total={4}
      current={4}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const current1total5: Story = {
  render: () => (
    <Pagination
      total={5}
      current={1}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const current2total5: Story = {
  render: () => (
    <Pagination
      total={5}
      current={2}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const current3total5: Story = {
  render: () => (
    <Pagination
      total={5}
      current={3}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const current4total5: Story = {
  render: () => (
    <Pagination
      total={5}
      current={4}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const current5total5: Story = {
  render: () => (
    <Pagination
      total={5}
      current={5}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const current1total6: Story = {
  render: () => (
    <Pagination
      total={6}
      current={1}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const current2total6: Story = {
  render: () => (
    <Pagination
      total={6}
      current={2}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const current3total6: Story = {
  render: () => (
    <Pagination
      total={6}
      current={3}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const current4total6: Story = {
  render: () => (
    <Pagination
      total={6}
      current={4}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const current5total6: Story = {
  render: () => (
    <Pagination
      total={6}
      current={5}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const current6total6: Story = {
  render: () => (
    <Pagination
      total={6}
      current={6}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const current1total7: Story = {
  render: () => (
    <Pagination
      total={7}
      current={1}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const current2total7: Story = {
  render: () => (
    <Pagination
      total={7}
      current={2}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const current3total7: Story = {
  render: () => (
    <Pagination
      total={7}
      current={3}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const current4total7: Story = {
  render: () => (
    <Pagination
      total={7}
      current={4}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const current5total7: Story = {
  render: () => (
    <Pagination
      total={7}
      current={5}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const current6total7: Story = {
  render: () => (
    <Pagination
      total={7}
      current={6}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const current7total7: Story = {
  render: () => (
    <Pagination
      total={7}
      current={7}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const current1total1000: Story = {
  render: () => (
    <Pagination
      total={1000}
      current={1}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const current2total1000: Story = {
  render: () => (
    <Pagination
      total={1000}
      current={2}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const current3total1000: Story = {
  render: () => (
    <Pagination
      total={1000}
      current={3}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const current4total1000: Story = {
  render: () => (
    <Pagination
      total={1000}
      current={4}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const current5total1000: Story = {
  render: () => (
    <Pagination
      total={1000}
      current={5}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const current200total1000: Story = {
  render: () => (
    <Pagination
      total={1000}
      current={200}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const current998total1000: Story = {
  render: () => (
    <Pagination
      total={1000}
      current={998}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const current999total1000: Story = {
  render: () => (
    <Pagination
      total={1000}
      current={999}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const current1000total1000: Story = {
  render: () => (
    <Pagination
      total={1000}
      current={1000}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const showTotalpropstrue: Story = {
  render: () => (
    <Pagination
      total={20}
      current={8}
      linkFollowType="all"
      showTotal={true}
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const onpagechangefunction: Story = {
  render: () => {
    const handleClick = (
      event: React.MouseEvent<HTMLAnchorElement>,
      pageNumber: number,
    ) => {
      event.preventDefault();
      action('onPageChange')(event, pageNumber);
    };

    return (
      <Pagination
        total={20}
        current={8}
        linkFollowType="all"
        createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
        onPageChange={(event, pageNumber) => {
          handleClick(event, pageNumber);
        }}
      />
    );
  },
};

export const linkFollowTypeall: Story = {
  render: () => (
    <Pagination
      total={7}
      current={2}
      linkFollowType="all"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const linkFollowTypenone: Story = {
  render: () => (
    <Pagination
      total={7}
      current={2}
      linkFollowType="none"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};

export const linkFollowTypefirstPage: Story = {
  render: () => (
    <Pagination
      total={7}
      current={2}
      linkFollowType="firstPage"
      createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
    />
  ),
};
