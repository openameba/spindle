import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { TextField } from './TextField';

describe('<TextField />', () => {
  test('type', async () => {
    const user = userEvent.setup();

    render(<TextField id="text" />);

    await user.type(screen.getByRole('textbox'), 'Hello, World!');
    expect(screen.getByRole('textbox')).toHaveValue('Hello, World!');
  });

  test('forward ref', () => {
    const ref = React.createRef<HTMLInputElement>();

    render(<TextField id="text" ref={ref} />);

    expect(screen.getByRole('textbox')).toEqual(ref.current);
  });
});
