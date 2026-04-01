/**
 * Canvas にピクセルが描画されるまで待つ。
 * SVG 画像の読み込み完了を待つために使用する。
 */
export async function waitForCanvasRender(
  container: HTMLElement,
  timeout = 5000,
): Promise<HTMLCanvasElement> {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    const canvas = container.querySelector('canvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx && canvas.width > 0 && canvas.height > 0) {
        const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        if (data.some((v) => v !== 0)) return canvas;
      }
    }
    await new Promise((r) => setTimeout(r, 100));
  }
  throw new Error('Canvas did not render within timeout');
}
