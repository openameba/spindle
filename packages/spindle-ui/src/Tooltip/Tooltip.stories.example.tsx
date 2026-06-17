import React, { useState } from 'react';

import Information from '../Icon/Information';
import { IconButton } from '../IconButton';
import { Tooltip } from './Tooltip';

export function DefaultOpen() {
  return (
    <div
      style={{
        padding: '100px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Tooltip.Frame defaultOpen={false}>
        <Tooltip.Trigger>
          {(props) => (
            <IconButton
              {...props}
              size="exSmall"
              variant="neutral"
              aria-label="詳細情報"
            >
              <Information aria-hidden="true" />
            </IconButton>
          )}
        </Tooltip.Trigger>
        <Tooltip.Content>
          これは補足情報です。hover または focus で表示されます。
        </Tooltip.Content>
      </Tooltip.Frame>
    </div>
  );
}

export function InitialOpen() {
  return (
    <div
      style={{
        padding: '100px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Tooltip.Frame defaultOpen>
        <Tooltip.Trigger>
          {(props) => (
            <IconButton
              {...props}
              size="exSmall"
              variant="neutral"
              aria-label="詳細情報"
            >
              <Information aria-hidden="true" />
            </IconButton>
          )}
        </Tooltip.Trigger>
        <Tooltip.Content>
          これは初期表示の Tooltip
          です。閉じるボタンをクリックして閉じることができます。
        </Tooltip.Content>
      </Tooltip.Frame>
    </div>
  );
}

export function WithOnClose() {
  const [hasSeenTooltip, setHasSeenTooltip] = useState(false);

  return (
    <div
      style={{
        padding: '100px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {!hasSeenTooltip ? (
        <Tooltip.Frame
          defaultOpen
          onClose={() => {
            setHasSeenTooltip(true);
          }}
        >
          <Tooltip.Trigger>
            {(props) => (
              <IconButton
                {...props}
                size="exSmall"
                variant="neutral"
                aria-label="詳細情報"
              >
                <Information aria-hidden="true" />
              </IconButton>
            )}
          </Tooltip.Trigger>
          <Tooltip.Content>
            これは一度閉じたら再表示されない Tooltip
            です。チュートリアルや新機能案内などに使用します。
          </Tooltip.Content>
        </Tooltip.Frame>
      ) : (
        <IconButton size="exSmall" variant="neutral" aria-label="詳細情報">
          <Information aria-hidden="true" />
        </IconButton>
      )}
    </div>
  );
}

export function VariantInformation() {
  return (
    <div
      style={{
        padding: '100px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Tooltip.Frame defaultOpen variant="information">
        <Tooltip.Trigger>
          {(props) => (
            <IconButton
              {...props}
              size="exSmall"
              variant="neutral"
              aria-label="詳細情報"
            >
              <Information aria-hidden="true" />
            </IconButton>
          )}
        </Tooltip.Trigger>
        <Tooltip.Content>補足情報を伝えるためのTooltipです。</Tooltip.Content>
      </Tooltip.Frame>
    </div>
  );
}

export function VariantConfirmation() {
  return (
    <div
      style={{
        padding: '100px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Tooltip.Frame defaultOpen variant="confirmation">
        <Tooltip.Trigger>
          {(props) => (
            <IconButton
              {...props}
              size="exSmall"
              variant="neutral"
              aria-label="詳細情報"
            >
              <Information aria-hidden="true" />
            </IconButton>
          )}
        </Tooltip.Trigger>
        <Tooltip.Content>
          訴求したい内容を伝えるためのTooltipです。
        </Tooltip.Content>
      </Tooltip.Frame>
    </div>
  );
}

export function VariantError() {
  return (
    <div
      style={{
        padding: '100px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Tooltip.Frame defaultOpen variant="error">
        <Tooltip.Trigger>
          {(props) => (
            <IconButton
              {...props}
              size="exSmall"
              variant="neutral"
              aria-label="詳細情報"
            >
              <Information aria-hidden="true" />
            </IconButton>
          )}
        </Tooltip.Trigger>
        <Tooltip.Content>
          エラーメッセージを表示するためのTooltipです。
        </Tooltip.Content>
      </Tooltip.Frame>
    </div>
  );
}

export function DirectionTop() {
  return (
    <div
      style={{
        padding: '100px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Tooltip.Frame defaultOpen direction="top">
        <Tooltip.Trigger>
          {(props) => (
            <IconButton
              {...props}
              size="exSmall"
              variant="neutral"
              aria-label="詳細情報"
            >
              <Information aria-hidden="true" />
            </IconButton>
          )}
        </Tooltip.Trigger>
        <Tooltip.Content>
          トリガーの下に表示され、ポインターが上を指します。
        </Tooltip.Content>
      </Tooltip.Frame>
    </div>
  );
}

export function DirectionBottom() {
  return (
    <div
      style={{
        padding: '100px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Tooltip.Frame defaultOpen direction="bottom">
        <Tooltip.Trigger>
          {(props) => (
            <IconButton
              {...props}
              size="exSmall"
              variant="neutral"
              aria-label="詳細情報"
            >
              <Information aria-hidden="true" />
            </IconButton>
          )}
        </Tooltip.Trigger>
        <Tooltip.Content>
          トリガーの上に表示され、ポインターが下を指します。
        </Tooltip.Content>
      </Tooltip.Frame>
    </div>
  );
}

export function DirectionLeft() {
  return (
    <div
      style={{
        padding: '100px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Tooltip.Frame defaultOpen direction="left">
        <Tooltip.Trigger>
          {(props) => (
            <IconButton
              {...props}
              size="exSmall"
              variant="neutral"
              aria-label="詳細情報"
            >
              <Information aria-hidden="true" />
            </IconButton>
          )}
        </Tooltip.Trigger>
        <Tooltip.Content>
          トリガーの右に表示され、ポインターが左を指します。
        </Tooltip.Content>
      </Tooltip.Frame>
    </div>
  );
}

export function DirectionRight() {
  return (
    <div
      style={{
        padding: '100px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Tooltip.Frame defaultOpen direction="right">
        <Tooltip.Trigger>
          {(props) => (
            <IconButton
              {...props}
              size="exSmall"
              variant="neutral"
              aria-label="詳細情報"
            >
              <Information aria-hidden="true" />
            </IconButton>
          )}
        </Tooltip.Trigger>
        <Tooltip.Content>
          トリガーの左に表示され、ポインターが右を指します。
        </Tooltip.Content>
      </Tooltip.Frame>
    </div>
  );
}

export function PositionCenter() {
  return (
    <div
      style={{
        padding: '100px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Tooltip.Frame defaultOpen position="center">
        <Tooltip.Trigger>
          {(props) => (
            <IconButton
              {...props}
              size="exSmall"
              variant="neutral"
              aria-label="詳細情報"
            >
              <Information aria-hidden="true" />
            </IconButton>
          )}
        </Tooltip.Trigger>
        <Tooltip.Content>
          ポインターがトリガーの中央に配置されます。
        </Tooltip.Content>
      </Tooltip.Frame>
    </div>
  );
}

export function PositionStart() {
  return (
    <div
      style={{
        padding: '100px',
        display: 'flex',
        justifyContent: 'flex-start',
      }}
    >
      <Tooltip.Frame defaultOpen position="start">
        <Tooltip.Trigger>
          {(props) => (
            <IconButton
              {...props}
              size="exSmall"
              variant="neutral"
              aria-label="詳細情報"
            >
              <Information aria-hidden="true" />
            </IconButton>
          )}
        </Tooltip.Trigger>
        <Tooltip.Content>
          ポインターがTooltipの開始位置寄りに配置されます。
        </Tooltip.Content>
      </Tooltip.Frame>
    </div>
  );
}

export function PositionEnd() {
  return (
    <div
      style={{
        padding: '100px',
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <Tooltip.Frame defaultOpen position="end">
        <Tooltip.Trigger>
          {(props) => (
            <IconButton
              {...props}
              size="exSmall"
              variant="neutral"
              aria-label="詳細情報"
            >
              <Information aria-hidden="true" />
            </IconButton>
          )}
        </Tooltip.Trigger>
        <Tooltip.Content>
          ポインターがTooltipの終了位置寄りに配置されます。
        </Tooltip.Content>
      </Tooltip.Frame>
    </div>
  );
}

export function PositionEdgeStart() {
  return (
    <div style={{ padding: '24px', display: 'flex' }}>
      <Tooltip.Frame defaultOpen position="edgeStart">
        <Tooltip.Trigger>
          {(props) => (
            <IconButton
              {...props}
              size="exSmall"
              variant="neutral"
              aria-label="詳細情報"
            >
              <Information aria-hidden="true" />
            </IconButton>
          )}
        </Tooltip.Trigger>
        <Tooltip.Content>
          トリガーが画面端から 16-36px の範囲にある場合に使用します。
        </Tooltip.Content>
      </Tooltip.Frame>
    </div>
  );
}

export function PositionEdgeEnd() {
  return (
    <div
      style={{
        padding: '24px',
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <Tooltip.Frame defaultOpen position="edgeEnd">
        <Tooltip.Trigger>
          {(props) => (
            <IconButton
              {...props}
              size="exSmall"
              variant="neutral"
              aria-label="詳細情報"
            >
              <Information aria-hidden="true" />
            </IconButton>
          )}
        </Tooltip.Trigger>
        <Tooltip.Content>
          トリガーが画面端から 16-36px の範囲にある場合に使用します。
        </Tooltip.Content>
      </Tooltip.Frame>
    </div>
  );
}

export function LongText() {
  return (
    <div
      style={{
        padding: '100px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Tooltip.Frame defaultOpen>
        <Tooltip.Trigger>
          {(props) => (
            <IconButton
              {...props}
              size="exSmall"
              variant="neutral"
              aria-label="詳細情報"
            >
              <Information aria-hidden="true" />
            </IconButton>
          )}
        </Tooltip.Trigger>
        <Tooltip.Content>
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </Tooltip.Content>
      </Tooltip.Frame>
    </div>
  );
}
