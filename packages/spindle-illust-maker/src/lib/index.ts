import type { IllustState, PoseId } from '../types';
import { getDefaultState } from './defaults';
import { createImageLoader } from './image-loader';
import { getOptions } from './options';
import { renderToBlob } from './render';
import type { IllustMaker, IllustMakerConfig, RenderOptions } from './types';
import { paramsToState } from './url-state';

const DEFAULT_ASSET_BASE_URL =
  'https://ameba-spindle-illustration-maker.web.app/illust';

export function createIllustMaker(config?: IllustMakerConfig): IllustMaker {
  const assetBaseUrl = config?.assetBaseUrl ?? DEFAULT_ASSET_BASE_URL;
  const imageLoader = createImageLoader(assetBaseUrl);

  return {
    getOptions,

    getDefaultState(poseId?: PoseId) {
      return getDefaultState(poseId);
    },

    parseUrl(url: string) {
      try {
        const parsed = new URL(url);
        return paramsToState(parsed.searchParams);
      } catch {
        return null;
      }
    },

    async render(state: IllustState, options?: RenderOptions) {
      const scale = options?.scale ?? state.scale;
      return renderToBlob(state, imageLoader, scale);
    },
  };
}

export type {
  HeadType,
  IllustState,
  LayerEntry,
  NeckTilt,
  NeckTiltConfig,
  PartCategory,
  PartOption,
  PoseConfig,
  PoseId,
} from '../types';
export type {
  IllustMaker,
  IllustMakerConfig,
  IllustOptions,
  PartOptionInfo,
  PoseOptionInfo,
  RenderOptions,
} from './types';
