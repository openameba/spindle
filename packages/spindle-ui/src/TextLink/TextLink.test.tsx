import { render, screen } from '@testing-library/react';
import React from 'react';

import { TextLink } from './TextLink';

describe('<TextLink />', () => {
  test('forward ref', () => {
    const ref = React.createRef<HTMLAnchorElement>();

    render(
      <TextLink href="#about" ref={ref}>
        Text Link
      </TextLink>,
    );

    expect(screen.getByRole('link')).toEqual(ref.current);
  });

  test('passes through href attribute', () => {
    render(<TextLink href="/test-path">Text Link</TextLink>);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/test-path');
  });

  test('passes through target and rel attributes', () => {
    render(
      <TextLink href="https://example.com" target="_blank" rel="noopener">
        External Link
      </TextLink>,
    );

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener');
  });

  test('passes through onClick handler', () => {
    const handleClick = vi.fn();

    render(
      <TextLink href="#contact" onClick={handleClick}>
        Text Link
      </TextLink>,
    );

    const link = screen.getByRole('link');
    link.click();

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
