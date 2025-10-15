import type { GetLocalVariablesResponse } from '@figma/rest-api-spec';
import fs from 'fs';
import path from 'path';
import {
  transformPrimitiveColor,
  transformThemeColor,
} from '../lib/color-transformer';
import { fetchLocalVariables } from '../lib/figma';

const FIGMA_FILE_KEY_PRIMITIVE = 'GIWwD96N0dDLzv0YxKZXTf';
const FIGMA_FILE_KEY_THEME = 'jbyORMGXjv9Cr770bWEKna';
const FIGMA_TOKEN = process.env.FIGMA_TOKEN || '';

(async () => {
  const variablesPrimitive =
    await fetchLocalVariables<GetLocalVariablesResponse>(
      FIGMA_FILE_KEY_PRIMITIVE,
      FIGMA_TOKEN,
    );

  const transformedPrimitiveColor = transformPrimitiveColor(variablesPrimitive);

  const primitiveColorResult: { [key: string]: { [key: string]: object } } = {
    'Primitive Color': transformedPrimitiveColor,
  };

  fs.writeFileSync(
    path.resolve(__dirname, '../tokens/primitive-color.tokens.json'),
    JSON.stringify(primitiveColorResult, null, 2),
  );

  const variablesTheme = await fetchLocalVariables<GetLocalVariablesResponse>(
    FIGMA_FILE_KEY_THEME,
    FIGMA_TOKEN,
  );

  const transformedThemeColor = transformThemeColor(variablesTheme);

  fs.writeFileSync(
    path.resolve(__dirname, '../tokens/theme-light.tokens.json'),
    JSON.stringify({ Color: transformedThemeColor['Light'] }, null, 2),
  );

  fs.writeFileSync(
    path.resolve(__dirname, '../tokens/theme-dark.tokens.json'),
    JSON.stringify({ Color: transformedThemeColor['Dark'] }, null, 2),
  );
})();
