import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { LinkButton } from './LinkButton';
import { GraphBar, Present, PencilAdd, ChevronDownBold } from '../Icon';

const meta: Meta<typeof LinkButton> = {
  title: 'LinkButton',
  component: LinkButton,
  args: {
    onClick: action('clicked'),
    onMouseOver: action('action'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  render: () => (
    <>
      <LinkButton href="#" size="large" variant="contained">
        応援を送る
      </LinkButton>
      <LinkButton href="#" size="large" variant="outlined">
        ブログを書く
      </LinkButton>
      <LinkButton href="#" size="large" variant="neutral">
        詳細を見る
      </LinkButton>
      <LinkButton href="#" size="large" variant="danger">
        削除する
      </LinkButton>
      <LinkButton href="#" size="large" variant="lighted">
        フォロー中
      </LinkButton>
    </>
  ),
};

export const LargeFullWidth: Story = {
  render: () => (
    <>
      <LinkButton href="#" layout="fullWidth" size="large" variant="contained">
        応援を送る
      </LinkButton>
      <LinkButton href="#" layout="fullWidth" size="large" variant="outlined">
        ブログを書く
      </LinkButton>
      <LinkButton href="#" layout="fullWidth" size="large" variant="neutral">
        詳細を見る
      </LinkButton>
      <LinkButton href="#" layout="fullWidth" size="large" variant="danger">
        削除する
      </LinkButton>
      <LinkButton href="#" layout="fullWidth" size="large" variant="lighted">
        フォロー中
      </LinkButton>
    </>
  ),
};

export const Medium: Story = {
  render: () => (
    <>
      <LinkButton href="#" size="medium" variant="contained">
        応援を送る
      </LinkButton>
      <LinkButton href="#" size="medium" variant="outlined">
        ブログを書く
      </LinkButton>
      <LinkButton href="#" size="medium" variant="neutral">
        詳細を見る
      </LinkButton>
      <LinkButton href="#" size="medium" variant="danger">
        削除する
      </LinkButton>
      <LinkButton href="#" size="medium" variant="lighted">
        フォロー中
      </LinkButton>
    </>
  ),
};

export const MediumFullWidth: Story = {
  render: () => (
    <>
      <LinkButton href="#" layout="fullWidth" size="medium" variant="contained">
        応援を送る
      </LinkButton>
      <LinkButton href="#" layout="fullWidth" size="medium" variant="outlined">
        ブログを書く
      </LinkButton>
      <LinkButton href="#" layout="fullWidth" size="medium" variant="neutral">
        詳細を見る
      </LinkButton>
      <LinkButton href="#" layout="fullWidth" size="medium" variant="danger">
        削除する
      </LinkButton>
      <LinkButton href="#" layout="fullWidth" size="medium" variant="lighted">
        フォロー中
      </LinkButton>
    </>
  ),
};

export const Small: Story = {
  render: () => (
    <>
      <LinkButton href="#" size="small" variant="contained">
        応援を送る
      </LinkButton>
      <LinkButton href="#" size="small" variant="outlined">
        ブログを書く
      </LinkButton>
      <LinkButton href="#" size="small" variant="neutral">
        詳細を見る
      </LinkButton>
      <LinkButton href="#" size="small" variant="danger">
        削除する
      </LinkButton>
      <LinkButton href="#" size="small" variant="lighted">
        フォロー中
      </LinkButton>
    </>
  ),
};

export const SmallFullWidth: Story = {
  render: () => (
    <>
      <LinkButton href="#" layout="fullWidth" size="small" variant="contained">
        応援を送る
      </LinkButton>
      <LinkButton href="#" layout="fullWidth" size="small" variant="outlined">
        ブログを書く
      </LinkButton>
      <LinkButton href="#" layout="fullWidth" size="small" variant="neutral">
        詳細を見る
      </LinkButton>
      <LinkButton href="#" layout="fullWidth" size="small" variant="danger">
        削除する
      </LinkButton>
      <LinkButton href="#" layout="fullWidth" size="small" variant="lighted">
        フォロー中
      </LinkButton>
    </>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <>
      <LinkButton href="#" icon={<Present />} size="large" variant="contained">
        応援を送る
      </LinkButton>
      <LinkButton
        href="#"
        icon={<PencilAdd />}
        size="medium"
        variant="outlined"
      >
        ブログを書く
      </LinkButton>
      <LinkButton href="#" icon={<GraphBar />} size="small" variant="neutral">
        詳細を見る
      </LinkButton>
      <LinkButton
        href="#"
        icon={<ChevronDownBold />}
        iconPosition="end"
        size="large"
        variant="contained"
      >
        さらに表示
      </LinkButton>
      <LinkButton
        href="#"
        icon={<ChevronDownBold />}
        iconPosition="end"
        size="medium"
        variant="outlined"
      >
        もっと見る
      </LinkButton>
      <LinkButton
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
  render: () => (
    <>
      <LinkButton
        href="#"
        layout="fullWidth"
        icon={<Present />}
        size="large"
        variant="contained"
      >
        応援を送る
      </LinkButton>
      <LinkButton
        href="#"
        layout="fullWidth"
        icon={<PencilAdd />}
        size="medium"
        variant="outlined"
      >
        ブログを書く
      </LinkButton>
      <LinkButton
        href="#"
        layout="fullWidth"
        icon={<GraphBar />}
        size="small"
        variant="neutral"
      >
        詳細を見る
      </LinkButton>
      <LinkButton
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
