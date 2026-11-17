import { render, screen } from '@testing-library/react';
import React from 'react';

import { InlineNotification } from './InlineNotification';

describe('<InlineNotification />', () => {
  test('renders text only as a single paragraph without a group', () => {
    const { container } = render(
      <InlineNotification.Frame visible>
        <InlineNotification.Text>メッセージ</InlineNotification.Text>
      </InlineNotification.Frame>,
    );

    const text = screen.getByText('メッセージ');
    expect(text.tagName).toBe('P');
    expect(text).toHaveClass('spui-InlineNotification-text');
    expect(container.querySelector('.spui-InlineNotification-textGroup')).toBe(
      null,
    );
  });

  test('groups description below the text', () => {
    render(
      <InlineNotification.Frame visible>
        <InlineNotification.Text>メッセージ</InlineNotification.Text>
        <InlineNotification.Description>補足</InlineNotification.Description>
      </InlineNotification.Frame>,
    );

    const text = screen.getByText('メッセージ');
    const description = screen.getByText('補足');
    expect(text).toHaveClass('spui-InlineNotification-text');
    expect(description).toHaveClass('spui-InlineNotification-description');
    expect(text.nextElementSibling).toBe(description);
    expect(text.parentElement).toHaveClass('spui-InlineNotification-textGroup');
  });

  test('keeps siblings order and supports Fragment children', () => {
    const { container } = render(
      <InlineNotification.Frame visible>
        {/* biome-ignore lint/complexity/noUselessFragments: Fragment 配下の子要素も扱えることを検証する */}
        <>
          <InlineNotification.Icon>icon</InlineNotification.Icon>
          <InlineNotification.Text>メッセージ</InlineNotification.Text>
          <InlineNotification.Description>補足</InlineNotification.Description>
        </>
        <InlineNotification.Button>確認</InlineNotification.Button>
      </InlineNotification.Frame>,
    );

    const content = container.querySelector('.spui-InlineNotification-content');
    expect(
      Array.from(content?.children ?? []).map((el) => el.className),
    ).toEqual([
      'spui-InlineNotification-icon',
      'spui-InlineNotification-textGroup',
      'spui-InlineNotification-button',
    ]);
  });
});
