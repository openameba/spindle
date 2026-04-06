import type { IllustState, PoseId } from '../types';
import { POSE_MAP } from '../constants/poses';
import { PARTS_BY_CATEGORY } from '../constants/parts';

function findGreenDefault(items: { path: string }[] | undefined): string | null {
  if (!items?.length) return null;
  return items.find((i) => i.path.includes('-green.'))?.path ?? items[0].path;
}

function getDefaultParts(poseId: PoseId): Partial<IllustState> {
  const pose = POSE_MAP[poseId];
  if (!pose) return {};

  const result: Partial<IllustState> = {};
  for (const layer of pose.layers) {
    const part = layer.part;
    if (part === 'head') {
      const headType = pose.headTypes[0] ?? 'man';
      const key = `head/${headType}`;
      result.head = findGreenDefault(PARTS_BY_CATEGORY[key]);
    } else if (part === 'body') {
      const bodyKey = pose.bodySubdir ?? 'body';
      result.body = findGreenDefault(PARTS_BY_CATEGORY[bodyKey]);
    } else if (part === 'leg') {
      const legKey = pose.legSubdir ?? 'leg';
      result.leg = findGreenDefault(PARTS_BY_CATEGORY[legKey]);
    } else {
      (result as Record<string, string | null>)[part] = null;
    }
  }
  return result;
}

function pickRandom(items: { path: string }[] | undefined): string | null {
  if (!items?.length) return null;
  return items[Math.floor(Math.random() * items.length)].path;
}

const ACCESSORY_PARTS = new Set(['hat', 'glasses', 'mask', 'beard', 'umbrella']);

export function getRandomParts(poseId: PoseId): Partial<IllustState> {
  const pose = POSE_MAP[poseId];
  if (!pose) return {};

  const result: Partial<IllustState> = {};
  for (const layer of pose.layers) {
    const part = layer.part;
    if (part === 'head') {
      const headType = pose.headTypes[0] ?? 'man';
      result.head = pickRandom(PARTS_BY_CATEGORY[`head/${headType}`]);
    } else if (part === 'body') {
      result.body = pickRandom(PARTS_BY_CATEGORY[pose.bodySubdir ?? 'body']);
    } else if (part === 'leg') {
      result.leg = pickRandom(PARTS_BY_CATEGORY[pose.legSubdir ?? 'leg']);
    } else if (ACCESSORY_PARTS.has(part)) {
      const items = PARTS_BY_CATEGORY[part];
      if (items?.length && Math.random() > 0.5) {
        (result as Record<string, string | null>)[part] = pickRandom(items);
      } else {
        (result as Record<string, string | null>)[part] = null;
      }
    }
  }
  return result;
}

export function getDefaultState(poseId: PoseId = 'adult-standing'): IllustState {
  const pose = POSE_MAP[poseId];
  return {
    pose: poseId,
    neckTilt: 'normal',
    headBodySwap: pose?.defaultHeadBodySwap ?? false,
    bodyLegSwap: false,
    head: null,
    body: null,
    leg: null,
    hat: null,
    glasses: null,
    mask: null,
    beard: null,
    umbrella: null,
    scale: 1,
    ...getDefaultParts(poseId),
  };
}
