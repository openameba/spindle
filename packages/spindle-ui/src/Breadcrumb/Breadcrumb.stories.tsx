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
        <BreadcrumbItem href="https://about.ameba.jp/">Top</BreadcrumbItem>
        <BreadcrumbItem href="https://about.ameba.jp/">Team</BreadcrumbItem>
        <BreadcrumbItem current>Amebaとは</BreadcrumbItem>
      </BreadcrumbListComponent>
    </>
  ),
};

export const BreadcrumbListWithoutBreadcrumbItem: Story = {
  render: () => (
    <>
      <BreadcrumbListComponent variant="emphasized">
        <a href="https://about.ameba.jp/">Top</a>
        <a href="https://about.ameba.jp/">Team</a>
        <span aria-current="page">Amebaとは</span>
      </BreadcrumbListComponent>
    </>
  ),
};

export const NoHref: Story = {
  render: () => (
    <>
      <BreadcrumbListComponent variant="emphasized">
        <a href="https://about.ameba.jp/">Top</a>
        <a href="https://about.ameba.jp/">Team</a>
        <span aria-current="page">Amebaとは</span>
      </BreadcrumbListComponent>
    </>
  ),
};

export const Standard: Story = {
  render: () => (
    <>
      <BreadcrumbListComponent variant="standard">
        <BreadcrumbItem href="https://about.ameba.jp/">Top</BreadcrumbItem>
        <BreadcrumbItem href="https://about.ameba.jp/">Team</BreadcrumbItem>
        <BreadcrumbItem current>Amebaとは</BreadcrumbItem>
      </BreadcrumbListComponent>
    </>
  ),
};

export const Emphasized: Story = {
  render: () => (
    <>
      <BreadcrumbListComponent variant="emphasized">
        <BreadcrumbItem href="https://about.ameba.jp/">Top</BreadcrumbItem>
        <BreadcrumbItem href="https://about.ameba.jp/">Team</BreadcrumbItem>
        <BreadcrumbItem current>Amebaとは</BreadcrumbItem>
      </BreadcrumbListComponent>
    </>
  ),
};

export const Wrap: Story = {
  render: () => (
    <>
      <BreadcrumbListComponent variant="standard" wrap="wrap">
        <BreadcrumbItem href="https://about.ameba.jp/">
          Amebaとは
        </BreadcrumbItem>
        <BreadcrumbItem href="https://about.ameba.jp/">
          Ameヨコ (アメヨコ)
        </BreadcrumbItem>
        <BreadcrumbItem href="https://about.ameba.jp/">
          福利厚生・社内制度
        </BreadcrumbItem>
        <BreadcrumbItem current>
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
        <BreadcrumbItem href="https://about.ameba.jp/">
          Amebaとは
        </BreadcrumbItem>
        <BreadcrumbItem href="https://about.ameba.jp/">
          Ameヨコ (アメヨコ)
        </BreadcrumbItem>
        <BreadcrumbItem href="https://about.ameba.jp/">
          福利厚生・社内制度
        </BreadcrumbItem>
        <BreadcrumbItem current>
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
        <BreadcrumbItem href="https://about.ameba.jp/">
          Amebaとは
        </BreadcrumbItem>
        <BreadcrumbItem current>Ameヨコ (アメヨコ)</BreadcrumbItem>
        <BreadcrumbItem href="https://about.ameba.jp/">
          福利厚生・社内制度
        </BreadcrumbItem>
        <BreadcrumbItem href="https://about.ameba.jp/">
          「わたしたち、育休取得した経営陣です！」育休が2秒で快諾される、&quot;取るのが当たり前&quot;な環境とは
        </BreadcrumbItem>
      </BreadcrumbListComponent>
    </>
  ),
};
