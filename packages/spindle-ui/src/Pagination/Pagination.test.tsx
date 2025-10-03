import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { jest } from '@jest/globals';

import { Pagination } from './Pagination';

describe('<Pagination />', () => {
  test('click', async () => {
    const onClick = jest.fn();
    const user = userEvent.setup();

    render(
      <Pagination
        total={20}
        current={8}
        linkFollowType="all"
        showTotal={true}
        createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
        onPageChange={onClick}
      />,
    );

    await user.click(screen.getByText(1));
    fireEvent.click(screen.getByText(1));
    expect(onClick).toHaveBeenCalled();
  });

  test('should render all anchors without rel attribute when linkFollowType is all', () => {
    render(
      <Pagination
        total={20}
        current={8}
        linkFollowType="all"
        showTotal={true}
        createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
        onPageChange={() => {}}
      />,
    );

    const anchors = screen.getAllByRole('link');
    anchors.forEach((anchor) => {
      expect(anchor).not.toHaveAttribute('rel');
    });
  });

  test('should render all anchors with rel="nofollow" when linkFollowType is none', () => {
    render(
      <Pagination
        total={20}
        current={8}
        linkFollowType="none"
        showTotal={true}
        createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
        onPageChange={() => {}}
      />,
    );

    const anchors = screen.getAllByRole('link');
    anchors.forEach((anchor) => {
      expect(anchor).toHaveAttribute('rel', 'nofollow');
    });
  });

  test('should render anchors for first page without rel attribute and others with rel="nofollow" when linkFollowType is firstPage', () => {
    render(
      <Pagination
        total={20}
        current={8}
        linkFollowType="firstPage"
        showTotal={true}
        createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
        onPageChange={() => {}}
      />,
    );

    const anchors = screen.getAllByRole('link');
    anchors.forEach((anchor) => {
      const isFirstPage = anchor.getAttribute('href') === '/detail/1.html';
      if (isFirstPage) {
        expect(anchor).not.toHaveAttribute('rel');
      } else {
        expect(anchor).toHaveAttribute('rel', 'nofollow');
      }
    });
  });
});
