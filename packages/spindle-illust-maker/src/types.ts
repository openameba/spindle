export type PoseId =
  | 'adult-standing'
  | 'adult-sitting'
  | 'adult-desk'
  | 'adult-riding'
  | 'old'
  | 'child'
  | 'baby';

export type PartCategory =
  | 'head'
  | 'body'
  | 'leg'
  | 'hat'
  | 'glasses'
  | 'mask'
  | 'beard'
  | 'umbrella';

export type HeadType = 'man' | 'woman' | 'child' | 'old' | 'baby';

export type LayerEntry = {
  part: PartCategory;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation?: number;
  pivotX?: number;
  pivotY?: number;
};

export type PoseConfig = {
  id: PoseId;
  label: string;
  canvasWidth: number;
  canvasHeight: number;
  padding?: number;
  layers: LayerEntry[];
  headTypes: HeadType[];
  hasAccessories: boolean;
  neckTilts?: Partial<Record<NeckTilt, NeckTiltConfig>>;
  bodySubdir?: string;
};

export type PartOption = {
  id: string;
  label: string;
  path: string;
};

export type NeckTilt = 'normal' | 'up' | 'down';

export type NeckTiltConfig = {
  layers: LayerEntry[];
};

export type IllustState = {
  pose: PoseId;
  neckTilt: NeckTilt;
  headBodySwap: boolean;
  bodyLegSwap: boolean;
  head: string | null;
  body: string | null;
  leg: string | null;
  hat: string | null;
  glasses: string | null;
  mask: string | null;
  beard: string | null;
  umbrella: string | null;
  scale: number;
};
