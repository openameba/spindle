import { jest } from '@jest/globals';
import { act, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { BLOCK_NAME, DISPLAYING_TIMEOUT_DURATION, Toast } from './Toast';

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

      expect(
        screen.getByText(/content/).parentElement?.parentElement,
      ).toHaveClass(`${BLOCK_NAME}-slide--in`);

      act(() => {
        jest.advanceTimersByTime(DISPLAYING_TIMEOUT_DURATION);
      });

      expect(
        screen.getByText(/content/).parentElement?.parentElement,
      ).not.toHaveClass(`${BLOCK_NAME}-slide--in`);

      act(() => {
        const parentElement =
          screen.getByText(/content/).parentElement?.parentElement;
        expect(parentElement).not.toBeNull();
        if (parentElement) {
          fireEvent.transitionEnd(parentElement);
        }
      });

      expect(onHide).toBeCalledTimes(1);
    };

    const onHide = jest.fn();
    const { rerender } = render(
      <Toast active onHide={onHide}>
        content
      </Toast>,
    );

    testAnimation();

    /* === The following code check if timeoutID is null === */

    rerender(
      <Toast active={false} onHide={onHide}>
        content
      </Toast>,
    );

    expect(
      screen.getByText(/content/).parentElement?.parentElement,
    ).not.toHaveClass(`${BLOCK_NAME}-slide--in`);

    // If timeoutID is not null, Toast animation is not invoked again.
    rerender(
      <Toast active onHide={onHide}>
        content
      </Toast>,
    );

    testAnimation();
  });

  test('When it is hovered, duration should be reset', () => {
    const onHide = jest.fn();
    render(
      <Toast active onHide={onHide}>
        content
      </Toast>,
    );

    fireEvent.mouseOver(screen.getByText(/content/));

    act(() => {
      jest.advanceTimersByTime(DISPLAYING_TIMEOUT_DURATION);
    });

    expect(
      screen.getByText(/content/).parentElement?.parentElement,
    ).toHaveClass(`${BLOCK_NAME}-slide--in`);

    fireEvent.mouseOut(screen.getByText(/content/));

    act(() => {
      jest.advanceTimersByTime(DISPLAYING_TIMEOUT_DURATION);
    });

    expect(
      screen.getByText(/content/).parentElement?.parentElement,
    ).not.toHaveClass(`${BLOCK_NAME}-slide--in`);

    act(() => {
      const parentElement =
        screen.getByText(/content/).parentElement?.parentElement;
      expect(parentElement).not.toBeNull();
      if (parentElement) {
        fireEvent.transitionEnd(parentElement);
      }
    });

    expect(onHide).toBeCalledTimes(1);
  });

  test('When it is focused, duration should be reset', () => {
    const handleCloseButtonEvent = (evtName: 'focus' | 'blur') => {
      const parentElement = screen.getByLabelText(/閉じる/).parentElement;
      if (parentElement) {
        fireEvent[evtName](parentElement);
      }
    };
    const onHide = jest.fn();
    render(
      <Toast active onHide={onHide}>
        content
      </Toast>,
    );

    handleCloseButtonEvent('focus');

    act(() => {
      jest.advanceTimersByTime(DISPLAYING_TIMEOUT_DURATION);
    });

    expect(
      screen.getByText(/content/).parentElement?.parentElement,
    ).toHaveClass(`${BLOCK_NAME}-slide--in`);

    handleCloseButtonEvent('blur');

    act(() => {
      jest.advanceTimersByTime(DISPLAYING_TIMEOUT_DURATION);
    });

    expect(
      screen.getByText(/content/).parentElement?.parentElement,
    ).not.toHaveClass(`${BLOCK_NAME}-slide--in`);

    act(() => {
      const parentElement =
        screen.getByText(/content/).parentElement?.parentElement;
      expect(parentElement).not.toBeNull();
      if (parentElement) {
        fireEvent.transitionEnd(parentElement);
      }
    });

    expect(onHide).toBeCalledTimes(1);
  });

  test('it should close when close button is clicked', () => {
    const onHide = jest.fn();
    render(
      <Toast active onHide={onHide}>
        content
      </Toast>,
    );

    act(() => {
      // Get button element outer of 閉じる icon.
      const parentElement = screen.getByLabelText(/閉じる/).parentElement;
      expect(parentElement).not.toBeNull();
      if (parentElement) {
        fireEvent.click(parentElement);
      }
    });

    expect(
      screen.getByText(/content/).parentElement?.parentElement,
    ).not.toHaveClass(`${BLOCK_NAME}-slide--in`);

    act(() => {
      const parentElement =
        screen.getByText(/content/).parentElement?.parentElement;
      expect(parentElement).not.toBeNull();
      if (parentElement) {
        fireEvent.transitionEnd(parentElement);
      }
    });

    expect(onHide).toBeCalledTimes(1);
  });
});
