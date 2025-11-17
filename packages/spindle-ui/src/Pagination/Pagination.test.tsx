import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { Pagination } from './Pagination';

describe('<Pagination />', () => {
  test('click', async () => {
    const onClick = vi.fn();
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

  test('prev is disabled on the first page when total is below threshold (<100)', () => {
    render(
      <Pagination
        total={20}
        current={1}
        linkFollowType="all"
        showTotal={false}
        createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
        onPageChange={() => {}}
      />,
    );

    const prev = screen.getByRole('button', { name: '前へ' });
    expect(prev).toBeDisabled();

    const next = screen.getByRole('link', { name: '次へ' });
    expect(next).toBeInTheDocument();
  });

  test('next is disabled on the last page when total is below threshold (<100)', () => {
    render(
      <Pagination
        total={20}
        current={20}
        linkFollowType="all"
        showTotal={false}
        createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
        onPageChange={() => {}}
      />,
    );

    const next = screen.getByRole('button', { name: '次へ' });
    expect(next).toBeDisabled();

    const prev = screen.getByRole('link', { name: '前へ' });
    expect(prev).toBeInTheDocument();
  });

  test('first is disabled on the first page when total is equal or above threshold (>=100)', () => {
    render(
      <Pagination
        total={100}
        current={1}
        linkFollowType="all"
        showTotal={false}
        createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
        onPageChange={() => {}}
      />,
    );

    const first = screen.getByRole('button', { name: '最初へ' });
    expect(first).toBeDisabled();

    const last = screen.getByRole('link', { name: '最後へ' });
    expect(last).toBeInTheDocument();
  });

  test('last is disabled on the last page when total is equal or above threshold (>=100)', () => {
    render(
      <Pagination
        total={100}
        current={100}
        linkFollowType="all"
        showTotal={false}
        createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
        onPageChange={() => {}}
      />,
    );

    const last = screen.getByRole('button', { name: '最後へ' });
    expect(last).toBeDisabled();

    const first = screen.getByRole('link', { name: '最初へ' });
    expect(first).toBeInTheDocument();
  });
});
