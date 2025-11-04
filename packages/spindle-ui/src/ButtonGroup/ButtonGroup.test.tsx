import { render, screen } from '@testing-library/react';
import React from 'react';

import { ButtonGroup } from './ButtonGroup';

describe('<ButtonGroup />', () => {
  test('applies default props', () => {
    render(
      <ButtonGroup data-testid="button-group">
        <button type="button">Button 1</button>
        <button type="button">Button 2</button>
      </ButtonGroup>,
    );

    const buttonGroup = screen.getByTestId('button-group');
    expect(buttonGroup).toHaveClass('spui-ButtonGroup');
    expect(buttonGroup).toHaveClass('spui-ButtonGroup--row');
    expect(buttonGroup).toHaveClass('spui-ButtonGroup--large');
  });

  test('applies direction prop', () => {
    render(
      <ButtonGroup direction="column" data-testid="button-group">
        <button type="button">Button 1</button>
        <button type="button">Button 2</button>
      </ButtonGroup>,
    );

    const buttonGroup = screen.getByTestId('button-group');
    expect(buttonGroup).toHaveClass('spui-ButtonGroup--column');
    expect(buttonGroup).not.toHaveClass('spui-ButtonGroup--row');
  });

  test('applies size prop', () => {
    const { rerender } = render(
      <ButtonGroup size="medium" data-testid="button-group">
        <button type="button">Button 1</button>
        <button type="button">Button 2</button>
      </ButtonGroup>,
    );

    let buttonGroup = screen.getByTestId('button-group');
    expect(buttonGroup).toHaveClass('spui-ButtonGroup--medium');

    rerender(
      <ButtonGroup size="small" data-testid="button-group">
        <button type="button">Button 1</button>
        <button type="button">Button 2</button>
      </ButtonGroup>,
    );

    buttonGroup = screen.getByTestId('button-group');
    expect(buttonGroup).toHaveClass('spui-ButtonGroup--small');
  });

  test('applies custom className', () => {
    render(
      <ButtonGroup className="custom-class" data-testid="button-group">
        <button type="button">Button 1</button>
        <button type="button">Button 2</button>
      </ButtonGroup>,
    );

    const buttonGroup = screen.getByTestId('button-group');
    expect(buttonGroup).toHaveClass('spui-ButtonGroup');
    expect(buttonGroup).toHaveClass('custom-class');
  });

  test('forwards HTML attributes', () => {
    render(
      <ButtonGroup
        data-testid="button-group"
        aria-label="Button group"
        role="group"
      >
        <button type="button">Button 1</button>
        <button type="button">Button 2</button>
      </ButtonGroup>,
    );

    const buttonGroup = screen.getByTestId('button-group');
    expect(buttonGroup).toHaveAttribute('aria-label', 'Button group');
    expect(buttonGroup).toHaveAttribute('role', 'group');
  });

  test('renders children correctly', () => {
    render(
      <ButtonGroup data-testid="button-group">
        <button type="button">Button 1</button>
        <button type="button">Button 2</button>
      </ButtonGroup>,
    );

    expect(screen.getByText('Button 1')).toBeInTheDocument();
    expect(screen.getByText('Button 2')).toBeInTheDocument();
  });
});
