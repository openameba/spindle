interface FigmaErrorResponse {
  error?: boolean;
  status?: number;
}

export async function fetchLocalVariables<T>(fileKey: string, token: string) {
  return fetch(`https://api.figma.com/v1/files/${fileKey}/variables/local`, {
    headers: {
      'X-Figma-Token': token,
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to fetch variables: ${res.status}`);
      }
      return res.json();
    })
    .then((json: T & FigmaErrorResponse) => {
      if (json.error) {
        throw new Error(`Failed to fetch variables: ${json.status}`);
      }
      return json as T;
    });
}
