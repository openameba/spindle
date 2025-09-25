import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { BreadcrumbItem } from './BreadcrumbItem';
import { BreadcrumbList as BreadcrumbListComponent } from './BreadcrumbList';

const meta: Meta<typeof BreadcrumbListComponent> = {
  title: 'Breadcrumb',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BreadcrumbList: Story = {
  render: () => (
    <>
      <BreadcrumbListComponent variant="emphasized">
        <BreadcrumbItem href="#">Top</BreadcrumbItem>
        <BreadcrumbItem href="#">Team</BreadcrumbItem>
        <BreadcrumbItem href="#" current>
          Amebaとは
        </BreadcrumbItem>
      </BreadcrumbListComponent>
    </>
  ),
};

export const BreadcrumbListWithoutBreadcrumbItem: Story = {
  render: () => (
    <>
      <BreadcrumbListComponent variant="emphasized">
        <a href="#top">Top</a>
        <a href="#team">Team</a>
        <a href="#about" aria-current="page">
          Amebaとは
        </a>
      </BreadcrumbListComponent>
    </>
  ),
};

export const NoHref: Story = {
  render: () => (
    <>
      <BreadcrumbListComponent variant="emphasized">
        <a href="#top">Top</a>
        <a href="#team">Team</a>
        <span aria-current="page">Amebaとは</span>
      </BreadcrumbListComponent>
    </>
  ),
};

export const Standard: Story = {
  render: () => (
    <>
      <BreadcrumbListComponent variant="standard">
        <BreadcrumbItem href="#">Top</BreadcrumbItem>
        <BreadcrumbItem href="#">Team</BreadcrumbItem>
        <BreadcrumbItem href="#" current>
          Amebaとは
        </BreadcrumbItem>
      </BreadcrumbListComponent>
    </>
  ),
};

export const Emphasized: Story = {
  render: () => (
    <>
      <BreadcrumbListComponent variant="emphasized">
        <BreadcrumbItem href="#">Top</BreadcrumbItem>
        <BreadcrumbItem href="#">Team</BreadcrumbItem>
        <BreadcrumbItem href="#" current>
          Amebaとは
        </BreadcrumbItem>
      </BreadcrumbListComponent>
    </>
  ),
};

export const Wrap: Story = {
  render: () => (
    <>
      <BreadcrumbListComponent variant="standard" wrap="wrap">
        <BreadcrumbItem href="#">Amebaとは</BreadcrumbItem>
        <BreadcrumbItem href="#">Ameヨコ (アメヨコ)</BreadcrumbItem>
        <BreadcrumbItem href="#">福利厚生・社内制度</BreadcrumbItem>
        <BreadcrumbItem href="#" current>
          「わたしたち、育休取得した経営陣です！」育休が2秒で快諾される、&quot;取るのが当たり前&quot;な環境とは
        </BreadcrumbItem>
      </BreadcrumbListComponent>
    </>
  ),
};

export const StandardOverflow: Story = {
  render: () => (
    <>
      <BreadcrumbListComponent variant="standard">
        <BreadcrumbItem href="#">Amebaとは</BreadcrumbItem>
        <BreadcrumbItem href="#">Ameヨコ (アメヨコ)</BreadcrumbItem>
        <BreadcrumbItem href="#">福利厚生・社内制度</BreadcrumbItem>
        <BreadcrumbItem href="#" current>
          「わたしたち、育休取得した経営陣です！」育休が2秒で快諾される、&quot;取るのが当たり前&quot;な環境とは
        </BreadcrumbItem>
      </BreadcrumbListComponent>
    </>
  ),
};

export const StandardOverflowMiddleItem: Story = {
  render: () => (
    <>
      <BreadcrumbListComponent variant="standard">
        <BreadcrumbItem href="#">Amebaとは</BreadcrumbItem>
        <BreadcrumbItem href="#" current>
          Ameヨコ (アメヨコ)
        </BreadcrumbItem>
        <BreadcrumbItem href="#">福利厚生・社内制度</BreadcrumbItem>
        <BreadcrumbItem href="#">
          「わたしたち、育休取得した経営陣です！」育休が2秒で快諾される、&quot;取るのが当たり前&quot;な環境とは
        </BreadcrumbItem>
      </BreadcrumbListComponent>
    </>
  ),
};
