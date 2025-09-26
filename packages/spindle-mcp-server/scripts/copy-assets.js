#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import cpx from 'cpx2';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsDir = path.join(__dirname, '../assets');

// 既存のassetsディレクトリをクリア
if (fs.existsSync(assetsDir)) {
  fs.rmSync(assetsDir, { recursive: true, force: true });
}

async function copyAssets() {
  console.log('Starting asset copying...\n');

  const tasks = [
    {
      name: 'Icons',
      source: '../spindle-ui/src/Icon/*.{tsx,mdx}',
      dest: 'assets/spindle-ui/src/Icon',
    },
    {
      name: 'Design Tokens',
      source: '../spindle-tokens/dist/css/*.css',
      dest: 'assets/spindle-tokens/dist/css',
    },
    {
      name: 'Components',
      source: '../spindle-ui/src/**/*.{tsx,css,mdx,md}',
      dest: 'assets/spindle-ui/src',
      ignore: ['**/Icon/**'], // アイコンは別途処理するため除外
    },
    {
      name: 'README',
      source: '../spindle-ui/README.md',
      dest: 'assets/spindle-ui',
    },
    {
      name: 'Design Doc Template',
      source: '../spindle-ui/.scaffdog/design-doc.md',
      dest: 'assets/spindle-ui/.scaffdog',
    },
  ];

  for (const task of tasks) {
    await cpx.copy(task.source, task.dest, {
      cwd: path.join(__dirname, '..'),
      ignore: task.ignore || [],
    });
    console.log(`✓ ${task.name} processed\n`);
  }
}

copyAssets().catch(console.error);
