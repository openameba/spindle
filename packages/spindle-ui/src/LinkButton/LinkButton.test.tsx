import { render, screen } from '@testing-library/react';
import React from 'react';

import { LinkButton } from './LinkButton';

describe('<LinkButton />', () => {
  test('forward ref', () => {
    const ref = React.createRef<HTMLAnchorElement>();

    render(
      <LinkButton href="#about" ref={ref}>
        Link Button
      </LinkButton>,
    );

    expect(screen.getByRole('link')).toEqual(ref.current);
  });

  test('passes through href attribute', () => {
    render(<LinkButton href="/test-path">Link Button</LinkButton>);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/test-path');
  });

  test('passes through target and rel attributes', () => {
    render(
      <LinkButton href="https://example.com" target="_blank" rel="noopener">
        External Link
      </LinkButton>,
    );

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener');
  });

  test('applies layout and size class names', () => {
    render(
      <LinkButton href="#" layout="fullWidth" size="small">
        Full Width Small Link
      </LinkButton>,
    );

    const link = screen.getByRole('link');
    expect(link).toHaveClass('spui-LinkButton--fullWidth');
    expect(link).toHaveClass('spui-LinkButton--small');
  });
});
