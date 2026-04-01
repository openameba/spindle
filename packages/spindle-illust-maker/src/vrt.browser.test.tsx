import { describe, it, expect, beforeEach } from 'vitest';
import { render, cleanup } from 'vitest-browser-react';
import { page, userEvent } from 'vitest/browser';
import { App } from './App';
import { waitForCanvasRender } from './test-helpers';

async function renderAndWait() {
  const result = await render(<App />);
  await waitForCanvasRender(result.container);
  return result;
}

describe('VRT: Canvas描画', () => {
  beforeEach(() => {
    cleanup();
  });

  it('デフォルト表示（adult-standing）', async () => {
    await renderAndWait();
    await expect(page.getByRole('main')).toMatchScreenshot('default.png');
  });

  it('ポーズ: 座り', async () => {
    const { container } = await renderAndWait();
    await userEvent.click(page.getByRole('button', { name: '座り', exact: true }));
    await waitForCanvasRender(container);
    await expect(page.getByRole('main')).toMatchScreenshot('pose-sitting.png');
  });

  it('ポーズ: 机座り', async () => {
    const { container } = await renderAndWait();
    await userEvent.click(page.getByText('机座り'));
    await waitForCanvasRender(container);
    await expect(page.getByRole('main')).toMatchScreenshot('pose-desk.png');
  });

  it('ポーズ: 乗り', async () => {
    const { container } = await renderAndWait();
    await userEvent.click(page.getByText('乗り'));
    await waitForCanvasRender(container);
    await expect(page.getByRole('main')).toMatchScreenshot('pose-riding.png');
  });

  it('ポーズ: Old', async () => {
    const { container } = await renderAndWait();
    await userEvent.click(page.getByText('Old'));
    await waitForCanvasRender(container);
    await expect(page.getByRole('main')).toMatchScreenshot('pose-old.png');
  });

  it('ポーズ: Child', async () => {
    const { container } = await renderAndWait();
    await userEvent.click(page.getByText('Child'));
    await waitForCanvasRender(container);
    await expect(page.getByRole('main')).toMatchScreenshot('pose-child.png');
  });

  it('ポーズ: Baby', async () => {
    const { container } = await renderAndWait();
    await userEvent.click(page.getByText('Baby'));
    await waitForCanvasRender(container);
    await expect(page.getByRole('main')).toMatchScreenshot('pose-baby.png');
  });

  it('帽子追加', async () => {
    const { container } = await renderAndWait();
    await userEvent.click(page.getByText('Hat'));
    // グリッド内の最初のパーツサムネイルをクリック（None の次）
    const thumbs = container.querySelectorAll('button[title]');
    if (thumbs.length > 0) {
      await userEvent.click(thumbs[0] as HTMLElement);
      await waitForCanvasRender(container);
    }
    await expect(page.getByRole('main')).toMatchScreenshot('hat-added.png');
  });

  it('帽子解除', async () => {
    const { container } = await renderAndWait();
    // まず帽子を追加
    await userEvent.click(page.getByText('Hat'));
    const thumbs = container.querySelectorAll('button[title]');
    if (thumbs.length > 0) {
      await userEvent.click(thumbs[0] as HTMLElement);
      await waitForCanvasRender(container);
    }
    // None をクリックして解除
    await userEvent.click(page.getByText('None'));
    await waitForCanvasRender(container);
    await expect(page.getByRole('main')).toMatchScreenshot('hat-removed.png');
  });

  it('首の傾き: 上', async () => {
    const { container } = await renderAndWait();
    const dropdown = container.querySelector('[aria-labelledby="neck-tilt-label"]') as HTMLSelectElement;
    if (dropdown) {
      dropdown.value = 'up';
      dropdown.dispatchEvent(new Event('change', { bubbles: true }));
      await waitForCanvasRender(container);
    }
    await expect(page.getByRole('main')).toMatchScreenshot('neck-tilt-up.png');
  });

  it('首の傾き: 下', async () => {
    const { container } = await renderAndWait();
    const dropdown = container.querySelector('[aria-labelledby="neck-tilt-label"]') as HTMLSelectElement;
    if (dropdown) {
      dropdown.value = 'down';
      dropdown.dispatchEvent(new Event('change', { bubbles: true }));
      await waitForCanvasRender(container);
    }
    await expect(page.getByRole('main')).toMatchScreenshot('neck-tilt-down.png');
  });

  it('Head↔Body スワップ', async () => {
    const { container } = await renderAndWait();
    const label = container.querySelector('label[for="head-body-swap"]') as HTMLLabelElement;
    if (label) {
      await userEvent.click(label);
      await waitForCanvasRender(container);
    }
    await expect(page.getByRole('main')).toMatchScreenshot('head-body-swap.png');
  });

  it('Body↔Leg スワップ', async () => {
    const { container } = await renderAndWait();
    const label = container.querySelector('label[for="body-leg-swap"]') as HTMLLabelElement;
    if (label) {
      await userEvent.click(label);
      await waitForCanvasRender(container);
    }
    await expect(page.getByRole('main')).toMatchScreenshot('body-leg-swap.png');
  });
});
