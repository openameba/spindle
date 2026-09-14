import { PARTS_BY_CATEGORY } from '../constants/parts';
import { POSE_MAP } from '../constants/poses';
import type { IllustState, NeckTilt, PartCategory, PoseId } from '../types';
import { getDefaultState } from './defaults';

const PART_KEYS: PartCategory[] = [
  'head',
  'body',
  'leg',
  'hat',
  'glasses',
  'mask',
  'beard',
];

const NECK_TILTS: readonly NeckTilt[] = ['normal', 'up', 'down'];

// SizeControl の S / M / L に対応する。想定外の倍率で巨大な canvas を作らせない
export const SCALES: readonly number[] = [0.5, 1, 2];

const VALID_POSES = new Set(Object.keys(POSE_MAP));

const ALL_VALID_PATHS = new Set(
  Object.values(PARTS_BY_CATEGORY).flatMap((items) => items.map((i) => i.path)),
);

function shorten(path: string): string {
  return path.replace(/^\/illust\//, '').replace(/\.svg$/, '');
}

function expand(short: string): string {
  return `/illust/${short}.svg`;
}

function parseBoolean(raw: string): boolean | null {
  if (raw === 'true') return true;
  if (raw === 'false') return false;
  return null;
}

/**
 * ポーズの既定値と異なる項目だけを書き出す。
 * 共有 URL を短く保ちつつ、既定値に戻した状態もパラメータなしとして表現できる。
 */
export function stateToParams(state: IllustState): URLSearchParams {
  const params = new URLSearchParams();
  params.set('pose', state.pose);
  for (const key of PART_KEYS) {
    const value = state[key];
    if (value) {
      params.set(key, shorten(value));
    }
  }

  const defaults = getDefaultState(state.pose);
  if (state.neckTilt !== defaults.neckTilt) {
    params.set('neckTilt', state.neckTilt);
  }
  if (state.headBodySwap !== defaults.headBodySwap) {
    params.set('headBodySwap', String(state.headBodySwap));
  }
  if (state.bodyLegSwap !== defaults.bodyLegSwap) {
    params.set('bodyLegSwap', String(state.bodyLegSwap));
  }
  if (state.scale !== defaults.scale) {
    params.set('scale', String(state.scale));
  }
  return params;
}

export function paramsToState(params: URLSearchParams): IllustState | null {
  const pose = params.get('pose');
  if (pose == null || !VALID_POSES.has(pose)) return null;

  const base = getDefaultState(pose as PoseId);

  for (const key of PART_KEYS) {
    const raw = params.get(key);
    if (raw == null) continue;
    const path = expand(raw);
    if (ALL_VALID_PATHS.has(path)) {
      base[key] = path;
    }
  }

  const neckTilt = params.get('neckTilt');
  if (
    neckTilt != null &&
    (NECK_TILTS as readonly string[]).includes(neckTilt)
  ) {
    base.neckTilt = neckTilt as NeckTilt;
  }

  const headBodySwap = params.get('headBodySwap');
  if (headBodySwap != null) {
    base.headBodySwap = parseBoolean(headBodySwap) ?? base.headBodySwap;
  }

  const bodyLegSwap = params.get('bodyLegSwap');
  if (bodyLegSwap != null) {
    base.bodyLegSwap = parseBoolean(bodyLegSwap) ?? base.bodyLegSwap;
  }

  const scale = params.get('scale');
  if (scale != null) {
    const parsed = Number(scale);
    if (SCALES.includes(parsed)) {
      base.scale = parsed;
    }
  }

  return base;
}

export function syncUrlToState(state: IllustState): void {
  const params = stateToParams(state);
  const url = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState(null, '', url);
}

export function getStateFromUrl(): IllustState | null {
  return paramsToState(new URLSearchParams(window.location.search));
}
