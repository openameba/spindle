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
        showTotal={true}
        createUrl={(pageNumber) => `/detail/${pageNumber}.html`}
        onPageChange={onClick}
      />,
    );

    await user.click(screen.getByText(1));
    fireEvent.click(screen.getByText(1));
    expect(onClick).toBeCalled();
  });
});
