import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextField } from './TextField';

describe('<TextField />', () => {
  test('type', () => {
    render(<TextField id="text" />);

    userEvent.type(screen.getByRole('textbox'), 'Hello, World!');
    expect(screen.getByRole('textbox')).toHaveValue('Hello, World!');
  });

  test('forward ref', () => {
    const ref = React.createRef<HTMLInputElement>();

    render(<TextField id="text" ref={ref} />);

    expect(screen.getByRole('textbox')).toEqual(ref.current);
  });
});
