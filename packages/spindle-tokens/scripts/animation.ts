import fs from 'node:fs';
import path from 'node:path';
import type { GetLocalVariablesResponse } from '@figma/rest-api-spec';
import {
  transformAnimation,
  transformAnimationProperty,
} from '../lib/animation-transformer';
import { fetchLocalVariables } from '../lib/figma';

const FIGMA_FILE_KEY = 'st60hCtXaGsXQCnCwNS9Dy';
const FIGMA_TOKEN = process.env.FIGMA_TOKEN || '';

(async () => {
  const variables = await fetchLocalVariables<GetLocalVariablesResponse>(
    FIGMA_FILE_KEY,
    FIGMA_TOKEN,
  );

  const animationPropertyResult = transformAnimationProperty(variables);
  const animationResult = transformAnimation(variables);

  const result: { [key: string]: { [key: string]: object } } = {
    Animation: {
      ...animationPropertyResult,
      ...animationResult,
    },
  };

  fs.writeFileSync(
    path.resolve(__dirname, '../tokens/animation.tokens.json'),
    JSON.stringify(result, null, 2),
  );
})();
