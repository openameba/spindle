import { jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { IconButton } from './IconButton';

describe('<IconButton />', () => {
  test('click', async () => {
    const onButtonClick = jest.fn();
    const user = userEvent.setup();

    render(<IconButton onClick={onButtonClick} />);

    await user.click(screen.getByRole('button'));
    expect(onButtonClick).toBeCalled();
  });
});
