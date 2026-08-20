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

// The shared template lives in src/icons.figma.batch.ts and is committed by hand.
// This script only regenerates the per-icon entries it is applied to.
const batchFilePath = 'src/icons.figma.batch.json';
const templateFile = './icons.figma.batch.ts';

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

  const seen = new Set<string>();
  const entries = components.flatMap((component) => {
    if (seen.has(component.name)) return [];
    seen.add(component.name);
    return [
      {
        url: component.figmaUrl,
        component: component.name,
        id: component.name,
        componentName: component.name,
      },
    ];
  });

  fs.writeFileSync(
    batchFilePath,
    `${JSON.stringify({ templateFile, components: entries }, null, 2)}\n`,
  );
}

connectIcons();
