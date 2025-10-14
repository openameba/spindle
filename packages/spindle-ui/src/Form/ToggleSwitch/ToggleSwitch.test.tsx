import React from 'react';
import { render, screen } from '@testing-library/react';

import { ToggleSwitch } from './ToggleSwitch';

describe('<ToggleSwitch />', () => {
  test('forward ref', () => {
    const ref = React.createRef<HTMLInputElement>();

    render(<ToggleSwitch id="test" ref={ref} />);

    expect(screen.getByRole('checkbox')).toEqual(ref.current);
  });
});
