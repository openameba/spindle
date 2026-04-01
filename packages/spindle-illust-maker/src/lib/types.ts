import type { HeadType, IllustState, NeckTilt, PoseId } from '../types';

export type IllustMakerConfig = {
  assetBaseUrl?: string;
};

export type IllustOptions = {
  poses: PoseOptionInfo[];
};

export type PoseOptionInfo = {
  id: PoseId;
  label: string;
  canvasWidth: number;
  canvasHeight: number;
  headTypes: HeadType[];
  hasNeckTilt: boolean;
  parts: Record<string, PartOptionInfo[]>;
};

export type PartOptionInfo = {
  id: string;
  label: string;
  path: string;
};

export type RenderOptions = {
  scale?: number;
};

export type IllustMaker = {
  getOptions(): IllustOptions;
  getDefaultState(poseId?: PoseId): IllustState;
  render(state: IllustState, options?: RenderOptions): Promise<Blob>;
};

export type { IllustState, PoseId, HeadType, NeckTilt };
