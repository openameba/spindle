#!/usr/bin/env node

import cpx from 'cpx2';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

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
      description: 'アイコンファイル',
    },
    {
      name: 'Design Tokens',
      source: '../spindle-tokens/dist/css/*.css',
      dest: 'assets/spindle-tokens/dist/css',
      description: 'デザイントークンCSSファイル',
    },
    {
      name: 'Components',
      source: '../spindle-ui/src/**/*.{tsx,css,mdx,md}',
      dest: 'assets/spindle-ui/src',
      description: 'コンポーネントファイル',
      ignore: ['**/Icon/**'], // アイコンは別途処理するため除外
    },
    {
      name: 'README',
      source: '../spindle-ui/README.md',
      dest: 'assets/spindle-ui',
      description: 'READMEファイル',
    },
    {
      name: 'Design Doc Template',
      source: '../spindle-ui/.scaffdog/design-doc.md',
      dest: 'assets/spindle-ui/.scaffdog',
      description: 'デザインドキュメントテンプレート',
    },
  ];

  for (const task of tasks) {
    try {
      console.log(`Copying ${task.description}...`);
      await cpx.copy(task.source, task.dest, {
        cwd: path.join(__dirname, '..'),
        ignore: task.ignore || [],
      });
      console.log(`✓ ${task.name} copied\n`);
    } catch (error) {
      console.error(`✗ Error copying ${task.name}:`, error.message);
    }
  }

  console.log('Asset copying completed!');
}

copyAssets().catch(console.error);
