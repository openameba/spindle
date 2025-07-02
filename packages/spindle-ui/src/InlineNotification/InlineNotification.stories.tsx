import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InlineNotification } from './InlineNotification';
import { Information, ExclamationmarkCircleFill, CrossBold } from '../Icon';
import { VisiblePropsSample } from './InlineNotification.stories.example';

const meta: Meta<typeof InlineNotification.Frame> = {
  title: 'InlineNotification',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InformationNotification: Story = {
  render: () => (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <InlineNotification.Frame variant="information" visible>
      <InlineNotification.Icon>
        <Information aria-hidden="true" />
      </InlineNotification.Icon>
      <InlineNotification.Text>
        ブログの管理者が承認するまで、コメントが反映されない場合があります
      </InlineNotification.Text>
    </InlineNotification.Frame>
  ),
};

export const InformationEmphasis: Story = {
  render: () => (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <InlineNotification.Frame variant="information" emphasis visible>
      <InlineNotification.Icon>
        <Information aria-hidden="true" />
      </InlineNotification.Icon>
      <InlineNotification.Text>
        ブログの管理者が承認するまで、コメントが反映されない場合があります
      </InlineNotification.Text>
    </InlineNotification.Frame>
  ),
};

export const ConfirmationNotification: Story = {
  render: () => (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <InlineNotification.Frame variant="confirmation" visible>
      <InlineNotification.Icon>
        <Information aria-hidden="true" />
      </InlineNotification.Icon>
      <InlineNotification.Text>
        コメントが投稿されました
      </InlineNotification.Text>
    </InlineNotification.Frame>
  ),
};

export const ConfirmationEmphasis: Story = {
  render: () => (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <InlineNotification.Frame variant="confirmation" emphasis visible>
      <InlineNotification.Icon>
        <Information aria-hidden="true" />
      </InlineNotification.Icon>
      <InlineNotification.Text>
        コメントが投稿されました
      </InlineNotification.Text>
    </InlineNotification.Frame>
  ),
};

export const ErrorNotification: Story = {
  render: () => (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <InlineNotification.Frame variant="error" visible>
      <InlineNotification.Icon>
        <ExclamationmarkCircleFill aria-hidden="true" />
      </InlineNotification.Icon>
      <InlineNotification.Text>
        ファイル形式が正しくありません
      </InlineNotification.Text>
    </InlineNotification.Frame>
  ),
};

export const ErrorEmphasis: Story = {
  render: () => (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <InlineNotification.Frame variant="error" emphasis visible>
      <InlineNotification.Icon>
        <ExclamationmarkCircleFill aria-hidden="true" />
      </InlineNotification.Icon>
      <InlineNotification.Text>
        ファイル形式が正しくありません
      </InlineNotification.Text>
    </InlineNotification.Frame>
  ),
};

export const Inset: Story = {
  render: () => (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <InlineNotification.Frame variant="information" layout="inset" visible>
      <InlineNotification.Icon>
        <Information aria-hidden="true" />
      </InlineNotification.Icon>
      <InlineNotification.Text>
        ブログの管理者が承認するまで、コメントが反映されない場合があります
      </InlineNotification.Text>
    </InlineNotification.Frame>
  ),
};

export const Full: Story = {
  render: () => (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <InlineNotification.Frame variant="information" layout="full" visible>
      <InlineNotification.Icon>
        <Information aria-hidden="true" />
      </InlineNotification.Icon>
      <InlineNotification.Text>
        ブログの管理者が承認するまで、コメントが反映されない場合があります
      </InlineNotification.Text>
    </InlineNotification.Frame>
  ),
};

export const InlineNotificationwithIcon: Story = {
  render: () => (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <InlineNotification.Frame variant="information" visible>
      <InlineNotification.Icon>
        <Information aria-hidden="true" />
      </InlineNotification.Icon>
      <InlineNotification.Text>
        ブログの管理者が承認するまで、コメントが反映されない場合があります
      </InlineNotification.Text>
    </InlineNotification.Frame>
  ),
};

export const InlineNotificationwithAvatar: Story = {
  render: () => (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <InlineNotification.Frame variant="information" visible>
      <InlineNotification.Avatar src="/avatar.png" alt="" />
      <InlineNotification.Text>
        Ameba運営局よりメッセージが届きました
      </InlineNotification.Text>
    </InlineNotification.Frame>
  ),
};

export const InlineNotificationwithIconButton: Story = {
  render: () => (
    <>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error */}
      <InlineNotification.Frame variant="information" visible>
        <InlineNotification.Icon>
          <Information aria-hidden="true" />
        </InlineNotification.Icon>
        <InlineNotification.Text>
          ブログの管理者が承認するまで、コメントが反映されない場合があります
        </InlineNotification.Text>
        <InlineNotification.IconButton>
          <CrossBold aria-label="とじる" />
        </InlineNotification.IconButton>
      </InlineNotification.Frame>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error */}
      <InlineNotification.Frame variant="information" emphasis visible>
        <InlineNotification.Icon>
          <Information aria-hidden="true" />
        </InlineNotification.Icon>
        <InlineNotification.Text>
          ブログの管理者が承認するまで、コメントが反映されない場合があります
        </InlineNotification.Text>
        <InlineNotification.IconButton>
          <CrossBold aria-label="とじる" />
        </InlineNotification.IconButton>
      </InlineNotification.Frame>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error */}
      <InlineNotification.Frame variant="confirmation" visible>
        <InlineNotification.Icon>
          <Information aria-hidden="true" />
        </InlineNotification.Icon>
        <InlineNotification.Text>
          コメントが投稿されました
        </InlineNotification.Text>
        <InlineNotification.IconButton>
          <CrossBold aria-label="とじる" />
        </InlineNotification.IconButton>
      </InlineNotification.Frame>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error */}
      <InlineNotification.Frame variant="confirmation" emphasis visible>
        <InlineNotification.Icon>
          <Information aria-hidden="true" />
        </InlineNotification.Icon>
        <InlineNotification.Text>
          コメントが投稿されました
        </InlineNotification.Text>
        <InlineNotification.IconButton>
          <CrossBold aria-label="とじる" />
        </InlineNotification.IconButton>
      </InlineNotification.Frame>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error */}
      <InlineNotification.Frame variant="error" visible>
        <InlineNotification.Icon>
          <ExclamationmarkCircleFill aria-hidden="true" />
        </InlineNotification.Icon>
        <InlineNotification.Text>
          ファイル形式が正しくありません
        </InlineNotification.Text>
        <InlineNotification.IconButton>
          <CrossBold aria-label="とじる" />
        </InlineNotification.IconButton>
      </InlineNotification.Frame>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error */}
      <InlineNotification.Frame variant="error" emphasis visible>
        <InlineNotification.Icon>
          <ExclamationmarkCircleFill aria-hidden="true" />
        </InlineNotification.Icon>
        <InlineNotification.Text>
          ファイル形式が正しくありません
        </InlineNotification.Text>
        <InlineNotification.IconButton>
          <CrossBold aria-label="とじる" />
        </InlineNotification.IconButton>
      </InlineNotification.Frame>
    </>
  ),
};

