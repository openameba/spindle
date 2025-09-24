import fs from 'node:fs';
import path from 'node:path';

interface IconInfo {
  name: string;
  path: string;
  documentation: string;
}

interface Icons {
  iconList: string[];
  documentation: string;
}

function getIconDocumentation(): Promise<string> {
  return fs.promises.readFile(
    path.join(__dirname, '../assets/spindle-ui/src/Icon', 'index.mdx'),
    'utf-8',
  );
}

export async function getIcons(): Promise<Icons> {
  const iconList = await getAllIcons();
  const documentation = await getIconDocumentation();

  return {
    iconList,
    documentation,
  };
}

async function getAllIcons(): Promise<string[]> {
  const iconDir = path.join(__dirname, '../assets/spindle-ui/src/Icon');
  const files = await fs.promises.readdir(iconDir);
  return files
    .filter((file) => file.endsWith('.tsx'))
    .map((file) => file.replace('.tsx', ''));
}

function getIconPath(iconName: string): string {
  return path.join(
    __dirname,
    '../assets/spindle-ui/src/Icon',
    `${iconName}.tsx`,
  );
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

  const documentation = await getIconDocumentation();

  return {
    name: iconName,
    path: iconPath,
    documentation: documentation,
  };
}
