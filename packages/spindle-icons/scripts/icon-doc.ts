import { promises as fs } from 'fs';
import { relative } from 'path';

const DOC_DIR = 'docs';
const SVG_DIR = 'dist/svg';

const markdown = (files: string[]): string => {
  const svgPath = relative(DOC_DIR, SVG_DIR);
  const icons = files.map((file) => {
    const name = file.replace('.svg', '');
    return `| ${name} | ![](${svgPath}/${file}) |`;
  });
  const iconMarkdown = [
    '## Icon List',
    '| name | image |',
    '|---|:-:|',
    ...icons,
  ].join('\n');
  return `${iconMarkdown}\n`;
};

const createIconList = async (): Promise<void> => {
  try {
    const files = await fs.readdir(SVG_DIR);
    const icons = files
      .filter((file) => file.endsWith('.svg'))
      .filter((file) => !file.startsWith('sprite'));
    await fs.writeFile(`${DOC_DIR}/icons.md`, markdown(icons));
    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
};

createIconList()
  .then(() => console.log('Icon list has been successfully created!'))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
