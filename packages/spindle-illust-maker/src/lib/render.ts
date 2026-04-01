import type { IllustState, LayerEntry, PartCategory } from '../types';
import { POSE_MAP } from '../constants/poses';
import partOffsets from '../constants/part-offsets.json';
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
  umbrella: { w: 160, h: 95 },
};

const CANVAS_PADDING = 200;

function getSelectedPath(
  state: IllustState,
  part: PartCategory,
): string | null {
  return state[part];
}

function getOffsetKey(path: string): string {
  return path.replace(/^\/illust\//, '').replace(/\.svg$/, '');
}

function buildEffectiveLayers(state: IllustState, layers: LayerEntry[]): LayerEntry[] {
  const pose = POSE_MAP[state.pose];
  if (!pose) return layers;

  const tiltConfig =
    state.neckTilt !== 'normal'
      ? pose.neckTilts?.[state.neckTilt]
      : undefined;
  const tiltParts = new Set(tiltConfig?.layers.map((l) => l.part));

  let effectiveLayers = layers.flatMap((layer) => {
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
    if (bodyIdx !== -1 && headIdx !== -1 && headIdx > bodyIdx) {
      const headAndAcc = effectiveLayers.splice(headIdx);
      effectiveLayers.splice(bodyIdx, 0, ...headAndAcc);
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
    const cx = layer.pivotX ?? (layer.x + layer.width / 2);
    const cy = layer.pivotY ?? (layer.y + layer.height / 2);
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate((layer.rotation * Math.PI) / 180);
    ctx.drawImage(img, dx - cx, dy - cy, dw, dh);
    ctx.restore();
  } else {
    ctx.drawImage(img, dx, dy, dw, dh);
  }
}

export async function drawToCanvas(
  canvas: HTMLCanvasElement,
  state: IllustState,
  imageLoader: ImageLoader,
  scale: number,
): Promise<void> {
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

  const effectiveLayers = buildEffectiveLayers(state, pose.layers);

  for (const layer of effectiveLayers) {
    const path = getSelectedPath(state, layer.part);
    if (!path) continue;

    try {
      const img = await imageLoader.loadImage(path);
      drawPart(ctx, img, layer, path);
    } catch {
      // Skip failed images
    }
  }
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
