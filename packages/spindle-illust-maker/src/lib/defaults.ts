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
