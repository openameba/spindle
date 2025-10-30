import { jest } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { Button } from '../Button';
import { Dialog } from './Dialog';

describe('<Dialog.Frame />', () => {
  beforeAll(() => {
    HTMLDialogElement.prototype.showModal = jest.fn(function (
      this: HTMLDialogElement,
    ) {
      this.open = true;
    });
    HTMLDialogElement.prototype.close = jest.fn(function (
      this: HTMLDialogElement,
    ) {
      this.open = false;
    });
  });

  test('should open and close dialog with open prop', () => {
    const { rerender } = render(
      <Dialog.Frame open={false}>
        <Dialog.Title>Test Title</Dialog.Title>
        <Dialog.Body>Test Body</Dialog.Body>
      </Dialog.Frame>,
    );

    expect(HTMLDialogElement.prototype.showModal).not.toHaveBeenCalled();

    rerender(
      <Dialog.Frame open>
        <Dialog.Title>Test Title</Dialog.Title>
        <Dialog.Body>Test Body</Dialog.Body>
      </Dialog.Frame>,
    );

    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalled();

    rerender(
      <Dialog.Frame open={false}>
        <Dialog.Title>Test Title</Dialog.Title>
        <Dialog.Body>Test Body</Dialog.Body>
      </Dialog.Frame>,
    );

    expect(HTMLDialogElement.prototype.close).toHaveBeenCalled();
  });

  test('should call onClose when backdrop is clicked', () => {
    const onClose = jest.fn();
    render(
      <Dialog.Frame open onClose={onClose}>
        <Dialog.Title>Test Title</Dialog.Title>
        <Dialog.Body>Test Body</Dialog.Body>
      </Dialog.Frame>,
    );

    const dialog = screen.getByRole('dialog', { hidden: true });
    fireEvent.click(dialog);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('should not call onClose when dialog content is clicked', () => {
    const onClose = jest.fn();
    render(
      <Dialog.Frame open onClose={onClose}>
        <Dialog.Title>Test Title</Dialog.Title>
        <Dialog.Body>Test Body</Dialog.Body>
      </Dialog.Frame>,
    );

    fireEvent.click(screen.getByText('Test Body'));

    expect(onClose).not.toHaveBeenCalled();
  });

  test('should call onClose when form is submitted', () => {
    const onClose = jest.fn();
    render(
      <Dialog.Frame open onClose={onClose}>
        <Dialog.Title>Test Title</Dialog.Title>
        <Dialog.Body>Test Body</Dialog.Body>
        <Dialog.ButtonGroup>
          <Button layout="fullWidth" size="medium">
            OK
          </Button>
        </Dialog.ButtonGroup>
      </Dialog.Frame>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'OK' }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('should call onClose when dialog close event is fired', () => {
    const onClose = jest.fn();
    render(
      <Dialog.Frame open onClose={onClose}>
        <Dialog.Title>Test Title</Dialog.Title>
        <Dialog.Body>Test Body</Dialog.Body>
      </Dialog.Frame>,
    );

    const dialog = screen.getByRole('dialog', { hidden: true });
    fireEvent(dialog, new Event('close', { bubbles: true, cancelable: true }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('should call onCancel when cancel event is fired', () => {
    const onCancel = jest.fn();
    render(
      <Dialog.Frame open onCancel={onCancel}>
        <Dialog.Title>Test Title</Dialog.Title>
        <Dialog.Body>Test Body</Dialog.Body>
      </Dialog.Frame>,
    );

    const dialog = screen.getByRole('dialog', { hidden: true });
    fireEvent(dialog, new Event('cancel', { bubbles: true, cancelable: true }));

    expect(onCancel).toHaveBeenCalledTimes(1);
  });
});

describe('<Dialog.StyleOnly />', () => {
  test('should render children', () => {
    render(
      <Dialog.StyleOnly>
        <Dialog.Title>Test Title</Dialog.Title>
        <Dialog.Body>Test Body</Dialog.Body>
      </Dialog.StyleOnly>,
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Body')).toBeInTheDocument();
  });

  test('should apply custom className', () => {
    const { container } = render(
      <Dialog.StyleOnly className="custom-class">
        <Dialog.Title>Test Title</Dialog.Title>
      </Dialog.StyleOnly>,
    );

    expect(container.firstChild).toHaveClass('spui-Dialog');
    expect(container.firstChild).toHaveClass('spui-Dialog--styleOnly');
    expect(container.firstChild).toHaveClass('custom-class');
  });
});

describe('<Dialog.Title />', () => {
  test('should render children', () => {
    render(<Dialog.Title>Test Title</Dialog.Title>);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  test('should apply id prop', () => {
    render(<Dialog.Title id="dialog-title">Test Title</Dialog.Title>);

    expect(screen.getByText('Test Title')).toHaveAttribute(
      'id',
      'dialog-title',
    );
  });
});

describe('<Dialog.Body />', () => {
  test('should render children', () => {
    render(<Dialog.Body>Test Body</Dialog.Body>);

    expect(screen.getByText('Test Body')).toBeInTheDocument();
  });

  test('should apply id prop', () => {
    render(<Dialog.Body id="dialog-body">Test Body</Dialog.Body>);

    expect(screen.getByText('Test Body')).toHaveAttribute('id', 'dialog-body');
  });
});
