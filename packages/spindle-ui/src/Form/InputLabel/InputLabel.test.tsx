import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { InputLabel } from './InputLabel';

describe('<InputLabel />', () => {
  test('renders correctly with children', () => {
    render(<InputLabel id="test">Label Text</InputLabel>);

    const label = screen.getByText('Label Text');
    expect(label).toBeInTheDocument();
    expect(label.tagName).toBe('LABEL');
    expect(label).toHaveAttribute('for', 'test');
    expect(label).toHaveClass('spui-InputLabel');
  });

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

  test('renders with empty children', () => {
    const { container } = render(<InputLabel id="test" />);

    const label = container.querySelector('.spui-InputLabel');
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('for', 'test');
  });

  test('passes through additional HTML attributes', () => {
    render(
      <InputLabel id="test" title="Custom Title">
        Label
      </InputLabel>,
    );

    const label = screen.getByText('Label');
    expect(label).toHaveAttribute('title', 'Custom Title');
  });
});
