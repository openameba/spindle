import { render, screen } from '@testing-library/react';
import React from 'react';

import { InvalidMessage } from './InvalidMessage';

describe('<InvalidMessage />', () => {
  test('renders correctly with children', () => {
    const { container } = render(
      <InvalidMessage visible>エラーメッセージ</InvalidMessage>,
    );

    const message = container.querySelector('.spui-InvalidMessage');
    expect(message).toBeInTheDocument();
    expect(message?.tagName).toBe('P');
    expect(message).toHaveClass('spui-InvalidMessage');
    expect(screen.getByText('エラーメッセージ')).toBeInTheDocument();
  });

  test('renders when visible is true', () => {
    const { container } = render(
      <InvalidMessage visible>エラーメッセージ</InvalidMessage>,
    );

    const message = container.querySelector('.spui-InvalidMessage');
    expect(message).not.toHaveAttribute('hidden');
  });

  test('applies hidden attribute when visible is false', () => {
    const { container } = render(
      <InvalidMessage visible={false}>エラーメッセージ</InvalidMessage>,
    );

    const message = container.querySelector('.spui-InvalidMessage');
    expect(message).toHaveAttribute('hidden');
  });

  test('renders with empty children', () => {
    const { container } = render(<InvalidMessage visible />);

    const message = container.querySelector('.spui-InvalidMessage');
    expect(message).toBeInTheDocument();
    expect(message).not.toHaveAttribute('hidden');
  });

  test('renders icon with aria-hidden', () => {
    const { container } = render(
      <InvalidMessage visible>エラーメッセージ</InvalidMessage>,
    );

    const icon = container.querySelector('svg');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('aria-hidden', 'true');
  });

  test('passes through additional HTML attributes', () => {
    const { container } = render(
      <InvalidMessage visible id="error-message" role="alert">
        エラーメッセージ
      </InvalidMessage>,
    );

    const message = container.querySelector('.spui-InvalidMessage');
    expect(message).toHaveAttribute('id', 'error-message');
    expect(message).toHaveAttribute('role', 'alert');
  });

  test('defaults to visible false', () => {
    const { container } = render(
      <InvalidMessage>エラーメッセージ</InvalidMessage>,
    );

    const message = container.querySelector('.spui-InvalidMessage');
    expect(message).toHaveAttribute('hidden');
  });
});
