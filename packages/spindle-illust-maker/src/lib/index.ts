import { createImageLoader } from './image-loader';
import { getOptions } from './options';
import { getDefaultState } from './defaults';
import { paramsToState } from './url-state';
import { renderToBlob } from './render';
import type { IllustMaker, IllustMakerConfig, RenderOptions } from './types';
import type { IllustState, PoseId } from '../types';

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
  IllustMaker,
  IllustMakerConfig,
  IllustOptions,
  PoseOptionInfo,
  PartOptionInfo,
  RenderOptions,
} from './types';

export type {
  IllustState,
  PoseId,
  HeadType,
  NeckTilt,
  PartCategory,
  PoseConfig,
  LayerEntry,
  PartOption,
  NeckTiltConfig,
} from '../types';
