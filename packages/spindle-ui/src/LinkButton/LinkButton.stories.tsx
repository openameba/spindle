import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';
import { LinkButton } from './LinkButton';
import { GraphBar, Present, PencilAdd, ChevronDownBold } from '../Icon';

const meta: Meta<typeof LinkButton> = {
  title: 'LinkButton',
  args: {
    onClick: action('clicked'),
    onMouseOver: action('mouse-over'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  render: (args) => (
    <>
      <LinkButton {...args} href="#" size="large" variant="contained">
        応援を送る
      </LinkButton>
      <LinkButton {...args} href="#" size="large" variant="outlined">
        ブログを書く
      </LinkButton>
      <LinkButton {...args} href="#" size="large" variant="neutral">
        詳細を見る
      </LinkButton>
      <LinkButton {...args} href="#" size="large" variant="danger">
        削除する
      </LinkButton>
      <LinkButton {...args} href="#" size="large" variant="lighted">
        フォロー中
      </LinkButton>
    </>
  ),
};

export const LargeFullWidth: Story = {
  render: (args) => (
    <>
      <LinkButton
        {...args}
        href="#"
        layout="fullWidth"
        size="large"
        variant="contained"
      >
        応援を送る
      </LinkButton>
      <LinkButton
        {...args}
        href="#"
        layout="fullWidth"
        size="large"
        variant="outlined"
      >
        ブログを書く
      </LinkButton>
      <LinkButton
        {...args}
        href="#"
        layout="fullWidth"
        size="large"
        variant="neutral"
      >
        詳細を見る
      </LinkButton>
      <LinkButton
        {...args}
        href="#"
        layout="fullWidth"
        size="large"
        variant="danger"
      >
        削除する
      </LinkButton>
      <LinkButton
        {...args}
        href="#"
        layout="fullWidth"
        size="large"
        variant="lighted"
      >
        フォロー中
      </LinkButton>
    </>
  ),
};

export const Medium: Story = {
  render: (args) => (
    <>
      <LinkButton {...args} href="#" size="medium" variant="contained">
        応援を送る
      </LinkButton>
      <LinkButton {...args} href="#" size="medium" variant="outlined">
        ブログを書く
      </LinkButton>
      <LinkButton {...args} href="#" size="medium" variant="neutral">
        詳細を見る
      </LinkButton>
      <LinkButton {...args} href="#" size="medium" variant="danger">
        削除する
      </LinkButton>
      <LinkButton {...args} href="#" size="medium" variant="lighted">
        フォロー中
      </LinkButton>
    </>
  ),
};

export const MediumFullWidth: Story = {
  render: (args) => (
    <>
      <LinkButton
        {...args}
        href="#"
        layout="fullWidth"
        size="medium"
        variant="contained"
      >
        応援を送る
      </LinkButton>
      <LinkButton
        {...args}
        href="#"
        layout="fullWidth"
        size="medium"
        variant="outlined"
      >
        ブログを書く
      </LinkButton>
      <LinkButton
        {...args}
        href="#"
        layout="fullWidth"
        size="medium"
        variant="neutral"
      >
        詳細を見る
      </LinkButton>
      <LinkButton
        {...args}
        href="#"
        layout="fullWidth"
        size="medium"
        variant="danger"
      >
        削除する
      </LinkButton>
      <LinkButton
        {...args}
        href="#"
        layout="fullWidth"
        size="medium"
        variant="lighted"
      >
        フォロー中
      </LinkButton>
    </>
  ),
};

export const Small: Story = {
  render: (args) => (
    <>
      <LinkButton {...args} href="#" size="small" variant="contained">
        応援を送る
      </LinkButton>
      <LinkButton {...args} href="#" size="small" variant="outlined">
        ブログを書く
      </LinkButton>
      <LinkButton {...args} href="#" size="small" variant="neutral">
        詳細を見る
      </LinkButton>
      <LinkButton {...args} href="#" size="small" variant="danger">
        削除する
      </LinkButton>
      <LinkButton {...args} href="#" size="small" variant="lighted">
        フォロー中
      </LinkButton>
    </>
  ),
};

export const SmallFullWidth: Story = {
  render: (args) => (
    <>
      <LinkButton
        {...args}
        href="#"
        layout="fullWidth"
        size="small"
        variant="contained"
      >
        応援を送る
      </LinkButton>
      <LinkButton
        {...args}
        href="#"
        layout="fullWidth"
        size="small"
        variant="outlined"
      >
        ブログを書く
      </LinkButton>
      <LinkButton
        {...args}
        href="#"
        layout="fullWidth"
        size="small"
        variant="neutral"
      >
        詳細を見る
      </LinkButton>
      <LinkButton
        {...args}
        href="#"
        layout="fullWidth"
        size="small"
        variant="danger"
      >
        削除する
      </LinkButton>
      <LinkButton
        {...args}
        href="#"
        layout="fullWidth"
        size="small"
        variant="lighted"
      >
        フォロー中
      </LinkButton>
    </>
  ),
};

export const WithIcon: Story = {
  render: (args) => (
    <>
      <LinkButton
        {...args}
        href="#"
        icon={<Present />}
        size="large"
        variant="contained"
      >
        応援を送る
      </LinkButton>
      <LinkButton
        {...args}
        href="#"
        icon={<PencilAdd />}
        size="medium"
        variant="outlined"
      >
        ブログを書く
      </LinkButton>
      <LinkButton
        {...args}
        href="#"
        icon={<GraphBar />}
        size="small"
        variant="neutral"
      >
        詳細を見る
      </LinkButton>
      <LinkButton
        {...args}
        href="#"
        icon={<ChevronDownBold />}
        iconPosition="end"
        size="large"
        variant="contained"
      >
        さらに表示
      </LinkButton>
      <LinkButton
        {...args}
        href="#"
        icon={<ChevronDownBold />}
        iconPosition="end"
        size="medium"
        variant="outlined"
      >
        もっと見る
      </LinkButton>
      <LinkButton
        {...args}
        href="#"
        icon={<ChevronDownBold />}
        iconPosition="end"
        size="small"
        variant="neutral"
      >
        さらに表示
      </LinkButton>
    </>
  ),
};

export const FullWidthWithIcon: Story = {
  render: (args) => (
    <>
      <LinkButton
        {...args}
        href="#"
        layout="fullWidth"
        icon={<Present />}
        size="large"
        variant="contained"
      >
        応援を送る
      </LinkButton>
      <LinkButton
        {...args}
        href="#"
        layout="fullWidth"
        icon={<PencilAdd />}
        size="medium"
        variant="outlined"
      >
        ブログを書く
      </LinkButton>
      <LinkButton
        {...args}
        href="#"
        layout="fullWidth"
        icon={<GraphBar />}
        size="small"
        variant="neutral"
      >
        詳細を見る
      </LinkButton>
      <LinkButton
        {...args}
        href="#"
        layout="fullWidth"
        icon={<ChevronDownBold />}
        iconPosition="end"
        size="large"
        variant="contained"
      >
        さらに表示
      </LinkButton>
      <LinkButton
        {...args}
        href="#"
        layout="fullWidth"
        icon={<ChevronDownBold />}
        iconPosition="end"
        size="medium"
        variant="outlined"
      >
        もっと見る
      </LinkButton>
      <LinkButton
        {...args}
        href="#"
        layout="fullWidth"
        icon={<ChevronDownBold />}
        iconPosition="end"
        size="small"
        variant="neutral"
      >
        さらに表示
      </LinkButton>
    </>
  ),
};
