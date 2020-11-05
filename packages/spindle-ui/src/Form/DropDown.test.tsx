import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { DropDown } from './DropDown';

describe('<DropDown />', () => {
  test('select', () => {
    render(
      <DropDown>
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
      </DropDown>,
    );

    userEvent.selectOptions(screen.getByRole('combobox'), 'c');
    expect(screen.getByRole('combobox')).toHaveValue('c');
  });

  test('change', () => {
    const onChange = jest.fn();

    render(
      <DropDown onChange={onChange}>
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
      </DropDown>,
    );

    userEvent.selectOptions(screen.getByRole('combobox'), 'c');
    expect(onChange).toBeCalled();
  });
});
