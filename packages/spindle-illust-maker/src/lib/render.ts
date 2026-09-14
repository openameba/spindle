import partOffsets from '../constants/part-offsets.json';
import { POSE_MAP } from '../constants/poses';
import type { IllustState, LayerEntry, PartCategory } from '../types';
import type { ImageLoader } from './image-loader';

const PART_OFFSETS = partOffsets as Record<
  string,
  { offsetX: number; offsetY: number }
>;

const REFERENCE_SIZES: Record<string, { w: number; h: number }> = {
  head: { w: 180, h: 170 },
  body: { w: 300, h: 250 },
  'body-ride': { w: 300, h: 250 },
  leg: { w: 300, h: 400 },
  hat: { w: 160, h: 95 },
  glasses: { w: 86, h: 49 },
  mask: { w: 96, h: 65 },
  beard: { w: 75, h: 48 },
};

const CANVAS_PADDING = 200;

export type LoadedLayer = {
  layer: LayerEntry;
  path: string;
  img: HTMLImageElement;
};

function getSelectedPath(
  state: IllustState,
  part: PartCategory,
): string | null {
  return state[part];
}

function getOffsetKey(path: string): string {
  return path.replace(/^\/illust\//, '').replace(/\.svg$/, '');
}

function buildEffectiveLayers(
  state: IllustState,
  layers: LayerEntry[],
): LayerEntry[] {
  const pose = POSE_MAP[state.pose];
  if (!pose) return layers;

  const tiltConfig =
    state.neckTilt !== 'normal' ? pose.neckTilts?.[state.neckTilt] : undefined;
  const tiltParts = new Set(tiltConfig?.layers.map((l) => l.part));

  const effectiveLayers = layers.flatMap((layer) => {
    if (tiltParts.has(layer.part)) {
      return tiltConfig!.layers.filter((l) => l.part === layer.part);
    }
    return [layer];
  });

  if (state.bodyLegSwap) {
    const legIdx = effectiveLayers.findIndex((l) => l.part === 'leg');
    const bodyIdx = effectiveLayers.findIndex((l) => l.part === 'body');
    if (legIdx !== -1 && bodyIdx !== -1 && bodyIdx > legIdx) {
      const bodyLayer = effectiveLayers.splice(bodyIdx, 1);
      effectiveLayers.splice(legIdx, 0, ...bodyLayer);
    }
  }

  if (state.headBodySwap) {
    const bodyIdx = effectiveLayers.findIndex((l) => l.part === 'body');
    const headIdx = effectiveLayers.findIndex((l) => l.part === 'head');
    if (bodyIdx !== -1 && headIdx !== -1 && bodyIdx !== headIdx) {
      if (headIdx > bodyIdx) {
        const headAndAcc = effectiveLayers.splice(headIdx);
        effectiveLayers.splice(bodyIdx, 0, ...headAndAcc);
      } else {
        const [headLayer] = effectiveLayers.splice(headIdx, 1);
        const newBodyIdx = effectiveLayers.findIndex((l) => l.part === 'body');
        effectiveLayers.splice(newBodyIdx + 1, 0, headLayer);
      }
    }
  }

  return effectiveLayers;
}

function drawPart(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  layer: LayerEntry,
  path: string,
) {
  const ref = REFERENCE_SIZES[layer.part];
  if (!ref) {
    ctx.drawImage(img, layer.x, layer.y, layer.width, layer.height);
    return;
  }

  const uniformScale = layer.width / ref.w;
  const imgW = img.naturalWidth;
  const imgH = img.naturalHeight;
  const dw = imgW * uniformScale;
  const dh = imgH * uniformScale;

  const key = getOffsetKey(path);
  const offset = PART_OFFSETS[key];
  const ox = (offset?.offsetX ?? 0) * uniformScale;
  const oy = (offset?.offsetY ?? 0) * uniformScale;

  const dx = layer.x - ox;
  const dy = layer.y - oy;

  if (layer.rotation) {
    const cx = layer.pivotX ?? layer.x + layer.width / 2;
    const cy = layer.pivotY ?? layer.y + layer.height / 2;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate((layer.rotation * Math.PI) / 180);
    ctx.drawImage(img, dx - cx, dy - cy, dw, dh);
    ctx.restore();
  } else {
    ctx.drawImage(img, dx, dy, dw, dh);
  }
}

/**
 * state に必要な画像をすべて並列に読み込み、描画順に並べて返す。
 * 読み込みに失敗したパーツは描画対象から外す。
 */
export async function loadLayers(
  state: IllustState,
  imageLoader: ImageLoader,
): Promise<LoadedLayer[]> {
  const pose = POSE_MAP[state.pose];
  if (!pose) return [];

  const targets = buildEffectiveLayers(state, pose.layers).flatMap((layer) => {
    const path = getSelectedPath(state, layer.part);
    return path ? [{ layer, path }] : [];
  });

  const loaded = await Promise.all(
    targets.map(async ({ layer, path }) => {
      try {
        const img = await imageLoader.loadImage(path);
        return { layer, path, img };
      } catch {
        return null;
      }
    }),
  );

  return loaded.filter((l): l is LoadedLayer => l !== null);
}

/**
 * 読み込み済みのレイヤーを canvas に同期的に描く。
 * 非同期処理を挟まないため、描画途中で別の描画に割り込まれることがない。
 */
export function paintLayers(
  canvas: HTMLCanvasElement,
  state: IllustState,
  layers: LoadedLayer[],
  scale: number,
): void {
  const pose = POSE_MAP[state.pose];
  if (!pose) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const pad = (pose.padding ?? CANVAS_PADDING) * scale;
  const w = pose.canvasWidth * scale + pad * 2;
  const h = pose.canvasHeight * scale + pad * 2;
  canvas.width = w;
  canvas.height = h;

  ctx.clearRect(0, 0, w, h);
  ctx.translate(pad, pad);
  ctx.scale(scale, scale);

  for (const { layer, path, img } of layers) {
    drawPart(ctx, img, layer, path);
  }
}

export async function drawToCanvas(
  canvas: HTMLCanvasElement,
  state: IllustState,
  imageLoader: ImageLoader,
  scale: number,
): Promise<void> {
  const layers = await loadLayers(state, imageLoader);
  paintLayers(canvas, state, layers, scale);
}

export async function renderToBlob(
  state: IllustState,
  imageLoader: ImageLoader,
  scale: number = 1,
): Promise<Blob> {
  const canvas = document.createElement('canvas');
  await drawToCanvas(canvas, state, imageLoader, scale);

  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
      } else {
        reject(new Error('Failed to create blob from canvas'));
      }
    }, 'image/png');
  });
}
