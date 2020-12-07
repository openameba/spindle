import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { IconButton } from './IconButton';

describe('<IconButton />', () => {
  test('click', () => {
    const onButtonClick = jest.fn();

    render(<IconButton onClick={onButtonClick} />);

    userEvent.click(screen.getByRole('button'));
    expect(onButtonClick).toBeCalled();
  });
});
