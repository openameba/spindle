import { POSES } from '../constants/poses';
import { PARTS_BY_CATEGORY } from '../constants/parts';
import type { IllustOptions, PartOptionInfo, PoseOptionInfo } from './types';

function toPartOptionInfo(items: { id: string; label: string; path: string }[]): PartOptionInfo[] {
  return items.map(({ id, label, path }) => ({ id, label, path }));
}

export function getOptions(): IllustOptions {
  const poses: PoseOptionInfo[] = POSES.map((pose) => {
    const parts: Record<string, PartOptionInfo[]> = {};

    for (const layer of pose.layers) {
      const category = layer.part;

      if (category === 'head') {
        for (const headType of pose.headTypes) {
          const key = `head/${headType}`;
          const items = PARTS_BY_CATEGORY[key];
          if (items) {
            parts[key] = toPartOptionInfo(items);
          }
        }
      } else if (category === 'body' && pose.bodySubdir) {
        const items = PARTS_BY_CATEGORY[pose.bodySubdir];
        if (items) {
          parts[category] = toPartOptionInfo(items);
        }
      } else {
        const items = PARTS_BY_CATEGORY[category];
        if (items) {
          parts[category] = toPartOptionInfo(items);
        }
      }
    }

    return {
      id: pose.id,
      label: pose.label,
      canvasWidth: pose.canvasWidth,
      canvasHeight: pose.canvasHeight,
      headTypes: pose.headTypes,
      hasNeckTilt: !!pose.neckTilts,
      parts,
    };
  });

  return { poses };
}
