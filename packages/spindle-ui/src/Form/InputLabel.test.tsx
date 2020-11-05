import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { InputLabel } from './InputLabel';

describe('<InputLabel />', () => {
  test('click', () => {
    render(
      <>
        <InputLabel id="test">test</InputLabel>
        <input type="checkbox" id="test" />
      </>,
    );

    userEvent.click(screen.getByLabelText('test'));
    expect(screen.getByRole('checkbox')).toBeChecked();
  });
});
