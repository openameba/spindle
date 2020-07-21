import * as Figma from 'figma-api';

if (!process.env.FIGMA_TOKEN) {
  throw new Error(
    'Figma personal token should be set as an environment variable "FIGMA_TOKEN".',
  );
}

export const figma = new Figma.Api({
  personalAccessToken: process.env.FIGMA_TOKEN,
});
