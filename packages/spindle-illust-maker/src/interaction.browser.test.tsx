import { beforeEach, describe, expect, it } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import { cleanup, render } from 'vitest-browser-react';
import { App } from './App';
import { waitForCanvasRender } from './test-helpers';

async function renderAndWait() {
  const result = await render(<App />);
  await waitForCanvasRender(result.container);
  return result;
}

describe('UIインタラクション', () => {
  beforeEach(() => {
    cleanup();
    // App は起動時にURLから状態を復元するため、前のテストの選択が漏れないようにリセットする
    window.history.replaceState(null, '', window.location.pathname);
  });

  it('ポーズ切替でアクセサリがリセットされる', async () => {
    await renderAndWait();
    // 帽子を選択
    await userEvent.click(page.getByText('Hat'));
    const thumbs = document.querySelectorAll('button[title]');
    if (thumbs.length > 0) {
      await userEvent.click(thumbs[0] as HTMLElement);
    }
    // ポーズを切り替え
    await userEvent.click(
      page.getByRole('button', { name: '座り', exact: true }),
    );
    // Hat タブに戻ると None が選択状態
    await userEvent.click(page.getByText('Hat'));
    const noneButton = page.getByText('None');
    await expect.element(noneButton).toBeVisible();
  });

  it('child でアクセサリタブが非表示', async () => {
    await renderAndWait();
    await userEvent.click(page.getByText('Child'));
    await expect.element(page.getByText('Hat')).not.toBeInTheDocument();
    await expect.element(page.getByText('Glasses')).not.toBeInTheDocument();
    await expect.element(page.getByText('Mask')).not.toBeInTheDocument();
    await expect.element(page.getByText('Beard')).not.toBeInTheDocument();
  });

  it('baby でアクセサリタブが非表示', async () => {
    await renderAndWait();
    await userEvent.click(page.getByText('Baby'));
    await expect.element(page.getByText('Hat')).not.toBeInTheDocument();
    await expect.element(page.getByText('Glasses')).not.toBeInTheDocument();
    await expect.element(page.getByText('Mask')).not.toBeInTheDocument();
    await expect.element(page.getByText('Beard')).not.toBeInTheDocument();
  });

  it('adult-bowing で首の傾きドロップダウンが非表示', async () => {
    const { container } = await renderAndWait();
    await userEvent.click(
      page.getByRole('button', { name: 'お辞儀', exact: true }),
    );
    const dropdown = container.querySelector('#neck-tilt');
    expect(dropdown).toBeNull();
  });

  it('adult-desk で首の傾きドロップダウンが非表示', async () => {
    const { container } = await renderAndWait();
    await userEvent.click(page.getByText('机座り'));
    const dropdown = container.querySelector('#neck-tilt');
    expect(dropdown).toBeNull();
  });

  it('adult-standing で首の傾きドロップダウンが表示される', async () => {
    await renderAndWait();
    await expect.element(page.getByText('首の傾き')).toBeVisible();
  });

  it('child で Body↔Leg トグルが非表示', async () => {
    const { container } = await renderAndWait();
    await userEvent.click(page.getByText('Child'));
    const toggle = container.querySelector('#body-leg-swap');
    expect(toggle).toBeNull();
  });

  it('adult-standing で Body↔Leg トグルが表示', async () => {
    const { container } = await renderAndWait();
    const toggle = container.querySelector('#body-leg-swap');
    expect(toggle).not.toBeNull();
  });

  it('ヘッドタイプ切替でパーツグリッドが変わる', async () => {
    const { container } = await renderAndWait();
    // Head タブがデフォルトでアクティブ
    // Man のパーツ数を記録
    const manThumbs = container.querySelectorAll('button[title]');
    const manCount = manThumbs.length;

    // Woman に切り替え
    await userEvent.click(page.getByText('Woman'));
    const womanThumbs = container.querySelectorAll('button[title]');
    const womanCount = womanThumbs.length;

    // Man と Woman でパーツ数が異なることを確認（53 vs 55）
    expect(womanCount).not.toBe(manCount);
  });

  it('Woman を選んでランダム生成してもヘッドタイプが維持される', async () => {
    const { container } = await renderAndWait();
    await userEvent.click(page.getByText('Woman'));
    await userEvent.click(page.getByRole('button', { name: 'ランダム' }));

    // ランダムで woman の head が選ばれるので、表示中の Woman グリッド内に選択済みサムネイルがある
    const selected = container.querySelector(
      'button[title][class*="thumb-selected"] img',
    ) as HTMLImageElement | null;
    expect(selected).not.toBeNull();
    expect(selected!.getAttribute('src')).toContain('/head/woman/');
  });

  it('URL から woman の head と首の傾きを復元し、UI に反映する', async () => {
    window.history.replaceState(
      null,
      '',
      `${window.location.pathname}?pose=adult-standing&head=head%2Fwoman%2F01-green&neckTilt=up`,
    );
    const { container } = await renderAndWait();

    const dropdown = container.querySelector('#neck-tilt') as HTMLSelectElement;
    expect(dropdown.value).toBe('up');

    const selected = container.querySelector(
      'button[title][class*="thumb-selected"] img',
    ) as HTMLImageElement | null;
    expect(selected).not.toBeNull();
    expect(selected!.getAttribute('src')).toContain('/head/woman/01-green');
  });

  it('首の傾きのドロップダウンにラベルが関連付けられている', async () => {
    const { container } = await renderAndWait();
    const dropdown = container.querySelector('#neck-tilt') as HTMLSelectElement;
    expect(dropdown).not.toBeNull();
    expect(
      Array.from(dropdown.labels ?? []).map((l) => l.textContent),
    ).toContain('首の傾き');
  });

  it('Copy ボタンでトーストが表示される', async () => {
    await renderAndWait();
    await userEvent.click(page.getByText('Copy'));
    // クリップボード API の成否に関わらずトーストが表示される
    await expect
      .element(
        page
          .getByText('クリップボードにコピーしました')
          .or(page.getByText('コピーに失敗しました')),
      )
      .toBeVisible();
  });
});
