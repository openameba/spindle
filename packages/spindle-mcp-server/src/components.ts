import path from 'path';
import fs from 'fs';

interface ComponentFile {
  name: string;
  content: string;
}

interface ComponentInfo {
  name: string;
  directory: string;
  implementation?: ComponentFile;
  styles?: ComponentFile;
  documentation?: ComponentFile;
  tests?: ComponentFile;
  figma?: ComponentFile;
}

interface Components {
  componentList: string[];
  documentation: string;
}

export function getComponentInfo(
  componentName: string,
  directory: string,
): ComponentInfo | null {
  const baseDir = path.join(__dirname, '../assets/spindle-ui/src');

  const normalizedDir = directory.split('/').filter(Boolean);
  const componentDir = path.join(baseDir, ...normalizedDir);

  if (!fs.existsSync(componentDir)) {
    return null;
  }

  function findComponentInDirectory(dir: string): ComponentInfo | null {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const actualComponentName = path.basename(componentName, '.tsx');

    // まず現在のディレクトリで検索
    const info: ComponentInfo = {
      name: actualComponentName,
      directory: path.relative(baseDir, dir),
    };

    // 実装ファイルを探す
    const implFile = entries.find(
      (entry) =>
        entry.isFile() &&
        entry.name === `${actualComponentName}.tsx` &&
        !entry.name.endsWith('.test.tsx') &&
        !entry.name.endsWith('.stories.tsx') &&
        !entry.name.endsWith('.figma.tsx'),
    );

    if (implFile) {
      const implPath = path.join(dir, implFile.name);
      info.implementation = {
        name: implFile.name,
        content: fs.readFileSync(implPath, 'utf-8'),
      };

      // 関連ファイルを探す
      const fileTypes = [
        { key: 'styles', ext: '.css' },
        { key: 'documentation', ext: '.mdx' },
        { key: 'tests', ext: '.test.tsx' },
        { key: 'figma', ext: '.figma.tsx' },
      ] as const;

      for (const { key, ext } of fileTypes) {
        const relatedFile = entries.find(
          (entry) =>
            entry.isFile() && entry.name === `${actualComponentName}${ext}`,
        );

        if (relatedFile) {
          const filePath = path.join(dir, relatedFile.name);
          info[key] = {
            name: relatedFile.name,
            content: fs.readFileSync(filePath, 'utf-8'),
          };
        }
      }

      return info;
    }

    // サブディレクトリを再帰的に探索
    for (const entry of entries) {
      if (
        entry.isDirectory() &&
        !['types', 'assets', 'Icon'].includes(entry.name)
      ) {
        const subDirPath = path.join(dir, entry.name);
        const result = findComponentInDirectory(subDirPath);
        if (result) {
          return result;
        }
      }
    }

    return null;
  }

  return findComponentInDirectory(componentDir);
}

function getAllComponents(): ComponentInfo[] {
  const componentsDir = path.join(__dirname, '../assets/spindle-ui/src');
  const components: ComponentInfo[] = [];

  function scanDirectory(dir: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const relativePath = path.relative(componentsDir, fullPath);

      if (
        entry.isDirectory() &&
        !['types', 'assets', 'Icon'].includes(entry.name)
      ) {
        scanDirectory(fullPath);
      } else if (
        entry.isFile() &&
        entry.name.endsWith('.tsx') &&
        !entry.name.endsWith('.test.tsx') &&
        !entry.name.endsWith('.stories.tsx') &&
        !entry.name.endsWith('.figma.tsx')
      ) {
        const componentName = entry.name.replace('.tsx', '');
        const directory = path.dirname(relativePath);
        const info = getComponentInfo(componentName, directory);
        if (info) {
          components.push(info);
        }
      }
    }
  }

  scanDirectory(componentsDir);
  return components;
}

export async function getComponents(): Promise<Components> {
  const components = await getAllComponents();
  const componentList = components.map((comp) => comp.name);
  const documentation = await fs.promises.readFile(
    path.join(__dirname, '../assets/spindle-ui/README.md'),
    'utf-8',
  );

  return {
    componentList,
    documentation,
  };
}
