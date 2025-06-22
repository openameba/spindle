import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BreadcrumbList } from './BreadcrumbList';
import { BreadcrumbItem } from './BreadcrumbItem';

const meta: Meta<typeof BreadcrumbList> = {
  title: 'Breadcrumb',
  component: BreadcrumbList,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BreadcrumbListStory: Story = {
  render: () => (
    <>
      <BreadcrumbList variant="emphasized">
        <BreadcrumbItem href="#">Top</BreadcrumbItem>
        <BreadcrumbItem href="#">Team</BreadcrumbItem>
        <BreadcrumbItem href="#" current>
          Amebaとは
        </BreadcrumbItem>
      </BreadcrumbList>
    </>
  ),
};

export const BreadcrumbListWithoutBreadcrumbItem: Story = {
  render: () => (
    <>
      <BreadcrumbList variant="emphasized">
        <a href="#">Top</a>
        <a href="#">Team</a>
        <a href="#" aria-current="page">
          Amebaとは
        </a>
      </BreadcrumbList>
    </>
  ),
};

export const NoHref: Story = {
  render: () => (
    <>
      <BreadcrumbList variant="emphasized">
        <a href="#">Top</a>
        <a href="#">Team</a>
        <a aria-current="page">Amebaとは</a>
      </BreadcrumbList>
    </>
  ),
};

export const Standard: Story = {
  render: () => (
    <>
      <BreadcrumbList variant="standard">
        <BreadcrumbItem href="#">Top</BreadcrumbItem>
        <BreadcrumbItem href="#">Team</BreadcrumbItem>
        <BreadcrumbItem href="#" current>
          Amebaとは
        </BreadcrumbItem>
      </BreadcrumbList>
    </>
  ),
};

export const Emphasized: Story = {
  render: () => (
    <>
      <BreadcrumbList variant="emphasized">
        <BreadcrumbItem href="#">Top</BreadcrumbItem>
        <BreadcrumbItem href="#">Team</BreadcrumbItem>
        <BreadcrumbItem href="#" current>
          Amebaとは
        </BreadcrumbItem>
      </BreadcrumbList>
    </>
  ),
};

export const Wrap: Story = {
  render: () => (
    <>
      <BreadcrumbList variant="standard" wrap="wrap">
        <BreadcrumbItem href="#">Amebaとは</BreadcrumbItem>
        <BreadcrumbItem href="#">Ameヨコ (アメヨコ)</BreadcrumbItem>
        <BreadcrumbItem href="#">福利厚生・社内制度</BreadcrumbItem>
        <BreadcrumbItem href="#" current>
          「わたしたち、育休取得した経営陣です！」育休が2秒で快諾される、&quot;取るのが当たり前&quot;な環境とは
        </BreadcrumbItem>
      </BreadcrumbList>
    </>
  ),
};

export const StandardOverflow: Story = {
  render: () => (
    <>
      <BreadcrumbList variant="standard">
        <BreadcrumbItem href="#">Amebaとは</BreadcrumbItem>
        <BreadcrumbItem href="#">Ameヨコ (アメヨコ)</BreadcrumbItem>
        <BreadcrumbItem href="#">福利厚生・社内制度</BreadcrumbItem>
        <BreadcrumbItem href="#" current>
          「わたしたち、育休取得した経営陣です！」育休が2秒で快諾される、&quot;取るのが当たり前&quot;な環境とは
        </BreadcrumbItem>
      </BreadcrumbList>
    </>
  ),
};

export const StandardOverflowMiddleItem: Story = {
  render: () => (
    <>
      <BreadcrumbList variant="standard">
        <BreadcrumbItem href="#">Amebaとは</BreadcrumbItem>
        <BreadcrumbItem href="#" current>
          Ameヨコ (アメヨコ)
        </BreadcrumbItem>
        <BreadcrumbItem href="#">福利厚生・社内制度</BreadcrumbItem>
        <BreadcrumbItem href="#">
          「わたしたち、育休取得した経営陣です！」育休が2秒で快諾される、&quot;取るのが当たり前&quot;な環境とは
        </BreadcrumbItem>
      </BreadcrumbList>
    </>
  ),
};
