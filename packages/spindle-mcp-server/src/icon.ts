import fs from 'fs';
import path from 'path';

interface IconInfo {
  name: string;
  path: string;
  svgPath: string;
  viewBox: string;
  documentation: string;
}

export async function getAllIcons(): Promise<string[]> {
  const iconDir = path.join(__dirname, '../../spindle-ui/src/Icon');
  const files = await fs.promises.readdir(iconDir);
  return files
    .filter((file) => file.endsWith('.tsx'))
    .map((file) => file.replace('.tsx', ''));
}

function getIconPath(iconName: string): string {
  return path.join(__dirname, '../../spindle-ui/src/Icon', `${iconName}.tsx`);
}

export async function getIconInfo(iconName: string): Promise<IconInfo | null> {
  const iconPath = getIconPath(iconName);
  if (!fs.existsSync(iconPath)) {
    return null;
  }

  const content = await fs.promises.readFile(iconPath, 'utf-8');
  const svgMatch = content.match(/viewBox="([^"]+)"/);
  const pathMatch = content.match(/<path d="([^"]+)"/);

  if (!svgMatch || !pathMatch) {
    return null;
  }

  const documentation = await fs.promises.readFile(
    path.join(__dirname, '../../spindle-ui/src/Icon', 'index.stories.mdx'),
    'utf-8',
  );

  return {
    name: iconName,
    path: iconPath,
    svgPath: pathMatch[1],
    viewBox: svgMatch[1],
    documentation: documentation,
  };
}

export async function getIconUsage(): Promise<string> {
  const doc = path.join(__dirname, '../../spindle-icons/README.md');
  const content = await fs.promises.readFile(doc, 'utf-8');
  return content;
}
