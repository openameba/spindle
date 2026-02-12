import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { InlineDropDown } from './InlineDropDown';

describe('<InlineDropDown />', () => {
  test('select', async () => {
    const user = userEvent.setup();

    render(
      <InlineDropDown>
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
      </InlineDropDown>,
    );

    await user.selectOptions(screen.getByRole('combobox'), 'c');
    expect(screen.getByRole('combobox')).toHaveValue('c');
  });

  test('change', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();

    render(
      <InlineDropDown onChange={onChange}>
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
      </InlineDropDown>,
    );

    await user.selectOptions(screen.getByRole('combobox'), 'c');
    expect(onChange).toHaveBeenCalled();
  });

  test('forward ref', () => {
    const ref = React.createRef<HTMLSelectElement>();

    render(
      <InlineDropDown ref={ref}>
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
      </InlineDropDown>,
    );

    expect(screen.getByRole('combobox')).toEqual(ref.current);
  });

  test('選択肢を変更すると表示テキストが更新される', async () => {
    const user = userEvent.setup();

    render(
      <InlineDropDown>
        <option value="a">選択肢A</option>
        <option value="b">選択肢B</option>
        <option value="c">選択肢C</option>
      </InlineDropDown>,
    );

    expect(screen.getByText('選択肢A')).toBeInTheDocument();

    await user.selectOptions(screen.getByRole('combobox'), 'b');
    expect(screen.getByText('選択肢B')).toBeInTheDocument();
    expect(screen.queryByText('選択肢A')).not.toBeInTheDocument();
  });

  test('disabled状態が正しく適用される', () => {
    render(
      <InlineDropDown disabled>
        <option value="a">A</option>
        <option value="b">B</option>
      </InlineDropDown>,
    );

    expect(screen.getByRole('combobox')).toBeDisabled();
  });

  test('プレースホルダー状態から選択肢を選ぶと表示が更新される', async () => {
    const user = userEvent.setup();

    render(
      <InlineDropDown>
        <option value="">選択してください</option>
        <option value="a">選択肢A</option>
        <option value="b">選択肢B</option>
      </InlineDropDown>,
    );

    expect(screen.getByText('選択してください')).toBeInTheDocument();

    await user.selectOptions(screen.getByRole('combobox'), 'a');
    expect(screen.getByText('選択肢A')).toBeInTheDocument();
    expect(screen.queryByText('選択してください')).not.toBeInTheDocument();
  });

  test('visualSizeがsmallの場合、適切なクラス名が適用される', () => {
    const { container } = render(
      <InlineDropDown visualSize="small">
        <option value="a">A</option>
      </InlineDropDown>,
    );

    expect(
      container.querySelector('.spui-InlineDropDown-text--small'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('.spui-InlineDropDown-icon--small'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('.spui-InlineDropDown-select--small'),
    ).toBeInTheDocument();
  });

  test('visualSizeがmediumの場合（デフォルト）、適切なクラス名が適用される', () => {
    const { container } = render(
      <InlineDropDown>
        <option value="a">A</option>
      </InlineDropDown>,
    );

    expect(
      container.querySelector('.spui-InlineDropDown-text--medium'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('.spui-InlineDropDown-icon--medium'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('.spui-InlineDropDown-select--medium'),
    ).toBeInTheDocument();
  });

  test('初期表示時にdefaultValueで指定されたオプションのテキストが表示される', () => {
    render(
      <InlineDropDown defaultValue="b">
        <option value="a">選択肢A</option>
        <option value="b">選択肢B</option>
        <option value="c">選択肢C</option>
      </InlineDropDown>,
    );

    expect(screen.getByText('選択肢B')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toHaveValue('b');
  });

  test('アイコンにaria-hidden="true"が設定されている', () => {
    const { container } = render(
      <InlineDropDown>
        <option value="a">A</option>
      </InlineDropDown>,
    );

    const icon = container.querySelector('svg');
    expect(icon).toHaveAttribute('aria-hidden', 'true');
  });

  test('aria-labelが正しく適用される', () => {
    render(
      <InlineDropDown aria-label="期間を選択">
        <option value="a">A</option>
      </InlineDropDown>,
    );

    expect(screen.getByRole('combobox')).toHaveAccessibleName('期間を選択');
  });
});
