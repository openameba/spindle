import fs from 'fs';
import path from 'path';
import {
  GetLocalVariablesResponse,
  RGBA,
  VariableAlias,
} from '@figma/rest-api-spec';

const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY_COLOR_VARIABLES || '';
const FIGMA_TOKEN = process.env.FIGMA_TOKEN || '';

async function fetchLocalVariables<T>(fileKey: string) {
  return fetch(`https://api.figma.com/v1/files/${fileKey}/variables/local`, {
    headers: {
      'X-Figma-Token': FIGMA_TOKEN,
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to fetch variables: ${res.status}`);
      }
      return res.json();
    })
    .then((json) => {
      if (json.error) {
        throw new Error(`Failed to fetch variables: ${json.status}`);
      }
      return json as T;
    });
}

function rgbaToHex(r: number, g: number, b: number, a: number) {
  return (
    '#' +
    [r, g, b, a]
      .map((x, index) => {
        if (index === 3 && x === 1) {
          return null;
        }
        return Math.round(x * 255)
          .toString(16)
          .padStart(2, '0');
      })
      .filter(Boolean)
      .join('')
  );
}

(async function () {
  const variables =
    await fetchLocalVariables<GetLocalVariablesResponse>(FIGMA_FILE_KEY);

  const result: { [key: string]: { [key: string]: object } } = {};

  const primitiveColorCollections = Object.values(
    variables.meta.variableCollections,
  ).filter((value) => {
    return value.name === 'Primitive Color';
  })[0];

  const primitiveColorResult: { [key: string]: { [key: string]: string } } = {};

  primitiveColorCollections.variableIds.forEach((variableId) => {
    const variable = variables.meta.variables[variableId];
    if (variable.resolvedType !== 'COLOR') {
      return;
    }
    const value = Object.values(variable.valuesByMode)[0] as RGBA;
    primitiveColorResult[variable.name] = {
      $type: 'color',
      $value: rgbaToHex(value.r, value.g, value.b, value.a),
    };
  });

  result['Primitive Color'] = primitiveColorResult;

  const themeColorCollection = Object.values(
    variables.meta.variableCollections,
  ).filter((value) => {
    return value.name === 'Color';
  })[0];

  themeColorCollection.modes.forEach((mode) => {
    result[mode.name] = {};
    themeColorCollection.variableIds.forEach((variableId) => {
      const variable = variables.meta.variables[variableId];
      if (variable.resolvedType !== 'COLOR') {
        return;
      }

      const value = variable.valuesByMode[mode.modeId];
      if (
        (value as VariableAlias).type &&
        (value as VariableAlias).type === 'VARIABLE_ALIAS'
      ) {
        const alias = value as VariableAlias;
        const resolvedName = variables.meta.variables[alias.id].name;
        result[mode.name][variable.name] = {
          $type: 'color',
          $value: `{Primitive Color.${resolvedName}}`,
        };
        return;
      }

      const rgba = value as RGBA;
      result[mode.name][variable.name] = {
        $type: 'color',
        $value: rgbaToHex(rgba.r, rgba.g, rgba.b, rgba.a),
      };
    });
  });

  fs.writeFileSync(
    path.resolve(__dirname, '../tokens/color/ameba.json'),
    JSON.stringify(result, null, 2),
  );
})();
