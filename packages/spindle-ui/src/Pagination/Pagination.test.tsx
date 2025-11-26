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

  test('has navigation landmark with aria-label', () => {
    render(
      <Pagination
        total={5}
        current={3}
        linkFollowType="all"
        createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
      />,
    );
    expect(
      screen.getByRole('navigation', { name: 'ページネーション' }),
    ).toBeInTheDocument();
  });

  test('current page has aria-current="page"', () => {
    render(
      <Pagination
        total={5}
        current={3}
        linkFollowType="all"
        createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
      />,
    );
    expect(screen.getByRole('link', { name: '3ページ目' })).toHaveAttribute(
      'aria-current',
      'page',
    );
  });

  test('showTotal=true shows "{current}/{total}ページ"', () => {
    render(
      <Pagination
        total={20}
        current={8}
        linkFollowType="all"
        showTotal={true}
        createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
      />,
    );
    expect(screen.getByText('8/20ページ')).toBeInTheDocument();
  });

  test('renders 3 numeric items when small viewport (matchMedia=true)', () => {
    const originalMatchMedia = window.matchMedia;
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: (query: string) => ({
        matches: true,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }),
    });

    render(
      <Pagination
        total={10}
        current={5}
        linkFollowType="all"
        createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
      />,
    );

    const numericLinks = screen.getAllByRole('link', {
      name: /ページ目$/,
    });
    expect(numericLinks).toHaveLength(3);

    // restore
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: originalMatchMedia,
    });
  });

  test('renders 5 numeric items when normal viewport (matchMedia=false)', () => {
    const originalMatchMedia = window.matchMedia;
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }),
    });

    render(
      <Pagination
        total={10}
        current={5}
        linkFollowType="all"
        createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
      />,
    );

    const numericLinks = screen.getAllByRole('link', {
      name: /ページ目$/,
    });
    expect(numericLinks).toHaveLength(5);

    // restore
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: originalMatchMedia,
    });
  });
});
