import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { jest } from '@jest/globals';

import { Toast, BLOCK_NAME, ANIMATION_DURATION } from './Toast';

describe('<Toast />', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('Inner isShow state should be changed by timer', () => {
    const testAnimation = () => {
      onHide.mockReset();

      expect(screen.getByText(/content/).parentElement).toHaveClass(
        `${BLOCK_NAME}-slide--in`,
      );

      act(() => {
        jest.advanceTimersByTime(duration - ANIMATION_DURATION);
      });

      expect(screen.getByText(/content/).parentElement).not.toHaveClass(
        `${BLOCK_NAME}-slide--in`,
      );

      act(() => {
        const parentElement = screen.getByText(/content/).parentElement;
        expect(parentElement).not.toBeNull();
        if (parentElement) {
          fireEvent.transitionEnd(parentElement);
        }
      });

      expect(onHide).toBeCalledTimes(1);
    };

    const onHide = jest.fn();
    const duration = 5000;
    const { rerender } = render(
      <Toast active onHide={onHide} duration={duration}>
        content
      </Toast>,
    );

    testAnimation();

    /* === The following code check if timeoutID is null === */

    rerender(
      <Toast active={false} onHide={onHide} duration={duration}>
        content
      </Toast>,
    );

    expect(screen.getByText(/content/).parentElement).not.toHaveClass(
      `${BLOCK_NAME}-slide--in`,
    );

    // If timeoutID is not null, Toast animation is not invoked again.
    rerender(
      <Toast active onHide={onHide} duration={duration}>
        content
      </Toast>,
    );

    testAnimation();
  });

  test('When it is hovered, duration should be reset', () => {
    const onHide = jest.fn();
    const duration = 4000;
    render(
      <Toast active onHide={onHide} duration={duration}>
        content
      </Toast>,
    );

    fireEvent.mouseOver(screen.getByText(/content/));

    act(() => {
      jest.advanceTimersByTime(duration - ANIMATION_DURATION);
    });

    expect(screen.getByText(/content/).parentElement).toHaveClass(
      `${BLOCK_NAME}-slide--in`,
    );

    fireEvent.mouseOut(screen.getByText(/content/));

    act(() => {
      jest.advanceTimersByTime(duration - ANIMATION_DURATION);
    });

    expect(screen.getByText(/content/).parentElement).not.toHaveClass(
      `${BLOCK_NAME}-slide--in`,
    );

    act(() => {
      const parentElement = screen.getByText(/content/).parentElement;
      expect(parentElement).not.toBeNull();
      if (parentElement) {
        fireEvent.transitionEnd(parentElement);
      }
    });

    expect(onHide).toBeCalledTimes(1);
  });

  test('When it is focused, duration should be reset', () => {
    const onHide = jest.fn();
    const duration = 4000;
    render(
      <Toast active onHide={onHide} duration={duration}>
        content
      </Toast>,
    );

    fireEvent.focus(screen.getByText(/content/));

    act(() => {
      jest.advanceTimersByTime(duration - ANIMATION_DURATION);
    });

    expect(screen.getByText(/content/).parentElement).toHaveClass(
      `${BLOCK_NAME}-slide--in`,
    );

    fireEvent.blur(screen.getByText(/content/));

    act(() => {
      jest.advanceTimersByTime(duration - ANIMATION_DURATION);
    });

    expect(screen.getByText(/content/).parentElement).not.toHaveClass(
      `${BLOCK_NAME}-slide--in`,
    );

    act(() => {
      const parentElement = screen.getByText(/content/).parentElement;
      expect(parentElement).not.toBeNull();
      if (parentElement) {
        fireEvent.transitionEnd(parentElement);
      }
    });

    expect(onHide).toBeCalledTimes(1);
  });
});
