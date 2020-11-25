import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Checkbox } from './Checkbox';

describe('<Checkbox />', () => {
  test('click label', () => {
    render(<Checkbox>test</Checkbox>);

    userEvent.click(screen.getByLabelText('test'));
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  test('click checkbox', () => {
    render(<Checkbox />);

    userEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByRole('checkbox')).toBeChecked();
  });
});
