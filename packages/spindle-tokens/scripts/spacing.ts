import fs from 'node:fs';
import path from 'node:path';
import type { GetLocalVariablesResponse } from '@figma/rest-api-spec';
import { fetchLocalVariables } from '../lib/figma';
import { transformSpacing } from '../lib/spacing-transformer';

const FIGMA_FILE_KEY = '0tRwTKb08qL3PGF8c18hWL';
const FIGMA_TOKEN = process.env.FIGMA_TOKEN || '';

(async () => {
  const variables = await fetchLocalVariables<GetLocalVariablesResponse>(
    FIGMA_FILE_KEY,
    FIGMA_TOKEN,
  );

  const transformedSpacing = transformSpacing(variables);

  Object.entries(transformedSpacing).forEach(([modeName, tokens]) => {
    fs.writeFileSync(
      path.resolve(__dirname, `../tokens/spacing-${modeName}.tokens.json`),
      JSON.stringify({ Spacing: tokens }, null, 2),
    );
  });
})();
