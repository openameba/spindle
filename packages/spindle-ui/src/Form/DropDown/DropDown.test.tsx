import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { jest } from '@jest/globals';

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
});
