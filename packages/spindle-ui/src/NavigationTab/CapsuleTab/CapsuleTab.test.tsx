import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { CapsuleTab } from './CapsuleTab';

const options = [
  { id: 'all', label: 'すべて' },
  { id: 'follow', label: 'フォロー' },
  { id: 'follower', label: 'フォロワー' },
];

describe('<CapsuleTab />', () => {
  describe('defaultSelectedId Props', () => {
    test('If defaultSelectedId is not included in options, nothing is selected.', () => {
      render(
        <CapsuleTab defaultSelectedId={'notIncludedId'} options={options} />,
      );

      const notSelectedButtons = screen.getAllByRole('tab', {
        selected: false,
      });
      expect(notSelectedButtons.length).toEqual(options.length);
    });

    test('If defaultSelectedId is included in options, it must be selected.', () => {
      const defaultSelectedId = options[0].id;
      render(
        <CapsuleTab defaultSelectedId={defaultSelectedId} options={options} />,
      );

      const notSelectedButtons = screen.getAllByRole('tab', {
        selected: false,
      });
      expect(notSelectedButtons.length).toEqual(options.length - 1);

      const selectedButton = screen.getByRole('tab', { selected: true });
      expect(selectedButton.getAttribute('id')).toEqual(defaultSelectedId);
    });
  });

  describe('options Props', () => {
    test('Nothing is displayed when options is empty array.', () => {
      const { container } = render(
        <CapsuleTab defaultSelectedId={options[0].id} options={[]} />,
      );

      expect(container.firstChild).toBeNull();
    });

    test('If options are specified, they should be properly reflected.', () => {
      const defaultSelectedId = options[1].id;
      render(
        <CapsuleTab defaultSelectedId={defaultSelectedId} options={options} />,
      );

      const buttons = screen.getAllByRole('tab');
      buttons.forEach((button, i) => {
        expect(button.getAttribute('aria-controls')).toEqual(
          `${options[i].id}-tabpanel`,
        );
        expect(button.getAttribute('aria-selected')).toEqual(
          defaultSelectedId === button.id ? 'true' : 'false',
        );
        expect(button.getAttribute('id')).toEqual(options[i].id);
        expect(button.getAttribute('tabIndex')).toEqual(
          defaultSelectedId === button.id ? '0' : '-1',
        );
      });
    });
  });

  describe('hasBorder Props', () => {
    test('Border must be displayed when hasBorder is true.', () => {
      const { container } = render(
        <CapsuleTab
          defaultSelectedId={options[0].id}
          options={options}
          hasBorder={true}
        />,
      );

      expect(container.firstChild).toHaveClass('spui-CapsuleTab--border');
    });

    test('Border is not initially displayed.', () => {
      const { container } = render(
        <CapsuleTab defaultSelectedId={options[0].id} options={options} />,
      );

      expect(container.firstChild).not.toHaveClass('spui-CapsuleTab--border');
    });
  });

  describe('variant Props', () => {
    test('The fixed class must be applied by default.', () => {
      const { container } = render(
        <CapsuleTab defaultSelectedId={options[0].id} options={options} />,
      );

      expect(container.firstChild).toHaveClass('spui-CapsuleTab--fixed');
    });

    test('The scrollable class must be applied when variant is scrollable.', () => {
      const { container } = render(
        <CapsuleTab
          defaultSelectedId={options[0].id}
          options={options}
          variant={'scrollable'}
        />,
      );

      expect(container.firstChild).toHaveClass('spui-CapsuleTab--scrollable');
    });
  });

  describe('onClick Props', () => {
    test('The selected item should change when onClick is called.', async () => {
      const defaultSelectedId = options[0].id;
      const selectedId = options[1].id;
      const onClick = vi.fn();
      const user = userEvent.setup();

      render(
        <CapsuleTab
          defaultSelectedId={defaultSelectedId}
          options={options}
          onClick={onClick}
        />,
      );

      const defaultSelectedButton = screen.getByRole('tab', { selected: true });
      expect(defaultSelectedButton.getAttribute('id')).toEqual(
        defaultSelectedId,
      );

      if (defaultSelectedButton.nextElementSibling) {
        await user.click(defaultSelectedButton.nextElementSibling);
      }
      expect(onClick).toHaveBeenCalled();
      const selectedButton = screen.getByRole('tab', { selected: true });
      expect(selectedButton.getAttribute('id')).toEqual(selectedId);
    });

    test('onClick must not be called when the selected item is clicked.', async () => {
      const onClick = vi.fn();
      const user = userEvent.setup();

      render(
        <CapsuleTab
          defaultSelectedId={options[0].id}
          options={options}
          onClick={onClick}
        />,
      );

      await user.click(screen.getByRole('tab', { selected: true }));
      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe('Keyboard interaction', () => {
    test('Pressing ArrowRight moves focus to the next tab and selects it.', async () => {
      const onClick = vi.fn();
      const user = userEvent.setup();

      render(
        <CapsuleTab
          defaultSelectedId={options[0].id}
          options={options}
          onClick={onClick}
        />,
      );

      screen.getByRole('tab', { selected: true }).focus();
      await user.keyboard('{ArrowRight}');

      const selectedButton = screen.getByRole('tab', { selected: true });
      expect(selectedButton.getAttribute('id')).toEqual(options[1].id);
      expect(selectedButton).toHaveFocus();
      expect(onClick).toHaveBeenCalled();
    });

    test('Pressing ArrowRight on the last tab moves to the first tab.', async () => {
      const user = userEvent.setup();

      render(
        <CapsuleTab
          defaultSelectedId={options[options.length - 1].id}
          options={options}
        />,
      );

      screen.getByRole('tab', { selected: true }).focus();
      await user.keyboard('{ArrowRight}');

      const selectedButton = screen.getByRole('tab', { selected: true });
      expect(selectedButton.getAttribute('id')).toEqual(options[0].id);
      expect(selectedButton).toHaveFocus();
    });

    test('Pressing ArrowLeft on the first tab moves to the last tab.', async () => {
      const user = userEvent.setup();

      render(
        <CapsuleTab defaultSelectedId={options[0].id} options={options} />,
      );

      screen.getByRole('tab', { selected: true }).focus();
      await user.keyboard('{ArrowLeft}');

      const selectedButton = screen.getByRole('tab', { selected: true });
      expect(selectedButton.getAttribute('id')).toEqual(
        options[options.length - 1].id,
      );
      expect(selectedButton).toHaveFocus();
    });

    test('Pressing Enter on the selected tab does not fire onClick.', async () => {
      const onClick = vi.fn();
      const user = userEvent.setup();

      render(
        <CapsuleTab
          defaultSelectedId={options[0].id}
          options={options}
          onClick={onClick}
        />,
      );

      screen.getByRole('tab', { selected: true }).focus();
      await user.keyboard('{Enter}');

      expect(onClick).not.toHaveBeenCalled();
      expect(
        screen.getByRole('tab', { selected: true }).getAttribute('id'),
      ).toEqual(options[0].id);
    });
  });

  describe('Scroll behavior', () => {
    const originalScrollIntoView = window.HTMLElement.prototype.scrollIntoView;
    const scrollIntoViewMock = vi.fn();

    beforeEach(() => {
      window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;
    });

    afterEach(() => {
      scrollIntoViewMock.mockClear();
      window.HTMLElement.prototype.scrollIntoView = originalScrollIntoView;
    });

    test('Arrow buttons must be displayed when variant is scrollable.', () => {
      render(
        <CapsuleTab
          defaultSelectedId={options[0].id}
          options={options}
          variant={'scrollable'}
        />,
      );

      expect(screen.getByLabelText('左に移動')).toBeInTheDocument();
      expect(screen.getByLabelText('右に移動')).toBeInTheDocument();
    });

    test('Arrow buttons must not be displayed when variant is fixed.', () => {
      render(
        <CapsuleTab defaultSelectedId={options[0].id} options={options} />,
      );

      expect(screen.queryByLabelText('左に移動')).toBeNull();
      expect(screen.queryByLabelText('右に移動')).toBeNull();
    });

    test('The selected item must be scrolled to the center when variant is scrollable.', async () => {
      const user = userEvent.setup();

      render(
        <CapsuleTab
          defaultSelectedId={options[0].id}
          options={options}
          variant={'scrollable'}
        />,
      );

      await user.click(screen.getAllByRole('tab')[1]);

      expect(scrollIntoViewMock).toHaveBeenCalledWith({
        block: 'nearest',
        inline: 'center',
      });
    });

    test('Scroll centering must not happen when variant is fixed.', async () => {
      const user = userEvent.setup();

      render(
        <CapsuleTab defaultSelectedId={options[0].id} options={options} />,
      );

      await user.click(screen.getAllByRole('tab')[1]);

      expect(scrollIntoViewMock).not.toHaveBeenCalled();
    });
  });
});
