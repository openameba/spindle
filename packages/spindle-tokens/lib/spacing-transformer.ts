import type { GetLocalVariablesResponse } from '@figma/rest-api-spec';

type SpacingToken = {
  $type: 'dimension';
  $value: string;
};

type SpacingTokens = {
  [key: string]: SpacingToken;
};

export function transformSpacing(variables: GetLocalVariablesResponse) {
  const spacingCollection = Object.values(
    variables.meta.variableCollections,
  ).find((value) => value.name === 'Spacing');

  if (!spacingCollection) {
    throw new Error('Spacing collection not found');
  }

  const result: {
    [modeName: string]: SpacingTokens;
  } = {};

  spacingCollection.modes.forEach((mode) => {
    result[mode.name.toLowerCase()] = {};
  });

  spacingCollection.variableIds.forEach((variableId) => {
    const variable = variables.meta.variables[variableId];

    if (variable.resolvedType !== 'FLOAT') {
      return;
    }

    const isAbsolute = variable.name.startsWith('Absolute Spacing');
    const isRelative = variable.name.startsWith('Relative Spacing');

    if (!isAbsolute && !isRelative) {
      return;
    }

    spacingCollection.modes.forEach((mode) => {
      const value = variable.valuesByMode[mode.modeId];
      const modeName = mode.name.toLowerCase();

      if (typeof value === 'number') {
        result[modeName][variable.name] = {
          $type: 'dimension',
          $value: isAbsolute ? `${value}px` : `${value / 16}rem`,
        };
      }
    });
  });

  return result;
}
