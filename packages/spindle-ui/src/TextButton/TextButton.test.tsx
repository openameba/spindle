import { jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { TextButton } from './TextButton';

describe('<TextButton />', () => {
  test('click', async () => {
    const onButtonClick = jest.fn();

    const user = userEvent.setup();

    render(<TextButton onClick={onButtonClick} />);

    await user.click(screen.getByRole('button'));
    expect(onButtonClick).toBeCalled();
  });

  test('forward ref', () => {
    const ref = React.createRef<HTMLButtonElement>();

    render(<TextButton ref={ref} />);

    expect(screen.getByRole('button')).toEqual(ref.current);
  });
});
