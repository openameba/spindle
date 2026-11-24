import { render, screen } from '@testing-library/react';
import React from 'react';

import { InlineNotification } from './InlineNotification';

describe('<InlineNotification />', () => {
  test('renders text only as a single paragraph', () => {
    render(
      <InlineNotification.Frame visible>
        <InlineNotification.Text>メッセージ</InlineNotification.Text>
      </InlineNotification.Frame>,
    );

    const text = screen.getByText('メッセージ');
    expect(text.tagName).toBe('P');
    expect(text).toHaveClass('spui-InlineNotification-text');
  });

  test('renders title and description inside the text paragraph', () => {
    render(
      <InlineNotification.Frame visible>
        <InlineNotification.Text>
          <InlineNotification.Title>メッセージ</InlineNotification.Title>
          <InlineNotification.Description>補足</InlineNotification.Description>
        </InlineNotification.Text>
      </InlineNotification.Frame>,
    );

    const title = screen.getByText('メッセージ');
    const description = screen.getByText('補足');
    expect(title).toHaveClass('spui-InlineNotification-title');
    expect(description).toHaveClass('spui-InlineNotification-description');
    expect(title.nextElementSibling).toBe(description);
    expect(title.parentElement?.tagName).toBe('P');
    expect(title.parentElement).toHaveClass('spui-InlineNotification-text');
  });
});
