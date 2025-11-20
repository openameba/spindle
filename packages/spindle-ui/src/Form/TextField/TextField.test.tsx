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

  test('renders with id attribute', () => {
    render(<TextField id="username" />);

    expect(screen.getByRole('textbox')).toHaveAttribute('id', 'username');
  });

  test('renders with placeholder', () => {
    render(<TextField id="text" placeholder="Enter text" />);

    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  test('renders with disabled attribute', () => {
    render(<TextField id="text" disabled />);

    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  test('renders with type attribute', () => {
    render(<TextField id="email" type="email" />);

    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');
  });
});
