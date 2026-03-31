import { useCallback, useEffect, useRef } from 'react';
import type { IllustState, LayerEntry, PartCategory } from '../types';
import { POSE_MAP } from '../constants/poses';
import { usePartsLoader } from './usePartsLoader';
import partOffsets from '../constants/part-offsets.json';

const PART_OFFSETS = partOffsets as Record<
  string,
  { offsetX: number; offsetY: number }
>;

// Figma reference sizes for each part type.
// Components use these fixed frame sizes; SVG exports may be larger due to overflow.
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

function getSelectedPath(
  state: IllustState,
  part: PartCategory,
): string | null {
  return state[part];
}

function getOffsetKey(path: string): string {
  return path.replace(/^\/illust\//, '').replace(/\.svg$/, '');
}

// Extra padding around the canvas to accommodate overflow
const CANVAS_PADDING = 200;

export function useIllustCanvas(state: IllustState) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { loadImage } = usePartsLoader();

  const drawToCanvas = useCallback(
    async (canvas: HTMLCanvasElement, scale: number) => {
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

    // Build effective layers: override with neck tilt layers if applicable
    const tiltConfig =
      state.neckTilt !== 'normal'
        ? pose.neckTilts?.[state.neckTilt]
        : undefined;
    const tiltParts = new Set(tiltConfig?.layers.map((l) => l.part));
    let effectiveLayers = pose.layers.flatMap((layer) => {
      if (tiltParts.has(layer.part)) {
        const tiltLayers = tiltConfig!.layers.filter(
          (l) => l.part === layer.part,
        );
        return tiltLayers;
      }
      return [layer];
    });

    // Body↔Leg swap: move body behind leg
    if (state.bodyLegSwap) {
      const legIdx = effectiveLayers.findIndex((l) => l.part === 'leg');
      const bodyIdx = effectiveLayers.findIndex((l) => l.part === 'body');
      if (legIdx !== -1 && bodyIdx !== -1 && bodyIdx > legIdx) {
        const bodyLayer = effectiveLayers.splice(bodyIdx, 1);
        effectiveLayers.splice(legIdx, 0, ...bodyLayer);
      }
    }

    // Head↔Body swap: move head (and accessories) behind body
    if (state.headBodySwap) {
      const bodyIdx = effectiveLayers.findIndex((l) => l.part === 'body');
      const headIdx = effectiveLayers.findIndex((l) => l.part === 'head');
      if (bodyIdx !== -1 && headIdx !== -1 && headIdx > bodyIdx) {
        const headAndAcc = effectiveLayers.splice(headIdx);
        effectiveLayers.splice(bodyIdx, 0, ...headAndAcc);
      }
    }

    for (const layer of effectiveLayers) {
      const path = getSelectedPath(state, layer.part);
      if (!path) continue;

      try {
        const img = await loadImage(path);
        drawPart(ctx, img, layer, path);
      } catch {
        // Skip failed images
      }
    }
  },
    [state, loadImage],
  );

  const draw = useCallback(async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    await drawToCanvas(canvas, 1);
  }, [drawToCanvas]);

  const exportToCanvas = useCallback(async () => {
    const canvas = document.createElement('canvas');
    await drawToCanvas(canvas, state.scale);
    return canvas;
  }, [drawToCanvas, state.scale]);

  useEffect(() => {
    draw();
  }, [draw]);

  return { canvasRef, exportToCanvas };
}

function drawPart(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  layer: LayerEntry,
  path: string,
) {
  const ref = REFERENCE_SIZES[layer.part];
  if (!ref) {
    // No reference — draw at layout size directly
    ctx.drawImage(img, layer.x, layer.y, layer.width, layer.height);
    return;
  }

  // Uniform scale: how much the layout box scales the reference frame
  const uniformScale = layer.width / ref.w;

  const imgW = img.naturalWidth;
  const imgH = img.naturalHeight;
  const dw = imgW * uniformScale;
  const dh = imgH * uniformScale;

  // Get the offset: how far the frame origin is from the SVG bounding box origin
  const key = getOffsetKey(path);
  const offset = PART_OFFSETS[key];
  const ox = (offset?.offsetX ?? 0) * uniformScale;
  const oy = (offset?.offsetY ?? 0) * uniformScale;

  const dx = layer.x - ox;
  const dy = layer.y - oy;

  if (layer.rotation) {
    // Use explicit pivot if provided (flex container center), otherwise part center
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
