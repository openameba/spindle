import fs from 'fs';
import path from 'path';
import { GetLocalVariablesResponse } from '@figma/rest-api-spec';
import { fetchLocalVariables } from '../lib/figma';
import {
  transformPrimitiveColor,
  transformThemeColor,
} from '../lib/color-transformer';

const FIGMA_FILE_KEY = 'jbyORMGXjv9Cr770bWEKna';
const FIGMA_TOKEN = process.env.FIGMA_TOKEN || '';

(async function () {
  const variables = await fetchLocalVariables<GetLocalVariablesResponse>(
    FIGMA_FILE_KEY,
    FIGMA_TOKEN,
  );

  const transformedPrimitiveColor = transformPrimitiveColor(variables);

  const primitiveColorResult: { [key: string]: { [key: string]: object } } = {
    'Primitive Color': transformedPrimitiveColor,
  };

  fs.writeFileSync(
    path.resolve(__dirname, '../tokens/primitive-color.tokens.json'),
    JSON.stringify(primitiveColorResult, null, 2),
  );

  const transformedThemeColor = transformThemeColor(variables);

  fs.writeFileSync(
    path.resolve(__dirname, '../tokens/theme-light.tokens.json'),
    JSON.stringify({ Color: transformedThemeColor['Light'] }, null, 2),
  );

  fs.writeFileSync(
    path.resolve(__dirname, '../tokens/theme-dark.tokens.json'),
    JSON.stringify({ Color: transformedThemeColor['Dark'] }, null, 2),
  );
})();
