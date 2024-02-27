import React from 'react';
import { render, screen } from '@testing-library/react';

import { BreadcrumbList, BreadcrumbItem } from './';

describe('<Breadcrumb />', () => {
  test('having aria attributes', () => {
    render(
      <BreadcrumbList>
        <BreadcrumbItem href="/top">Top</BreadcrumbItem>
        <BreadcrumbItem href="/team">Team</BreadcrumbItem>
        <BreadcrumbItem href="/about" current>
          Amebaとは
        </BreadcrumbItem>
      </BreadcrumbList>,
    );

    expect(screen.getByRole('navigation').getAttribute('aria-label')).toEqual(
      'パンくずリスト',
    );
    expect(screen.getByText('Amebaとは').getAttribute('aria-current')).toEqual(
      'page',
    );
  });
});
