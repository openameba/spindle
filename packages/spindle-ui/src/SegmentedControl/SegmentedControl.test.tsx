import { jest } from '@jest/globals';
import { render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';

import { SegmentedControl } from './SegmentedControl';

const options = [
  { id: 'small', label: '小' },
  { id: 'medium', label: '中' },
  { id: 'large', label: '大' },
];

const useSegmentedControl = (initialSelectedId = options[0].id) => {
  const [selectedId, setSelectedId] = useState(initialSelectedId);

  const onClick = (_: React.MouseEvent<HTMLButtonElement>, id: string) => {
    setSelectedId(id);
  };

  return { selectedId, onClick };
};

describe('<SegmentedControl />', () => {
  test('If there is no button with matching selectedId, the first button should be selected', async () => {
    render(<SegmentedControl selectedId={''} options={options} />);

    const button0 = screen.getByText(options[0].label);
    const button1 = screen.getByText(options[1].label);
    const button2 = screen.getByText(options[2].label);

    expect(button0.getAttribute('aria-checked')).toEqual('true');
    expect(button1.getAttribute('aria-checked')).toEqual('false');
    expect(button2.getAttribute('aria-checked')).toEqual('false');
  });

  test('Buttons other than the first one should be able to be initially selected as well', async () => {
    render(<SegmentedControl selectedId={options[1].id} options={options} />);

    const button0 = screen.getByText(options[0].label);
    const button1 = screen.getByText(options[1].label);
    const button2 = screen.getByText(options[2].label);

    expect(button0.getAttribute('aria-checked')).toEqual('false');
    expect(button1.getAttribute('aria-checked')).toEqual('true');
    expect(button2.getAttribute('aria-checked')).toEqual('false');
  });

  test('onClick should be called when the button is clicked', async () => {
    const onClick = jest.fn();
    const user = userEvent.setup();

    render(
      <SegmentedControl
        selectedId={options[0].id}
        options={options}
        onClick={onClick}
      />,
    );

    await user.click(screen.getByText(options[1].label));
    expect(onClick).toBeCalled();
  });

  test('The button clicked should be selected, the other buttons should not be selected', async () => {
    const user = userEvent.setup();

    render(<SegmentedControl selectedId={options[0].id} options={options} />);

    const button0 = screen.getByText(options[0].label);
    const button1 = screen.getByText(options[1].label);
    const button2 = screen.getByText(options[2].label);

    expect(button0.getAttribute('aria-checked')).toEqual('true');
    await user.click(button1);
    expect(button0.getAttribute('aria-checked')).toEqual('false');
    expect(button1.getAttribute('aria-checked')).toEqual('true');
    expect(button2.getAttribute('aria-checked')).toEqual('false');
  });

  test('Should be able to accept the selected value as a state value', async () => {
    const { result } = renderHook(() => useSegmentedControl());
    const user = userEvent.setup();

    render(
      <SegmentedControl
        selectedId={result.current.selectedId}
        options={options}
        onClick={result.current.onClick}
      />,
    );

    await user.click(screen.getByText(options[0].label));
    expect(result.current.selectedId).toEqual(options[0].id);

    await user.click(screen.getByText(options[1].label));
    expect(result.current.selectedId).toEqual(options[1].id);

    await user.click(screen.getByText(options[2].label));
    expect(result.current.selectedId).toEqual(options[2].id);
  });

  test('should be reflected if the received selectedId changes', async () => {
    const { rerender } = render(
      <SegmentedControl selectedId={options[0].id} options={options} />,
    );
    expect(
      screen.getByText(options[0].label).getAttribute('aria-checked'),
    ).toEqual('true');

    rerender(<SegmentedControl selectedId={options[1].id} options={options} />);
    expect(
      screen.getByText(options[0].label).getAttribute('aria-checked'),
    ).toEqual('false');
    expect(
      screen.getByText(options[1].label).getAttribute('aria-checked'),
    ).toEqual('true');
  });

  test('a11y', async () => {
    const user = userEvent.setup();

    render(<SegmentedControl selectedId={options[0].id} options={options} />);

    const button0 = screen.getByText(options[0].label);
    const button1 = screen.getByText(options[1].label);
    const button2 = screen.getByText(options[2].label);

    button0.focus();
    expect(button0).toHaveFocus();
    expect(button1).not.toHaveFocus();
    expect(button2).not.toHaveFocus();

    await user.keyboard('{ArrowRight}');
    expect(button0).not.toHaveFocus();
    expect(button1).toHaveFocus();
    expect(button2).not.toHaveFocus();

    await user.keyboard('{ArrowLeft}');
    await user.keyboard('{ArrowLeft}');
    expect(button0).not.toHaveFocus();
    expect(button1).not.toHaveFocus();
    expect(button2).toHaveFocus();

    await user.keyboard('{Enter}');
    expect(button2.getAttribute('aria-checked')).toEqual('true');
  });
});
