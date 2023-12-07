import React, { createRef, useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';
import { jest } from '@jest/globals';

import { Button } from '../Button';
import { BLOCK_NAME, DropdownMenu } from './DropdownMenu';

const ANIMATION_DURATION = 300;
const useDropdownMenuOpen = (initialState?: boolean) => {
  const [open, setOpen] = useState(initialState ?? true);
  const onClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const onClose = () => {
    setOpen(false);
  };
  return { open, setOpen, onClick, onClose };
};

describe('<DropdownMenu />', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('The DropdownMenu should be closed when you click the trigger button', async () => {
    const triggerRef = createRef<HTMLButtonElement>();
    const onMenuButtonClick = jest.fn();
    const onClose = jest.fn();
    const { result } = renderHook(() => useDropdownMenuOpen());
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    expect(result.current.open).toBe(true);

    const { rerender } = render(
      <>
        <DropdownMenu.Frame>
          <Button onClick={result.current.onClick} ref={triggerRef}>
            triggerButton
          </Button>
          <DropdownMenu.List
            onClose={onClose}
            open={result.current.open}
            triggerRef={triggerRef}
          >
            <DropdownMenu.ListItem onClick={onMenuButtonClick}>
              <DropdownMenu.Title>testTitle</DropdownMenu.Title>
            </DropdownMenu.ListItem>
          </DropdownMenu.List>
        </DropdownMenu.Frame>
      </>,
    );

    const button = screen.getByText(/triggerButton/);
    const menu = button.nextElementSibling;
    expect(menu).toHaveClass(`${BLOCK_NAME}-menu`);
    expect(menu).toBeInTheDocument();

    await user.click(button);

    rerender(
      <>
        <DropdownMenu.Frame>
          <Button onClick={result.current.onClick} ref={triggerRef}>
            triggerButton
          </Button>
          <DropdownMenu.List
            onClose={onClose}
            open={result.current.open}
            triggerRef={triggerRef}
          >
            <DropdownMenu.ListItem onClick={onMenuButtonClick}>
              <DropdownMenu.Title>testTitle</DropdownMenu.Title>
            </DropdownMenu.ListItem>
          </DropdownMenu.List>
        </DropdownMenu.Frame>
      </>,
    );

    expect(result.current.open).toBe(false);
    expect(
      screen.getByText(/triggerButton/).nextElementSibling,
    ).not.toBeInTheDocument();
  });

  test('The DropdownMenu should be closed when you click outside the DropdownMenu', async () => {
    const triggerRef = createRef<HTMLButtonElement>();
    const onMenuButtonClick = jest.fn();
    const { result } = renderHook(() => useDropdownMenuOpen());
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    expect(result.current.open).toBe(true);

    const { rerender } = render(
      <>
        <DropdownMenu.Frame>
          <Button onClick={result.current.onClick} ref={triggerRef}>
            triggerButton
          </Button>
          <DropdownMenu.List
            onClose={result.current.onClose}
            open={result.current.open}
            triggerRef={triggerRef}
          >
            <DropdownMenu.ListItem onClick={onMenuButtonClick}>
              <DropdownMenu.Title>testTitle</DropdownMenu.Title>
            </DropdownMenu.ListItem>
          </DropdownMenu.List>
        </DropdownMenu.Frame>
        <div>outside</div>
      </>,
    );

    const outside = screen.getByText(/outside/);
    const menu = screen.getByText(/triggerButton/).nextElementSibling;
    expect(menu).toHaveClass(`${BLOCK_NAME}-menu`);
    expect(menu).toBeInTheDocument();

    await user.click(outside);

    expect(menu).toHaveClass('is-fade-out');

    act(() => {
      jest.advanceTimersByTime(ANIMATION_DURATION);
      if (menu) fireEvent.animationEnd(menu);
    });

    rerender(
      <>
        <DropdownMenu.Frame>
          <Button onClick={result.current.onClick} ref={triggerRef}>
            triggerButton
          </Button>
          <DropdownMenu.List
            onClose={result.current.onClose}
            open={result.current.open}
            triggerRef={triggerRef}
          >
            <DropdownMenu.ListItem onClick={onMenuButtonClick}>
              <DropdownMenu.Title>testTitle</DropdownMenu.Title>
            </DropdownMenu.ListItem>
          </DropdownMenu.List>
        </DropdownMenu.Frame>
        <div>outside</div>
      </>,
    );

    expect(result.current.open).toBe(false);
    expect(
      screen.getByText(/triggerButton/).nextElementSibling,
    ).not.toBeInTheDocument();
  });

  test('A click event should occur and the DropdownMenu should be closed when you click in the DropdownMenu', async () => {
    const triggerRef = createRef<HTMLButtonElement>();
    const onMenuButtonClick = jest.fn();
    const { result } = renderHook(() => useDropdownMenuOpen());
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    expect(result.current.open).toBe(true);

    const { rerender } = render(
      <>
        <DropdownMenu.Frame>
          <Button onClick={result.current.onClick} ref={triggerRef}>
            triggerButton
          </Button>
          <DropdownMenu.List
            onClose={result.current.onClose}
            open={result.current.open}
            triggerRef={triggerRef}
          >
            <DropdownMenu.ListItem onClick={onMenuButtonClick}>
              <DropdownMenu.Title>testTitle</DropdownMenu.Title>
            </DropdownMenu.ListItem>
          </DropdownMenu.List>
        </DropdownMenu.Frame>
      </>,
    );

    const menu = screen.getByText(/triggerButton/).nextElementSibling;
    expect(menu).toHaveClass(`${BLOCK_NAME}-menu`);
    expect(menu).toBeInTheDocument();

    const menuButton =
      screen.getByText(/testTitle/).parentElement?.parentElement;
    expect(menuButton).toHaveClass(`${BLOCK_NAME}-menuButton`);
    expect(menuButton).toBeInTheDocument();

    if (menuButton) await user.click(menuButton);

    expect(onMenuButtonClick).toBeCalled();
    expect(menu).toHaveClass('is-fade-out');

    act(() => {
      jest.advanceTimersByTime(ANIMATION_DURATION);
      if (menu) fireEvent.animationEnd(menu);
    });

    rerender(
      <>
        <DropdownMenu.Frame>
          <Button onClick={result.current.onClick} ref={triggerRef}>
            triggerButton
          </Button>
          <DropdownMenu.List
            onClose={result.current.onClose}
            open={result.current.open}
            triggerRef={triggerRef}
          >
            <DropdownMenu.ListItem onClick={onMenuButtonClick}>
              <DropdownMenu.Title>testTitle</DropdownMenu.Title>
            </DropdownMenu.ListItem>
          </DropdownMenu.List>
        </DropdownMenu.Frame>
      </>,
    );

    expect(result.current.open).toBe(false);
    expect(
      screen.getByText(/triggerButton/).nextElementSibling,
    ).not.toBeInTheDocument();
  });

  test('The DropdownMenu should be closed when you trigger esc key.', async () => {
    const triggerRef = createRef<HTMLButtonElement>();
    const onMenuButtonClick = jest.fn();
    const { result } = renderHook(() => useDropdownMenuOpen());
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    expect(result.current.open).toBe(true);

    const { rerender } = render(
      <>
        <DropdownMenu.Frame>
          <Button onClick={result.current.onClick} ref={triggerRef}>
            triggerButton
          </Button>
          <DropdownMenu.List
            onClose={result.current.onClose}
            open={result.current.open}
            triggerRef={triggerRef}
          >
            <DropdownMenu.ListItem onClick={onMenuButtonClick}>
              <DropdownMenu.Title>testTitle</DropdownMenu.Title>
            </DropdownMenu.ListItem>
          </DropdownMenu.List>
        </DropdownMenu.Frame>
      </>,
    );

    const menu = screen.getByText(/triggerButton/).nextElementSibling;
    expect(menu).toHaveClass(`${BLOCK_NAME}-menu`);
    expect(menu).toBeInTheDocument();

    await user.keyboard('{esc}');

    expect(menu).toHaveClass('is-fade-out');

    act(() => {
      jest.advanceTimersByTime(ANIMATION_DURATION);
      if (menu) fireEvent.animationEnd(menu);
    });

    rerender(
      <>
        <DropdownMenu.Frame>
          <Button onClick={result.current.onClick} ref={triggerRef}>
            triggerButton
          </Button>
          <DropdownMenu.List
            onClose={result.current.onClose}
            open={result.current.open}
            triggerRef={triggerRef}
          >
            <DropdownMenu.ListItem onClick={onMenuButtonClick}>
              <DropdownMenu.Title>testTitle</DropdownMenu.Title>
            </DropdownMenu.ListItem>
          </DropdownMenu.List>
        </DropdownMenu.Frame>
      </>,
    );

    expect(result.current.open).toBe(false);
    expect(
      screen.getByText(/triggerButton/).nextElementSibling,
    ).not.toBeInTheDocument();
  });

  test('The active element should be trigger element after the escape keydown when the Dropdown menu is opened.', async () => {
    const triggerRef = createRef<HTMLButtonElement>();
    const onMenuButtonClick = jest.fn();
    const { result } = renderHook(() => useDropdownMenuOpen());
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    expect(result.current.open).toBe(true);

    render(
      <>
        <DropdownMenu.Frame>
          <Button onClick={result.current.onClick} ref={triggerRef}>
            triggerButton
          </Button>
          <DropdownMenu.List
            onClose={result.current.onClose}
            open={result.current.open}
            triggerRef={triggerRef}
          >
            <DropdownMenu.ListItem onClick={onMenuButtonClick}>
              <DropdownMenu.Title>testTitle</DropdownMenu.Title>
            </DropdownMenu.ListItem>
          </DropdownMenu.List>
        </DropdownMenu.Frame>
      </>,
    );

    await user.keyboard('{esc}');
    act(() => {
      jest.advanceTimersByTime(ANIMATION_DURATION);
    });
    expect(document.activeElement).toBe(triggerRef.current);
  });

  test('The active element should not be trigger element after the escape keydown when the Dropdown menu is closed.', async () => {
    const triggerRef = createRef<HTMLButtonElement>();
    const onMenuButtonClick = jest.fn();
    const { result } = renderHook(() => useDropdownMenuOpen(false));
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    expect(result.current.open).toBe(false);

    render(
      <>
        <DropdownMenu.Frame>
          <Button onClick={result.current.onClick} ref={triggerRef}>
            triggerButton
          </Button>
          <DropdownMenu.List
            onClose={result.current.onClose}
            open={result.current.open}
            triggerRef={triggerRef}
          >
            <DropdownMenu.ListItem onClick={onMenuButtonClick}>
              <DropdownMenu.Title>testTitle</DropdownMenu.Title>
            </DropdownMenu.ListItem>
          </DropdownMenu.List>
        </DropdownMenu.Frame>
      </>,
    );

    await user.keyboard('{esc}');
    act(() => {
      jest.advanceTimersByTime(ANIMATION_DURATION);
    });
    expect(document.activeElement).not.toBe(triggerRef.current);
  });
});
