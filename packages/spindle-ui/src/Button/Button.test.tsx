import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from './Button';

describe('<Button />', () => {
  test('click', () => {
    const onButtonClick = jest.fn();

    render(<Button onClick={onButtonClick} />);

    userEvent.click(screen.getByRole('button'));
    expect(onButtonClick).toBeCalled();
  });

  test('forward ref', () => {
    const ref = React.createRef<HTMLButtonElement>();

    render(<Button ref={ref} />);

    expect(screen.getByRole('button')).toEqual(ref.current);
  });
});
