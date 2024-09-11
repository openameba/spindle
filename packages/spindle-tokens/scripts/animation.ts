import fs from 'fs';
import path from 'path';
import { GetLocalVariablesResponse, VariableAlias } from '@figma/rest-api-spec';
import { fetchLocalVariables } from '../lib/figma';

const FIGMA_FILE_KEY = 'st60hCtXaGsXQCnCwNS9Dy';
const FIGMA_TOKEN = process.env.FIGMA_TOKEN || '';

export function transformAnimationProperty(
  variables: GetLocalVariablesResponse,
) {
  const animationPropertyCollections = Object.values(
    variables.meta.variableCollections,
  ).filter((value) => {
    return value.name === 'Animation Property';
  })[0];

  const animationPropertyResult: { [key: string]: { [key: string]: string } } =
    {};

  animationPropertyCollections.variableIds.forEach((variableId) => {
    const variable = variables.meta.variables[variableId];
    const isEasing = variable.name.startsWith('Easing');
    const value = isEasing
      ? JSON.parse(Object.values(variable.valuesByMode)[0] as string)
      : (Object.values(variable.valuesByMode)[0] as string);
    const type = isEasing ? 'cubicBezier' : 'transition';
    animationPropertyResult[variable.name] = {
      $type: type,
      $value: value,
    };
  });

  return animationPropertyResult;
}

export function transformAnimation(variables: GetLocalVariablesResponse) {
  const animationCollection = Object.values(
    variables.meta.variableCollections,
  ).filter((value) => {
    return value.name === 'Animation';
  })[0];

  const animationResult: { [key: string]: { [key: string]: string } } = {};

  animationCollection.variableIds.forEach((variableId) => {
    const variable = variables.meta.variables[variableId];
    const value = variable.valuesByMode[animationCollection.modes[0].modeId];

    if (
      (value as VariableAlias).type &&
      (value as VariableAlias).type === 'VARIABLE_ALIAS'
    ) {
      const alias = value as VariableAlias;
      const resolvedName = variables.meta.variables[alias.id].name;

      animationResult[variable.name] = {
        $type: 'transition',
        $value: `{Animation.${resolvedName}}`,
      };
    }
  });

  return animationResult;
}

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
