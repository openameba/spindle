import type { IllustState, PartCategory, PoseId } from '../types';
import { POSE_MAP } from '../constants/poses';
import { PARTS_BY_CATEGORY } from '../constants/parts';
import { getDefaultState } from './defaults';

const PART_KEYS: PartCategory[] = [
  'head',
  'body',
  'leg',
  'hat',
  'glasses',
  'mask',
  'beard',
  'umbrella',
];

const VALID_POSES = new Set(Object.keys(POSE_MAP));

const ALL_VALID_PATHS = new Set(
  Object.values(PARTS_BY_CATEGORY).flatMap((items) =>
    items.map((i) => i.path),
  ),
);

function shorten(path: string): string {
  return path.replace(/^\/illust\//, '').replace(/\.svg$/, '');
}

function expand(short: string): string {
  return `/illust/${short}.svg`;
}

export function stateToParams(state: IllustState): URLSearchParams {
  const params = new URLSearchParams();
  params.set('pose', state.pose);
  for (const key of PART_KEYS) {
    const value = state[key];
    if (value) {
      params.set(key, shorten(value));
    }
  }
  return params;
}

export function paramsToState(params: URLSearchParams): IllustState | null {
  if (!params.has('pose')) return null;

  const pose = params.get('pose')!;
  if (!VALID_POSES.has(pose)) return null;

  const base = getDefaultState(pose as PoseId);

  for (const key of PART_KEYS) {
    const raw = params.get(key);
    if (raw == null) continue;
    const path = expand(raw);
    if (ALL_VALID_PATHS.has(path)) {
      base[key] = path;
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
