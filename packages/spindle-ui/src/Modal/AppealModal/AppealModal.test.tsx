import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { LinkButton } from '../../LinkButton';
import { AppealModal } from './AppealModal';

// Mock HTMLDialogElement methods as they are not fully supported in JSDOM
beforeAll(() => {
  HTMLDialogElement.prototype.showModal = vi.fn(function (
    this: HTMLDialogElement,
  ) {
    this.open = true;
  }) as () => void;
  HTMLDialogElement.prototype.close = vi.fn(function (this: HTMLDialogElement) {
    this.open = false;
  }) as () => void;
});

describe('<AppealModal />', () => {
  describe('Frame', () => {
    test('renders child components correctly', () => {
      render(
        <AppealModal.Frame open={true} size="medium">
          <AppealModal.Title id="test-title">Test Title</AppealModal.Title>
          <AppealModal.Image>
            <img src="test.jpg" alt="test" />
          </AppealModal.Image>
          <AppealModal.Body id="test-body">Test Body</AppealModal.Body>
          <AppealModal.ButtonGroup>
            <LinkButton href="/test">Test Button</LinkButton>
          </AppealModal.ButtonGroup>
        </AppealModal.Frame>,
      );

      expect(screen.getByText('Test Title')).toBeInTheDocument();
      expect(screen.getByText('Test Body')).toBeInTheDocument();
      expect(screen.getByRole('img', { name: 'test' })).toBeInTheDocument();
      expect(
        screen.getByRole('link', { name: 'Test Button' }),
      ).toBeInTheDocument();
    });

    test('applies correct size class', () => {
      const { container } = render(
        <AppealModal.Frame open={true} size="small">
          <AppealModal.Title>Title</AppealModal.Title>
        </AppealModal.Frame>,
      );

      const dialog = container.querySelector('dialog');
      expect(dialog).toHaveClass('spui-AppealModal--small');
    });

    test('calls showModal when open prop is true', () => {
      const { container } = render(
        <AppealModal.Frame open={true}>
          <AppealModal.Title>Title</AppealModal.Title>
        </AppealModal.Frame>,
      );

      const dialog = container.querySelector('dialog');
      expect(dialog?.showModal).toHaveBeenCalled();
    });

    test('calls close when open prop changes from true to false', () => {
      const { container, rerender } = render(
        <AppealModal.Frame open={true}>
          <AppealModal.Title>Title</AppealModal.Title>
        </AppealModal.Frame>,
      );

      const dialog = container.querySelector('dialog');

      rerender(
        <AppealModal.Frame open={false}>
          <AppealModal.Title>Title</AppealModal.Title>
        </AppealModal.Frame>,
      );

      expect(dialog?.close).toHaveBeenCalled();
    });

    test('onClose callback is called when close button is clicked', async () => {
      const onClose = vi.fn();
      const user = userEvent.setup();

      render(
        <AppealModal.Frame open={true} onClose={onClose}>
          <AppealModal.Title>Title</AppealModal.Title>
        </AppealModal.Frame>,
      );

      // Both IconButton (desktop) and SubtleButton (mobile) have name "とじる"
      const closeButtons = screen.getAllByRole('button', { name: 'とじる' });
      await user.click(closeButtons[0]);

      expect(onClose).toHaveBeenCalled();
    });

    test('onClose callback is called when backdrop is clicked', async () => {
      const onClose = vi.fn();
      const user = userEvent.setup();

      const { container } = render(
        <AppealModal.Frame open={true} onClose={onClose}>
          <AppealModal.Title>Title</AppealModal.Title>
        </AppealModal.Frame>,
      );

      const dialog = container.querySelector('dialog');
      if (dialog) {
        await user.click(dialog);
      }

      expect(onClose).toHaveBeenCalled();
    });

    test('onClose callback is not called when clicking inside the dialog', async () => {
      const onClose = vi.fn();
      const user = userEvent.setup();

      render(
        <AppealModal.Frame open={true} onClose={onClose}>
          <AppealModal.Title>Title</AppealModal.Title>
          <AppealModal.Body>Body content</AppealModal.Body>
        </AppealModal.Frame>,
      );

      const body = screen.getByText('Body content');
      await user.click(body);

      expect(onClose).not.toHaveBeenCalled();
    });

    test('onCancel callback is called on cancel event', () => {
      const onCancel = vi.fn();

      const { container } = render(
        <AppealModal.Frame open={true} onCancel={onCancel}>
          <AppealModal.Title>Title</AppealModal.Title>
        </AppealModal.Frame>,
      );

      const dialog = container.querySelector('dialog');
      if (dialog) {
        // Trigger cancel event (normally triggered by Escape key in browser)
        fireEvent(dialog, new Event('cancel', { bubbles: true }));
      }

      expect(onCancel).toHaveBeenCalled();
    });

    test('onClose callback is called on dialog close event', () => {
      const onClose = vi.fn();

      const { container } = render(
        <AppealModal.Frame open={true} onClose={onClose}>
          <AppealModal.Title>Title</AppealModal.Title>
        </AppealModal.Frame>,
      );

      const dialog = container.querySelector('dialog');
      if (dialog) {
        // Trigger the onClose event handler
        fireEvent(dialog, new Event('close', { bubbles: true }));
      }

      expect(onClose).toHaveBeenCalled();
    });

    test('forward ref works correctly', () => {
      const ref = React.createRef<HTMLDialogElement>();

      const { container } = render(
        <AppealModal.Frame ref={ref} open={true}>
          <AppealModal.Title>Title</AppealModal.Title>
        </AppealModal.Frame>,
      );

      const dialog = container.querySelector('dialog');
      expect(dialog).toEqual(ref.current);
    });
  });
});