export const InlineNotificationwithTextButton: Story = {
  render: () => (
    <>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error */}
      <InlineNotification.Frame variant="information" visible>
        <InlineNotification.Icon>
          <Information aria-hidden="true" />
        </InlineNotification.Icon>
        <InlineNotification.Text>
          ブログの管理者が承認するまで、コメントが反映されない場合があります
        </InlineNotification.Text>
        <InlineNotification.TextButton>とじる</InlineNotification.TextButton>
      </InlineNotification.Frame>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error */}
      <InlineNotification.Frame variant="information" emphasis visible>
        <InlineNotification.Icon>
          <Information aria-hidden="true" />
        </InlineNotification.Icon>
        <InlineNotification.Text>
          ブログの管理者が承認するまで、コメントが反映されない場合があります
        </InlineNotification.Text>
        <InlineNotification.TextButton>とじる</InlineNotification.TextButton>
      </InlineNotification.Frame>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error */}
      <InlineNotification.Frame variant="confirmation" visible>
        <InlineNotification.Icon>
          <Information aria-hidden="true" />
        </InlineNotification.Icon>
        <InlineNotification.Text>
          コメントが投稿されました
        </InlineNotification.Text>
        <InlineNotification.TextButton>とじる</InlineNotification.TextButton>
      </InlineNotification.Frame>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error */}
      <InlineNotification.Frame variant="confirmation" emphasis visible>
        <InlineNotification.Icon>
          <Information aria-hidden="true" />
        </InlineNotification.Icon>
        <InlineNotification.Text>
          コメントが投稿されました
        </InlineNotification.Text>
        <InlineNotification.TextButton>とじる</InlineNotification.TextButton>
      </InlineNotification.Frame>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error */}
      <InlineNotification.Frame variant="error" visible>
        <InlineNotification.Icon>
          <ExclamationmarkCircleFill aria-hidden="true" />
        </InlineNotification.Icon>
        <InlineNotification.Text>
          ファイル形式が正しくありません
        </InlineNotification.Text>
        <InlineNotification.TextButton>とじる</InlineNotification.TextButton>
      </InlineNotification.Frame>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error */}
      <InlineNotification.Frame variant="error" emphasis visible>
        <InlineNotification.Icon>
          <ExclamationmarkCircleFill aria-hidden="true" />
        </InlineNotification.Icon>
        <InlineNotification.Text>
          ファイル形式が正しくありません
        </InlineNotification.Text>
        <InlineNotification.TextButton>とじる</InlineNotification.TextButton>
      </InlineNotification.Frame>
    </>
  ),
};

