import { jest } from '@jest/globals';
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import React from 'react';

import Information from '../Icon/Information';
import { IconButton } from '../IconButton';
import { Tooltip } from './Tooltip';

// JSDOMでpointerTypeを正しく扱うためのヘルパー
const fireTouchPointerDown = (element: Element) => {
  const event = new PointerEvent('pointerdown', {
    bubbles: true,
    cancelable: true,
    pointerType: 'touch',
  });
  element.dispatchEvent(event);
};

describe('<Tooltip />', () => {
  describe('Common', () => {
    test('sets aria-describedby automatically', () => {
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

  describe('when defaultOpen={false}', () => {
    test('is not visible initially', () => {
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

    test('shows on hover (pointer devices)', async () => {
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

    test('shows on focus (pointer devices)', async () => {
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

    test('hides on blur (pointer devices)', async () => {
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

    test('hides on Escape key press', async () => {
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

      fireEvent.keyDown(window, { key: 'Escape' });

      await waitFor(() => {
        expect(screen.queryByText('補足情報')).not.toBeInTheDocument();
      });
    });

    test('has role="tooltip"', async () => {
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

    test('does not have aria-expanded', () => {
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

    test('does not show close button', async () => {
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

    test('toggles visibility on touch (pointerdown with pointerType=touch)', async () => {
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

      await act(async () => {
        fireTouchPointerDown(trigger);
      });

      await waitFor(() => {
        expect(screen.getByText('補足情報')).toBeInTheDocument();
      });

      await act(async () => {
        fireTouchPointerDown(trigger);
      });

      await waitFor(() => {
        expect(screen.queryByText('補足情報')).not.toBeInTheDocument();
      });
    });

    test('starts fade-out on outside touch', async () => {
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

      await act(async () => {
        fireTouchPointerDown(trigger);
      });

      const tooltipText = await screen.findByText('補足情報');
      expect(tooltipText).toBeInTheDocument();

      const outsideButton = screen.getByRole('button', { name: '外部のボタン' });

      await act(async () => {
        const event = new PointerEvent('pointerdown', {
          bubbles: true,
          cancelable: true,
          pointerType: 'touch',
        });
        outsideButton.dispatchEvent(event);
      });

      const tooltipFrame = tooltipText.closest('.spui-Tooltip-frame');
      await waitFor(() => {
        expect(tooltipFrame).toHaveClass('is-fade-out');
      });
    });
  });

  describe('when defaultOpen={true} (initial display)', () => {
    test('is visible initially', () => {
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

    test('has role="group"', () => {
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

    test('has aria-expanded="true"', () => {
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

    test('shows close button', () => {
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

    test('closes when close button is clicked', async () => {
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

    test('closes on Escape key when tooltip or its content is focused', async () => {
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

    test('does not close on outside click', async () => {
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

  describe('when defaultOpen={true} and reopened after closing', () => {
    test('reopens on hover/focus', async () => {
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

    test('changes from role="group" to role="tooltip"', async () => {
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

    test('does not have aria-expanded after reopen', async () => {
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

    test('does not show close button after reopen', async () => {
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
    test('applies class for variant="information"', () => {
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

    test('applies class for variant="confirmation"', () => {
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

    test('applies class for variant="error"', () => {
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
    test('applies classes for direction="top" and position="center"', () => {
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

    test('applies classes for direction="bottom" and position="start"', () => {
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
