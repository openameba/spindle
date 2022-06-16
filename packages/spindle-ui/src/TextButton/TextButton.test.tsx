import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextButton } from './TextButton';

describe('<TextButton />', () => {
  test('click', () => {
    const onButtonClick = jest.fn();

    render(<TextButton onClick={onButtonClick} />);

    userEvent.click(screen.getByRole('button'));
    expect(onButtonClick).toBeCalled();
  });

  test('forward ref', () => {
    const ref = React.createRef<HTMLButtonElement>();

    render(<TextButton ref={ref}>Text Button</TextButton>);

    expect(screen.getByRole('button')).toEqual(ref.current);
  });
});