export const InlineNotificationwithButton: Story = {
  render: () => (
    <>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error */}
      <InlineNotification.Frame variant="information" visible>
        <InlineNotification.Icon>
          <Information aria-hidden="true" />
        </InlineNotification.Icon>
        <InlineNotification.Text>
          ブログの管理者が承認するまで、コメントが反映されない場合があります
        </InlineNotification.Text>
        <InlineNotification.Button>確認</InlineNotification.Button>
      </InlineNotification.Frame>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error */}
      <InlineNotification.Frame variant="information" emphasis visible>
        <InlineNotification.Icon>
          <Information aria-hidden="true" />
        </InlineNotification.Icon>
        <InlineNotification.Text>
          ブログの管理者が承認するまで、コメントが反映されない場合があります
        </InlineNotification.Text>
        <InlineNotification.Button>詳細へ</InlineNotification.Button>
      </InlineNotification.Frame>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error */}
      <InlineNotification.Frame variant="confirmation" visible>
        <InlineNotification.Icon>
          <Information aria-hidden="true" />
        </InlineNotification.Icon>
        <InlineNotification.Text>
          コメントが投稿されました
        </InlineNotification.Text>
        <InlineNotification.Button>確認する</InlineNotification.Button>
      </InlineNotification.Frame>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error */}
      <InlineNotification.Frame variant="confirmation" emphasis visible>
        <InlineNotification.Icon>
          <Information aria-hidden="true" />
        </InlineNotification.Icon>
        <InlineNotification.Text>
          コメントが投稿されました
        </InlineNotification.Text>
        <InlineNotification.Button>投稿を確認</InlineNotification.Button>
      </InlineNotification.Frame>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error */}
      <InlineNotification.Frame variant="error" visible>
        <InlineNotification.Icon>
          <ExclamationmarkCircleFill aria-hidden="true" />
        </InlineNotification.Icon>
        <InlineNotification.Text>
          ファイル形式が正しくありません
        </InlineNotification.Text>
        <InlineNotification.Button>再アップロード</InlineNotification.Button>
      </InlineNotification.Frame>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error */}
      <InlineNotification.Frame variant="error" emphasis visible>
        <InlineNotification.Icon>
          <ExclamationmarkCircleFill aria-hidden="true" />
        </InlineNotification.Icon>
        <InlineNotification.Text>
          ファイル形式が正しくありません
        </InlineNotification.Text>
        <InlineNotification.Button>
          画像をアップロード
        </InlineNotification.Button>
      </InlineNotification.Frame>
    </>
  ),
};

export const Visible: Story = {
  render: () => <VisiblePropsSample />,
};
