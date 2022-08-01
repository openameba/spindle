import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { InputLabel } from './InputLabel';

describe('<InputLabel />', () => {
  test('click', async () => {
    const user = userEvent.setup();

    render(
      <>
        <InputLabel id="test">test</InputLabel>
        <input type="checkbox" id="test" />
      </>,
    );

    await user.click(screen.getByLabelText('test'));
    expect(screen.getByRole('checkbox')).toBeChecked();
  });
});
