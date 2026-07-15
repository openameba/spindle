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
});
