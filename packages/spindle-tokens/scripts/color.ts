import fs from 'fs';
import path from 'path';
import {
  GetLocalVariablesResponse,
  RGBA,
  VariableAlias,
} from '@figma/rest-api-spec';

const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY_COLOR_VARIABLES || '';
const FIGMA_TOKEN = process.env.FIGMA_TOKEN || '';

async function fetchVariables() {
  const variables = (await fetch(
    `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/variables/local`,
    {
      headers: {
        'X-Figma-Token': FIGMA_TOKEN,
      },
    },
  ).then(async (res) => res.json())) as GetLocalVariablesResponse;

  return variables;
}

const roundToTwoDecimals = (num: number, digits = 2) => {
  const result = Number(num.toFixed(digits));
  return result % 1 === 0 ? Math.floor(result) : result;
};

(async function () {
  const variables = await fetchVariables();

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
      $value: `rgb(${roundToTwoDecimals(value.r)} ${roundToTwoDecimals(
        value.g,
      )} ${roundToTwoDecimals(value.b)} / ${roundToTwoDecimals(value.a)})`,
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
        $value: `rgb(${roundToTwoDecimals(rgba.r)} ${roundToTwoDecimals(
          rgba.g,
        )} ${roundToTwoDecimals(rgba.b)} / ${roundToTwoDecimals(rgba.a)})`,
      };
    });
  });

  fs.writeFileSync(
    path.resolve(__dirname, '../tokens/color/ameba.json'),
    JSON.stringify(result, null, 2),
  );
})();
