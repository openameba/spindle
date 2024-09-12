import fs from 'fs';
import path from 'path';
import { GetLocalVariablesResponse } from '@figma/rest-api-spec';
import { fetchLocalVariables } from '../lib/figma';
import {
  transformAnimation,
  transformAnimationProperty,
} from '../lib/animation-transformer';

const FIGMA_FILE_KEY = 'st60hCtXaGsXQCnCwNS9Dy';
const FIGMA_TOKEN = process.env.FIGMA_TOKEN || '';

(async function () {
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
    path.resolve(__dirname, '../tokens/animation.json'),
    JSON.stringify(result, null, 2),
  );
})();
