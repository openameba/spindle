import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PaginationItem } from './PaginationItem';

describe('PaginationItem', () => {
  it('disabled item is not focusable and not clickable', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();

    render(
      <PaginationItem
        type="prev"
        current={1}
        total={10}
        linkFollowType="all"
        onClick={onClick}
        createUrl={(n) => `/page/${n}`}
      />,
    );

    const label = screen.getByText('前へ');
    const link = label.closest('a') as HTMLAnchorElement;
    expect(link).toHaveAttribute('aria-label', '前へ');
    expect(link).toHaveAttribute('aria-hidden', 'true');
    expect(link).not.toHaveAttribute('href');
    expect(link.tabIndex).toBe(-1);

    await user.click(link);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('enabled item is focusable and clickable', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();

    render(
      <PaginationItem
        type="next"
        current={1}
        total={10}
        linkFollowType="all"
        onClick={onClick}
        createUrl={(n) => `/page/${n}`}
      />,
    );

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('aria-label', '次へ');
    expect(link).toHaveAttribute('href', '/page/2');
    expect(link).not.toHaveAttribute('aria-hidden');
    expect(link.getAttribute('tabindex')).toBeNull();

    await user.click(link);
    expect(onClick).toHaveBeenCalled();
  });
});
