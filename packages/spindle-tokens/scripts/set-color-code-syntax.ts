import {
  GetLocalVariablesResponse,
  PostVariablesResponse,
  VariableCodeSyntax,
  VariableAlias,
} from '@figma/rest-api-spec';

const FIGMA_FILE_KEY_PRIMITIVE_COLOR =
  process.env.FIGMA_FILE_KEY_PRIMITIVE_COLOR || '';
const FIGMA_FILE_KEY_THEME_COLOR = process.env.FIGMA_FILE_KEY_THEME_COLOR || '';
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

type Payload = {
  variables: {
    action: string;
    id: string;
    codeSyntax: VariableCodeSyntax;
  }[];
};

async function postLocalVariables(fileKey: string, payload: Payload) {
  return fetch(`https://api.figma.com/v1/files/${fileKey}/variables`, {
    method: 'POST',
    headers: {
      'X-Figma-Token': FIGMA_TOKEN,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to post variables: ${res.status}`);
      }
      return res.json();
    })
    .then((json) => {
      if (json.error) {
        throw new Error(`Failed to fetch variables: ${json.status}`);
      }
      return json as PostVariablesResponse;
    });
}

function convertToCSSVariable(name: string) {
  return `var(--color-${name
    .replace(/[\s/]+/g, '-')
    .replace(/!/g, '')
    .toLocaleLowerCase()})`;
}

async function createPrimitiveColorSyntax() {
  const variables = await fetchLocalVariables<GetLocalVariablesResponse>(
    FIGMA_FILE_KEY_PRIMITIVE_COLOR,
  );
  const payload: Payload = { variables: [] };

  const primitiveColorCollections = Object.values(
    variables.meta.variableCollections,
  ).filter((value) => {
    return value.name === 'Primitive Color';
  })[0];

  primitiveColorCollections.variableIds.forEach((variableId) => {
    const variable = variables.meta.variables[variableId];
    if (variable.resolvedType !== 'COLOR') {
      return;
    }
    payload.variables.push({
      action: 'UPDATE',
      id: variableId,
      codeSyntax: {
        WEB: convertToCSSVariable(variable.name.split('/')[1]),
      },
    });
  });

  return payload;
}

async function createThemeColorSyntax() {
  const variables = await fetchLocalVariables<GetLocalVariablesResponse>(
    FIGMA_FILE_KEY_THEME_COLOR,
  );
  const payload: Payload = { variables: [] };

  const themeColorCollection = Object.values(
    variables.meta.variableCollections,
  ).filter((value) => {
    return value.name === 'Color';
  })[0];

  themeColorCollection.modes.forEach((mode) => {
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
        payload.variables.push({
          action: 'UPDATE',
          id: variableId,
          codeSyntax: {
            WEB: convertToCSSVariable(variable.name),
          },
        });
      }
    });
  });

  return payload;
}

Promise.all([createPrimitiveColorSyntax(), createThemeColorSyntax()])
  .then(([primitiveColors, themeColors]) => {
    console.log(JSON.stringify(primitiveColors, null, 2));
    console.log(JSON.stringify(themeColors, null, 2));
    return Promise.all([
      postLocalVariables(FIGMA_FILE_KEY_PRIMITIVE_COLOR, primitiveColors),
      postLocalVariables(FIGMA_FILE_KEY_THEME_COLOR, themeColors),
    ]);
  })
  .then(() => {
    console.log('Variables updated');
  })
  .catch((error) => {
    console.error(error);
  });
