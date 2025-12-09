import { jest } from '@jest/globals';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import Information from '../Icon/Information';
import { IconButton } from '../IconButton';
import { Tooltip } from './Tooltip';

describe('<Tooltip />', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'ontouchstart', {
      writable: true,
      value: undefined,
    });
    Object.defineProperty(navigator, 'maxTouchPoints', {
      writable: true,
      value: 0,
    });
  });

  describe('共通', () => {
    test('aria-describedby が自動的に設定される', () => {
      render(
        <Tooltip.Frame>
          <Tooltip.Trigger>
            {(props) => (
              <IconButton {...props} aria-label="詳細情報">
                <Information aria-hidden="true" />
              </IconButton>
            )}
          </Tooltip.Trigger>
          <Tooltip.Content>補足情報</Tooltip.Content>
        </Tooltip.Frame>,
      );

      const trigger = screen.getByRole('button', { name: '詳細情報' });
      expect(trigger).toHaveAttribute('aria-describedby');
    });
  });

  describe('defaultOpen={false}の場合', () => {
    test('初期状態では表示されない', () => {
      render(
        <Tooltip.Frame defaultOpen={false}>
          <Tooltip.Trigger>
            {(props) => (
              <IconButton {...props} aria-label="詳細情報">
                <Information aria-hidden="true" />
              </IconButton>
            )}
          </Tooltip.Trigger>
          <Tooltip.Content>補足情報</Tooltip.Content>
        </Tooltip.Frame>,
      );

      expect(screen.queryByText('補足情報')).not.toBeInTheDocument();
    });

    test('hover時に表示される', async () => {
      render(
        <Tooltip.Frame defaultOpen={false}>
          <Tooltip.Trigger>
            {(props) => (
              <IconButton {...props} aria-label="詳細情報">
                <Information aria-hidden="true" />
              </IconButton>
            )}
          </Tooltip.Trigger>
          <Tooltip.Content>補足情報</Tooltip.Content>
        </Tooltip.Frame>,
      );

      const trigger = screen.getByRole('button', { name: '詳細情報' });
      fireEvent.mouseEnter(trigger);

      await waitFor(() => {
        expect(screen.getByText('補足情報')).toBeInTheDocument();
      });
    });

    test('マウスを離すと非表示になる', async () => {
      render(
        <Tooltip.Frame defaultOpen={false}>
          <Tooltip.Trigger>
            {(props) => (
              <IconButton {...props} aria-label="詳細情報">
                <Information aria-hidden="true" />
              </IconButton>
            )}
          </Tooltip.Trigger>
          <Tooltip.Content>補足情報</Tooltip.Content>
        </Tooltip.Frame>,
      );

      const trigger = screen.getByRole('button', { name: '詳細情報' });
      fireEvent.mouseEnter(trigger);

      await waitFor(() => {
        expect(screen.getByText('補足情報')).toBeInTheDocument();
      });

      fireEvent.mouseLeave(trigger);

      await waitFor(() => {
        expect(screen.queryByText('補足情報')).not.toBeInTheDocument();
      });
    });

    test('focus時に表示される', async () => {
      render(
        <Tooltip.Frame defaultOpen={false}>
          <Tooltip.Trigger>
            {(props) => (
              <IconButton {...props} aria-label="詳細情報">
                <Information aria-hidden="true" />
              </IconButton>
            )}
          </Tooltip.Trigger>
          <Tooltip.Content>補足情報</Tooltip.Content>
        </Tooltip.Frame>,
      );

      const trigger = screen.getByRole('button', { name: '詳細情報' });
      fireEvent.focus(trigger);

      await waitFor(() => {
        expect(screen.getByText('補足情報')).toBeInTheDocument();
      });
    });

    test('フォーカスを外すと非表示になる', async () => {
      render(
        <Tooltip.Frame defaultOpen={false}>
          <Tooltip.Trigger>
            {(props) => (
              <IconButton {...props} aria-label="詳細情報">
                <Information aria-hidden="true" />
              </IconButton>
            )}
          </Tooltip.Trigger>
          <Tooltip.Content>補足情報</Tooltip.Content>
        </Tooltip.Frame>,
      );

      const trigger = screen.getByRole('button', { name: '詳細情報' });
      fireEvent.focus(trigger);

      await waitFor(() => {
        expect(screen.getByText('補足情報')).toBeInTheDocument();
      });

      fireEvent.blur(trigger);

      await waitFor(() => {
        expect(screen.queryByText('補足情報')).not.toBeInTheDocument();
      });
    });

    test('role="tooltip"が設定される', async () => {
      render(
        <Tooltip.Frame defaultOpen={false}>
          <Tooltip.Trigger>
            {(props) => (
              <IconButton {...props} aria-label="詳細情報">
                <Information aria-hidden="true" />
              </IconButton>
            )}
          </Tooltip.Trigger>
          <Tooltip.Content>補足情報</Tooltip.Content>
        </Tooltip.Frame>,
      );

      const trigger = screen.getByRole('button', { name: '詳細情報' });
      fireEvent.mouseEnter(trigger);

      await waitFor(() => {
        const tooltip = screen.getByRole('tooltip');
        expect(tooltip).toBeInTheDocument();
      });
    });

    test('aria-expandedが設定されない', () => {
      render(
        <Tooltip.Frame defaultOpen={false}>
          <Tooltip.Trigger>
            {(props) => (
              <IconButton {...props} aria-label="詳細情報">
                <Information aria-hidden="true" />
              </IconButton>
            )}
          </Tooltip.Trigger>
          <Tooltip.Content>補足情報</Tooltip.Content>
        </Tooltip.Frame>,
      );

      const trigger = screen.getByRole('button', { name: '詳細情報' });
      expect(trigger).not.toHaveAttribute('aria-expanded');
    });

    test('閉じるボタンが表示されない', async () => {
      render(
        <Tooltip.Frame defaultOpen={false}>
          <Tooltip.Trigger>
            {(props) => (
              <IconButton {...props} aria-label="詳細情報">
                <Information aria-hidden="true" />
              </IconButton>
            )}
          </Tooltip.Trigger>
          <Tooltip.Content>補足情報</Tooltip.Content>
        </Tooltip.Frame>,
      );

      const trigger = screen.getByRole('button', { name: '詳細情報' });
      fireEvent.mouseEnter(trigger);

      await waitFor(() => {
        expect(screen.getByText('補足情報')).toBeInTheDocument();
      });

      expect(
        screen.queryByRole('button', { name: '閉じる' }),
      ).not.toBeInTheDocument();
    });

    test('タッチデバイスでclick時に表示/非表示を切り替える', async () => {
      Object.defineProperty(window, 'ontouchstart', {
        writable: true,
        value: {},
      });

      render(
        <Tooltip.Frame defaultOpen={false}>
          <Tooltip.Trigger>
            {(props) => (
              <IconButton {...props} aria-label="詳細情報">
                <Information aria-hidden="true" />
              </IconButton>
            )}
          </Tooltip.Trigger>
          <Tooltip.Content>補足情報</Tooltip.Content>
        </Tooltip.Frame>,
      );

      const trigger = screen.getByRole('button', { name: '詳細情報' });

      fireEvent.click(trigger);

      await waitFor(() => {
        expect(screen.getByText('補足情報')).toBeInTheDocument();
      });

      fireEvent.click(trigger);

      await waitFor(() => {
        expect(screen.queryByText('補足情報')).not.toBeInTheDocument();
      });
    });

    test('タッチデバイスで領域外クリックで閉じる', async () => {
      Object.defineProperty(window, 'ontouchstart', {
        writable: true,
        value: {},
      });

      render(
        <div>
          <Tooltip.Frame defaultOpen={false}>
            <Tooltip.Trigger>
              {(props) => (
                <IconButton {...props} aria-label="詳細情報">
                  <Information aria-hidden="true" />
                </IconButton>
              )}
            </Tooltip.Trigger>
            <Tooltip.Content>補足情報</Tooltip.Content>
          </Tooltip.Frame>
          <button type="button">外部のボタン</button>
        </div>,
      );

      const trigger = screen.getByRole('button', { name: '詳細情報' });
      fireEvent.click(trigger);

      await waitFor(() => {
        expect(screen.getByText('補足情報')).toBeInTheDocument();
      });

      const outsideButton = screen.getByRole('button', { name: '外部のボタン' });
      fireEvent.click(outsideButton);

      await waitFor(() => {
        expect(screen.queryByText('補足情報')).not.toBeInTheDocument();
      });
    });
  });

  describe('defaultOpen={true}の初期表示時', () => {
    test('初期状態で表示される', () => {
      render(
        <Tooltip.Frame defaultOpen>
          <Tooltip.Trigger>
            {(props) => (
              <IconButton {...props} aria-label="詳細情報">
                <Information aria-hidden="true" />
              </IconButton>
            )}
          </Tooltip.Trigger>
          <Tooltip.Content>補足情報</Tooltip.Content>
        </Tooltip.Frame>,
      );

      expect(screen.getByText('補足情報')).toBeInTheDocument();
    });

    test('role="group"が設定される', () => {
      render(
        <Tooltip.Frame defaultOpen>
          <Tooltip.Trigger>
            {(props) => (
              <IconButton {...props} aria-label="詳細情報">
                <Information aria-hidden="true" />
              </IconButton>
            )}
          </Tooltip.Trigger>
          <Tooltip.Content>補足情報</Tooltip.Content>
        </Tooltip.Frame>,
      );

      const group = screen.getByRole('group');
      expect(group).toBeInTheDocument();
    });

    test('aria-expanded="true"が設定される', () => {
      render(
        <Tooltip.Frame defaultOpen>
          <Tooltip.Trigger>
            {(props) => (
              <IconButton {...props} aria-label="詳細情報">
                <Information aria-hidden="true" />
              </IconButton>
            )}
          </Tooltip.Trigger>
          <Tooltip.Content>補足情報</Tooltip.Content>
        </Tooltip.Frame>,
      );

      const trigger = screen.getByRole('button', { name: '詳細情報' });
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
    });

    test('閉じるボタンが表示される', () => {
      render(
        <Tooltip.Frame defaultOpen>
          <Tooltip.Trigger>
            {(props) => (
              <IconButton {...props} aria-label="詳細情報">
                <Information aria-hidden="true" />
              </IconButton>
            )}
          </Tooltip.Trigger>
          <Tooltip.Content>補足情報</Tooltip.Content>
        </Tooltip.Frame>,
      );

      expect(screen.getByRole('button', { name: '閉じる' })).toBeInTheDocument();
    });

    test('閉じるボタンクリック時に閉じる', async () => {
      const onClose = jest.fn();

      render(
        <Tooltip.Frame defaultOpen onClose={onClose}>
          <Tooltip.Trigger>
            {(props) => (
              <IconButton {...props} aria-label="詳細情報">
                <Information aria-hidden="true" />
              </IconButton>
            )}
          </Tooltip.Trigger>
          <Tooltip.Content>補足情報</Tooltip.Content>
        </Tooltip.Frame>,
      );

      const closeButton = screen.getByRole('button', { name: '閉じる' });
      fireEvent.click(closeButton);

      await waitFor(() => {
        expect(screen.queryByText('補足情報')).not.toBeInTheDocument();
      });

      expect(onClose).toHaveBeenCalledTimes(1);
    });

    test('Tooltipまたはその内部要素にフォーカスが当たっている時、Escapeキー押下で閉じる', async () => {
      const onClose = jest.fn();

      render(
        <Tooltip.Frame defaultOpen onClose={onClose}>
          <Tooltip.Trigger>
            {(props) => (
              <IconButton {...props} aria-label="詳細情報">
                <Information aria-hidden="true" />
              </IconButton>
            )}
          </Tooltip.Trigger>
          <Tooltip.Content>補足情報</Tooltip.Content>
        </Tooltip.Frame>,
      );

      const closeButton = screen.getByRole('button', { name: '閉じる' });
      closeButton.focus();

      fireEvent.keyDown(window, { key: 'Escape' });

      await waitFor(() => {
        expect(screen.queryByText('補足情報')).not.toBeInTheDocument();
      });

      expect(onClose).toHaveBeenCalledTimes(1);
    });

    test('領域外クリックでは閉じない', async () => {
      render(
        <div>
          <Tooltip.Frame defaultOpen>
            <Tooltip.Trigger>
              {(props) => (
                <IconButton {...props} aria-label="詳細情報">
                  <Information aria-hidden="true" />
                </IconButton>
              )}
            </Tooltip.Trigger>
            <Tooltip.Content>補足情報</Tooltip.Content>
          </Tooltip.Frame>
          <button type="button">外部のボタン</button>
        </div>,
      );

      const outsideButton = screen.getByRole('button', { name: '外部のボタン' });
      fireEvent.click(outsideButton);

      expect(screen.getByText('補足情報')).toBeInTheDocument();
    });
  });

  describe('defaultOpen={true}で一度閉じた後の再表示時', () => {
    test('hover/focusで再表示される', async () => {
      render(
        <Tooltip.Frame defaultOpen>
          <Tooltip.Trigger>
            {(props) => (
              <IconButton {...props} aria-label="詳細情報">
                <Information aria-hidden="true" />
              </IconButton>
            )}
          </Tooltip.Trigger>
          <Tooltip.Content>補足情報</Tooltip.Content>
        </Tooltip.Frame>,
      );

      const closeButton = screen.getByRole('button', { name: '閉じる' });
      fireEvent.click(closeButton);

      await waitFor(() => {
        expect(screen.queryByText('補足情報')).not.toBeInTheDocument();
      });

      const trigger = screen.getByRole('button', { name: '詳細情報' });
      fireEvent.mouseEnter(trigger);

      await waitFor(() => {
        expect(screen.getByText('補足情報')).toBeInTheDocument();
      });
    });

    test('role="group"からrole="tooltip"に切り替わる', async () => {
      render(
        <Tooltip.Frame defaultOpen>
          <Tooltip.Trigger>
            {(props) => (
              <IconButton {...props} aria-label="詳細情報">
                <Information aria-hidden="true" />
              </IconButton>
            )}
          </Tooltip.Trigger>
          <Tooltip.Content>補足情報</Tooltip.Content>
        </Tooltip.Frame>,
      );

      expect(screen.getByRole('group')).toBeInTheDocument();

      const closeButton = screen.getByRole('button', { name: '閉じる' });
      fireEvent.click(closeButton);

      await waitFor(() => {
        expect(screen.queryByText('補足情報')).not.toBeInTheDocument();
      });

      const trigger = screen.getByRole('button', { name: '詳細情報' });
      fireEvent.mouseEnter(trigger);

      await waitFor(() => {
        const tooltip = screen.getByRole('tooltip');
        expect(tooltip).toBeInTheDocument();
      });
    });

    test('aria-expandedが設定されない', async () => {
      render(
        <Tooltip.Frame defaultOpen>
          <Tooltip.Trigger>
            {(props) => (
              <IconButton {...props} aria-label="詳細情報">
                <Information aria-hidden="true" />
              </IconButton>
            )}
          </Tooltip.Trigger>
          <Tooltip.Content>補足情報</Tooltip.Content>
        </Tooltip.Frame>,
      );

      const trigger = screen.getByRole('button', { name: '詳細情報' });
      expect(trigger).toHaveAttribute('aria-expanded', 'true');

      const closeButton = screen.getByRole('button', { name: '閉じる' });
      fireEvent.click(closeButton);

      await waitFor(() => {
        expect(screen.queryByText('補足情報')).not.toBeInTheDocument();
      });

      expect(trigger).not.toHaveAttribute('aria-expanded');
    });

    test('閉じるボタンが表示されない', async () => {
      render(
        <Tooltip.Frame defaultOpen>
          <Tooltip.Trigger>
            {(props) => (
              <IconButton {...props} aria-label="詳細情報">
                <Information aria-hidden="true" />
              </IconButton>
            )}
          </Tooltip.Trigger>
          <Tooltip.Content>補足情報</Tooltip.Content>
        </Tooltip.Frame>,
      );

      const closeButton = screen.getByRole('button', { name: '閉じる' });
      fireEvent.click(closeButton);

      await waitFor(() => {
        expect(screen.queryByText('補足情報')).not.toBeInTheDocument();
      });

      const trigger = screen.getByRole('button', { name: '詳細情報' });
      fireEvent.mouseEnter(trigger);

      await waitFor(() => {
        expect(screen.getByText('補足情報')).toBeInTheDocument();
      });

      expect(
        screen.queryByRole('button', { name: '閉じる' }),
      ).not.toBeInTheDocument();
    });
  });

  describe('variants', () => {
    test('variant="information"でクラスが適用される', () => {
      render(
        <Tooltip.Frame defaultOpen variant="information">
          <Tooltip.Trigger>
            {(props) => (
              <IconButton {...props} aria-label="詳細情報">
                <Information aria-hidden="true" />
              </IconButton>
            )}
          </Tooltip.Trigger>
          <Tooltip.Content>補足情報</Tooltip.Content>
        </Tooltip.Frame>,
      );

      const group = screen.getByRole('group');
      expect(group).toHaveClass('spui-Tooltip-frame--information');
    });

    test('variant="confirmation"でクラスが適用される', () => {
      render(
        <Tooltip.Frame defaultOpen variant="confirmation">
          <Tooltip.Trigger>
            {(props) => (
              <IconButton {...props} aria-label="詳細情報">
                <Information aria-hidden="true" />
              </IconButton>
            )}
          </Tooltip.Trigger>
          <Tooltip.Content>補足情報</Tooltip.Content>
        </Tooltip.Frame>,
      );

      const group = screen.getByRole('group');
      expect(group).toHaveClass('spui-Tooltip-frame--confirmation');
    });

    test('variant="error"でクラスが適用される', () => {
      render(
        <Tooltip.Frame defaultOpen variant="error">
          <Tooltip.Trigger>
            {(props) => (
              <IconButton {...props} aria-label="詳細情報">
                <Information aria-hidden="true" />
              </IconButton>
            )}
          </Tooltip.Trigger>
          <Tooltip.Content>補足情報</Tooltip.Content>
        </Tooltip.Frame>,
      );

      const group = screen.getByRole('group');
      expect(group).toHaveClass('spui-Tooltip-frame--error');
    });
  });

  describe('direction and position', () => {
    test('direction="top"とposition="center"でクラスが適用される', () => {
      render(
        <Tooltip.Frame defaultOpen direction="top" position="center">
          <Tooltip.Trigger>
            {(props) => (
              <IconButton {...props} aria-label="詳細情報">
                <Information aria-hidden="true" />
              </IconButton>
            )}
          </Tooltip.Trigger>
          <Tooltip.Content>補足情報</Tooltip.Content>
        </Tooltip.Frame>,
      );

      const group = screen.getByRole('group');
      expect(group).toHaveClass('spui-Tooltip-frame--top');
      expect(group).toHaveClass('spui-Tooltip-frame--center');
    });

    test('direction="bottom"とposition="start"でクラスが適用される', () => {
      render(
        <Tooltip.Frame defaultOpen direction="bottom" position="start">
          <Tooltip.Trigger>
            {(props) => (
              <IconButton {...props} aria-label="詳細情報">
                <Information aria-hidden="true" />
              </IconButton>
            )}
          </Tooltip.Trigger>
          <Tooltip.Content>補足情報</Tooltip.Content>
        </Tooltip.Frame>,
      );

      const group = screen.getByRole('group');
      expect(group).toHaveClass('spui-Tooltip-frame--bottom');
      expect(group).toHaveClass('spui-Tooltip-frame--start');
    });
  });
});
