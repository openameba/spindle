import { jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { Button } from './Button';

describe('<Button />', () => {
  test('click', async () => {
    const onButtonClick = jest.fn();

    const user = userEvent.setup();

    render(<Button onClick={onButtonClick} />);

    await user.click(screen.getByRole('button'));
    expect(onButtonClick).toBeCalled();
  });

  test('forward ref', () => {
    const ref = React.createRef<HTMLButtonElement>();

    render(<Button ref={ref} />);

    expect(screen.getByRole('button')).toEqual(ref.current);
  });
});
