import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { Radio } from './Radio';

describe('<Radio />', () => {
  test('click label', async () => {
    const user = userEvent.setup();

    render(<Radio id="test">test</Radio>);

    await user.click(screen.getByLabelText('test'));
    expect(screen.getByRole('radio')).toBeChecked();
  });

  test('click checkbox', async () => {
    const user = userEvent.setup();

    render(<Radio id="test">test</Radio>);

    await user.click(screen.getByRole('radio'));
    expect(screen.getByRole('radio')).toBeChecked();
  });

  test('forward ref', () => {
    const ref = React.createRef<HTMLInputElement>();

    render(<Radio id="test" ref={ref} />);

    expect(screen.getByRole('radio')).toEqual(ref.current);
  });

  test('disabled Radio is inert (no toggle, no events, no focus)', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(
      <Radio disabled id="test" onChange={onChange}>
        test
      </Radio>,
    );

    const radio = screen.getByRole('radio', { name: /test/i });

    expect(radio).toBeDisabled();

    await user.click(radio);
    expect(radio).not.toBeChecked();
    expect(onChange).not.toHaveBeenCalled();

    await user.click(screen.getByText(/test/i));
    expect(radio).not.toBeChecked();
    expect(onChange).not.toHaveBeenCalled();

    await user.tab();
    expect(radio).not.toHaveFocus();
  });

  test('aria-label attribute is set', () => {
    render(<Radio aria-label="Amebaブログ" id="test" />);

    expect(screen.getByRole('radio')).toHaveAttribute(
      'aria-label',
      'Amebaブログ',
    );
  });

  test('selecting another radio in group unchecks the previously selected one', async () => {
    const user = userEvent.setup();

    render(
      <>
        <Radio id="radio1" name="group">
          選択肢1
        </Radio>
        <Radio id="radio2" name="group">
          選択肢2
        </Radio>
      </>,
    );

    const radio1 = screen.getByLabelText('選択肢1');
    const radio2 = screen.getByLabelText('選択肢2');

    await user.click(radio1);
    expect(radio1).toBeChecked();
    expect(radio2).not.toBeChecked();

    await user.click(radio2);
    expect(radio1).not.toBeChecked();
    expect(radio2).toBeChecked();
  });

  test('arrow keys navigate between radios in a group', async () => {
    const user = userEvent.setup();

    render(
      <>
        <Radio id="radio1" name="group">
          選択肢1
        </Radio>
        <Radio id="radio2" name="group">
          選択肢2
        </Radio>
        <Radio id="radio3" name="group">
          選択肢3
        </Radio>
      </>,
    );

    const radio1 = screen.getByLabelText('選択肢1');
    const radio2 = screen.getByLabelText('選択肢2');
    const radio3 = screen.getByLabelText('選択肢3');

    radio1.focus();
    expect(radio1).toHaveFocus();

    await user.keyboard('{ArrowDown}');
    expect(radio2).toHaveFocus();

    await user.keyboard('{ArrowDown}');
    expect(radio3).toHaveFocus();

    await user.keyboard('{ArrowUp}');
    expect(radio2).toHaveFocus();
  });
});
