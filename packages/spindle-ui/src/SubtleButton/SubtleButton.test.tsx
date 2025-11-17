import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { SubtleButton } from './SubtleButton';

describe('<SubtleButton />', () => {
  test('click', async () => {
    const onButtonClick = vi.fn();

    const user = userEvent.setup();

    render(<SubtleButton onClick={onButtonClick} />);

    await user.click(screen.getByRole('button'));
    expect(onButtonClick).toHaveBeenCalled();
  });

  test('forward ref', () => {
    const ref = React.createRef<HTMLButtonElement>();

    render(<SubtleButton ref={ref} />);

    expect(screen.getByRole('button')).toEqual(ref.current);
  });

  test('disabled button has disabled attribute', () => {
    render(<SubtleButton disabled>とじる</SubtleButton>);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  test('disabled button does not trigger onClick', async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();

    render(
      <SubtleButton disabled onClick={onClick}>
        とじる
      </SubtleButton>,
    );

    const button = screen.getByRole('button');

    await user.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });
});
