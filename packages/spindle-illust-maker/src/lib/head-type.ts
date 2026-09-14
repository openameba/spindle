import type { HeadType } from '../types';

const HEAD_TYPES: readonly HeadType[] = [
  'man',
  'woman',
  'child',
  'old',
  'baby',
];

/**
 * head パーツのパス（`/illust/head/<type>/<name>.svg`）からヘッドタイプを取り出す。
 * UI の選択状態を state から導出するために使い、別 state で二重管理しない。
 */
export function getHeadTypeFromPath(path: string | null): HeadType | null {
  if (!path) return null;
  const match = path.match(/\/head\/([^/]+)\//);
  const type = match?.[1];
  if (type && (HEAD_TYPES as readonly string[]).includes(type)) {
    return type as HeadType;
  }
  return null;
}
