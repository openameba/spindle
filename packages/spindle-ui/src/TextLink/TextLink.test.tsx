import React from 'react';
import { render, screen } from '@testing-library/react';

import { TextLink } from './TextLink';

describe('<TextLink />', () => {
  test('forward ref', () => {
    const ref = React.createRef<HTMLAnchorElement>();

    render(
      <TextLink href="#" ref={ref}>
        Text Link
      </TextLink>,
    );

    expect(screen.getByRole('link')).toEqual(ref.current);
  });
});
