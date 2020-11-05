import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Radio } from './Radio';

describe('<Radio />', () => {
  test('click label', () => {
    render(<Radio id="test">test</Radio>);

    userEvent.click(screen.getByLabelText('test'));
    expect(screen.getByRole('radio')).toBeChecked();
  });

  test('click checkbox', () => {
    render(<Radio id="test">test</Radio>);

    userEvent.click(screen.getByRole('radio'));
    expect(screen.getByRole('radio')).toBeChecked();
  });
});
