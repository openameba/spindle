import fs from 'node:fs';
import dotenv from 'dotenv';
import * as Figma from 'figma-api';

dotenv.config();

if (!process.env.FIGMA_ACCESS_TOKEN) {
  throw new Error(
    'Figma personal token should be set as an environment variable "FIGMA_ACCESS_TOKEN".',
  );
}

export const figma = new Figma.Api({
  personalAccessToken: process.env.FIGMA_ACCESS_TOKEN,
});

const fileKey = 'G445fTskctZn7y3gkmSp8xaT';
const nodeId = '991-0';
const fileName = 'icon';

async function connectIcons() {
  const result = await figma.getFileNodes(fileKey, [nodeId]);
  const components = Object.entries(
    result.nodes[nodeId.replace('-', ':')]?.components || {},
  ).map(([key, value]) => {
    return {
      // Convert snake_case to PascalCase
      name: value.name
        .split('_')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(''),
      figmaUrl: `https://www.figma.com/design/${fileKey}/${fileName}?node-id=${key.replace(
        ':',
        '-',
      )}`,
    };
  });

  const uniqueNames = new Set([...components.map((c) => c.name)]);

  fs.writeFileSync(
    'src/icons.figma.tsx',
    `\
  import figma from '@figma/code-connect'

  import {
  ${Array.from(uniqueNames)
    .map((iconName) => `${iconName},`)
    .join('\n')}
  } from './Icon'

  ${components
    .map(
      (c) =>
        `figma.connect(${c.name}, '${c.figmaUrl}', { imports: ["import { ${c.name} } from '@openameba/spindle-ui/Icon';"] })`,
    )
    .join('\n')}
  `,
  );
}

connectIcons();
