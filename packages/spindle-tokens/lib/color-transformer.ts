import {
  GetLocalVariablesResponse,
  VariableAlias,
  RGBA,
} from '@figma/rest-api-spec';

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

export function transformPrimitiveColor(variables: GetLocalVariablesResponse) {
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

  return primitiveColorResult;
}

export function transformThemeColor(variables: GetLocalVariablesResponse) {
  const themeColorCollection = Object.values(
    variables.meta.variableCollections,
  ).filter((value) => {
    return value.name === 'Color';
  })[0];

  const themeColorResult: {
    [key: string]: {
      [key: string]: {
        $type: string;
        $value: string;
      };
    };
  } = {};

  themeColorCollection.modes.forEach((mode) => {
    themeColorResult[mode.name] = {};
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
        themeColorResult[mode.name][variable.name] = {
          $type: 'color',
          $value: `{Primitive Color.${resolvedName}}`,
        };
        return;
      }

      const rgba = value as RGBA;
      themeColorResult[mode.name][variable.name] = {
        $type: 'color',
        $value: rgbaToHex(rgba.r, rgba.g, rgba.b, rgba.a),
      };
    });
  });

  return themeColorResult;
}
