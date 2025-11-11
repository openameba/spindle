import { jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { DropDown } from './DropDown';

describe('<DropDown />', () => {
  test('select', async () => {
    render(
      <DropDown>
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
      </DropDown>,
    );

    const user = userEvent.setup();

    await user.selectOptions(screen.getByRole('combobox'), 'c');
    expect(screen.getByRole('combobox')).toHaveValue('c');
  });

  test('change', async () => {
    const onChange = jest.fn();

    render(
      <DropDown onChange={onChange}>
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
      </DropDown>,
    );

    const user = userEvent.setup();

    await user.selectOptions(screen.getByRole('combobox'), 'c');
    expect(onChange).toHaveBeenCalled();
  });

  test('forward ref', () => {
    const ref = React.createRef<HTMLSelectElement>();

    render(
      <DropDown ref={ref}>
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
      </DropDown>,
    );

    expect(screen.getByRole('combobox')).toEqual(ref.current);
  });

  test('hasError prop applies error class', () => {
    const { container } = render(
      <DropDown hasError aria-label="test">
        <option value="a">A</option>
        <option value="b">B</option>
      </DropDown>,
    );

    const label = container.querySelector('.spui-DropDown-label');
    expect(label).toHaveClass('is-error');
  });

  test('disabled prop disables select element', () => {
    render(
      <DropDown disabled aria-label="test">
        <option value="a">A</option>
        <option value="b">B</option>
      </DropDown>,
    );

    const select = screen.getByRole('combobox');
    expect(select).toBeDisabled();
  });

  test('visual text updates when selection changes', async () => {
    const { container } = render(
      <DropDown aria-label="test">
        <option value="a">Option A</option>
        <option value="b">Option B</option>
        <option value="c">Option C</option>
      </DropDown>,
    );

    const user = userEvent.setup();
    const select = screen.getByRole('combobox');
    const visual = container.querySelector('.spui-DropDown-visual');

    await user.selectOptions(select, 'b');
    expect(visual).toHaveTextContent('Option B');

    await user.selectOptions(select, 'c');
    expect(visual).toHaveTextContent('Option C');
  });
});
