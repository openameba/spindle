import type {
  GetLocalVariablesResponse,
  VariableAlias,
} from '@figma/rest-api-spec';

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
