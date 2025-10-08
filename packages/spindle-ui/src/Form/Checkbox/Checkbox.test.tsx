import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Checkbox } from './Checkbox';

describe('<Checkbox />', () => {
  test('click label', async () => {
    const user = userEvent.setup();

    render(<Checkbox>test</Checkbox>);

    await user.click(screen.getByLabelText('test'));
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  test('click checkbox', async () => {
    const user = userEvent.setup();

    render(<Checkbox />);

    await user.click(screen.getByRole('checkbox'));
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  test('forward ref', () => {
    const ref = React.createRef<HTMLInputElement>();

    render(<Checkbox ref={ref} />);

    expect(screen.getByRole('checkbox')).toEqual(ref.current);
  });
});
