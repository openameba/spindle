import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { InlineDropDown } from './InlineDropDown';

describe('<InlineDropDown />', () => {
  test('select', () => {
    render(
      <InlineDropDown>
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
      </InlineDropDown>,
    );

    userEvent.selectOptions(screen.getByRole('combobox'), 'c');
    expect(screen.getByRole('combobox')).toHaveValue('c');
  });

  test('change', () => {
    const onChange = jest.fn();

    render(
      <InlineDropDown onChange={onChange}>
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
      </InlineDropDown>,
    );

    userEvent.selectOptions(screen.getByRole('combobox'), 'c');
    expect(onChange).toBeCalled();
  });

  test('forward ref', () => {
    const ref = React.createRef<HTMLSelectElement>();

    render(
      <InlineDropDown ref={ref}>
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
      </InlineDropDown>,
    );

    expect(screen.getByRole('combobox')).toEqual(ref.current);
  });
});
