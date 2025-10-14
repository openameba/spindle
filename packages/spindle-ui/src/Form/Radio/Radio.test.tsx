import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Radio } from './Radio';

describe('<Radio />', () => {
  test('click label', async () => {
    const user = userEvent.setup();

    render(<Radio id="test">test</Radio>);

    await user.click(screen.getByLabelText('test'));
    expect(screen.getByRole('radio')).toBeChecked();
  });

  test('click checkbox', async () => {
    const user = userEvent.setup();

    render(<Radio id="test">test</Radio>);

    await user.click(screen.getByRole('radio'));
    expect(screen.getByRole('radio')).toBeChecked();
  });

  test('forward ref', () => {
    const ref = React.createRef<HTMLInputElement>();

    render(<Radio id="test" ref={ref} />);

    expect(screen.getByRole('radio')).toEqual(ref.current);
  });
});
