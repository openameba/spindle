import { jest } from '@jest/globals';
import { render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { ButtonSwitch } from './ButtonSwitch';

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
];

const useButtonSwitch = (initialValue = options[0].value) => {
  const [value, setValue] = React.useState(initialValue);

  const onClick = (newValue: string) => {
    setValue(newValue);
  };

  return { value, onClick };
};

describe('<ButtonSwitch />', () => {
  test('Should aria-pressed="true" be set for the currently selected button', () => {
    const onClick = jest.fn();
    render(
      <ButtonSwitch
        value={options[0].value}
        options={options}
        onClick={onClick}
      />,
    );

    const button1 = screen.getByRole('button', { name: options[0].label });
    const button2 = screen.getByRole('button', { name: options[1].label });

    expect(button1.getAttribute('aria-pressed')).toEqual('true');
    expect(button2.getAttribute('aria-pressed')).toEqual('false');
  });

  test('onClick should be called when the button is clicked', async () => {
    const onClick = jest.fn();
    const user = userEvent.setup();

    render(
      <ButtonSwitch
        value={options[0].value}
        options={options}
        onClick={onClick}
      />,
    );

    await user.click(screen.getByRole('button', { name: options[1].label }));
    expect(onClick).toHaveBeenCalled();
  });

  test('Should be able to select the second option as well', async () => {
    const { result } = renderHook(() => useButtonSwitch());
    const user = userEvent.setup();
    render(
      <ButtonSwitch
        value={result.current.value}
        options={options}
        onClick={result.current.onClick}
      />,
    );

    await user.click(screen.getByRole('button', { name: options[0].label }));
    expect(result.current.value).toEqual(options[0].value);

    await user.click(screen.getByRole('button', { name: options[1].label }));
    expect(result.current.value).toEqual(options[1].value);
  });

  test('Should be reflected if the received value changes', async () => {
    const onClick = jest.fn();
    const { rerender } = render(
      <ButtonSwitch
        value={options[0].value}
        options={options}
        onClick={onClick}
      />,
    );
    expect(
      screen
        .getByRole('button', { name: options[0].label })
        .getAttribute('aria-pressed'),
    ).toEqual('true');

    rerender(
      <ButtonSwitch
        value={options[1].value}
        options={options}
        onClick={onClick}
      />,
    );
    expect(
      screen
        .getByRole('button', { name: options[0].label })
        .getAttribute('aria-pressed'),
    ).toEqual('false');
    expect(
      screen
        .getByRole('button', { name: options[1].label })
        .getAttribute('aria-pressed'),
    ).toEqual('true');
  });

  test('a11y', async () => {
    const onClick = jest.fn();
    const user = userEvent.setup();

    render(
      <ButtonSwitch
        value={options[0].value}
        options={options}
        onClick={onClick}
      />,
    );

    const button1 = screen.getByRole('button', { name: options[0].label });
    const button2 = screen.getByRole('button', { name: options[1].label });

    button1.focus();
    expect(button1).toHaveFocus();
    expect(button2).not.toHaveFocus();

    await user.keyboard('{arrowright}');
    expect(button1).not.toHaveFocus();
    expect(button2).toHaveFocus();

    await user.keyboard('{arrowleft}');
    expect(button1).toHaveFocus();
    expect(button2).not.toHaveFocus();

    await user.keyboard('{Enter}');
    expect(button1.getAttribute('aria-pressed')).toEqual('true');
    expect(button2.getAttribute('aria-pressed')).toEqual('false');
  });
});
