import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import fs from "fs";
import path from "path";

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

function getComponentInfo(componentName: string, directory: string): ComponentInfo | null {
  const baseDir = path.join(__dirname, "../../spindle-ui/src");

  // ディレクトリパスの正規化
  const normalizedDir = directory.split('/').filter(Boolean);
  const componentDir = path.join(baseDir, ...normalizedDir);

  if (!fs.existsSync(componentDir)) {
    return null;
  }

  // 再帰的にコンポーネントを探索する関数
  function findComponentInDirectory(dir: string): ComponentInfo | null {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const actualComponentName = path.basename(componentName, '.tsx');

    // まず現在のディレクトリで検索
    const info: ComponentInfo = {
      name: actualComponentName,
      directory: path.relative(baseDir, dir)
    };

    // 実装ファイルを探す
    const implFile = entries.find(entry =>
      entry.isFile() &&
      entry.name === `${actualComponentName}.tsx` &&
      !entry.name.endsWith('.test.tsx') &&
      !entry.name.endsWith('.stories.tsx') &&
      !entry.name.endsWith('.figma.tsx')
    );

    if (implFile) {
      const implPath = path.join(dir, implFile.name);
      info.implementation = {
        name: implFile.name,
        content: fs.readFileSync(implPath, 'utf-8')
      };

      // 関連ファイルを探す
      const fileTypes = [
        { key: 'styles', ext: '.css' },
        { key: 'documentation', ext: '.stories.mdx' },
        { key: 'tests', ext: '.test.tsx' },
        { key: 'figma', ext: '.figma.tsx' }
      ] as const;

      for (const { key, ext } of fileTypes) {
        const relatedFile = entries.find(entry =>
          entry.isFile() && entry.name === `${actualComponentName}${ext}`
        );

        if (relatedFile) {
          const filePath = path.join(dir, relatedFile.name);
          info[key] = {
            name: relatedFile.name,
            content: fs.readFileSync(filePath, 'utf-8')
          };
        }
      }

      return info;
    }

    // サブディレクトリを再帰的に探索
    for (const entry of entries) {
      if (entry.isDirectory() && !["types", "assets", "Icon"].includes(entry.name)) {
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
  const componentsDir = path.join(__dirname, "../../spindle-ui/src");
  const components: ComponentInfo[] = [];

  function scanDirectory(dir: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const relativePath = path.relative(componentsDir, fullPath);

      if (entry.isDirectory() && !["types", "assets", "Icon"].includes(entry.name)) {
        scanDirectory(fullPath);
      } else if (entry.isFile() &&
                 entry.name.endsWith('.tsx') &&
                 !entry.name.endsWith('.test.tsx') &&
                 !entry.name.endsWith('.stories.tsx') &&
                 !entry.name.endsWith('.figma.tsx')) {
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

// デザイントークンの種類を定義
function getTokenTypes(): [string, ...string[]] {
  const tokenDir = path.join(__dirname, "../../spindle-tokens/tokens");
  const types = fs.readdirSync(tokenDir)
    .filter(file => file.endsWith('.tokens.json'))
    .map(file => file.replace('.tokens.json', ''));

  if (types.length === 0) {
    throw new Error('No token files found');
  }

  return [types[0], ...types.slice(1)] as [string, ...string[]];
}

const TokenType = z.enum(getTokenTypes());

type TokenType = z.infer<typeof TokenType>;

function getDesignToken(tokenType: TokenType): object {
  const tokenPath = path.join(__dirname, "../../spindle-tokens/tokens", `${tokenType}.tokens.json`);
  if (!fs.existsSync(tokenPath)) {
    throw new Error(`Token file for ${tokenType} not found`);
  }

  const content = fs.readFileSync(tokenPath, 'utf-8');
  return JSON.parse(content);
}

function getAllDesignTokens(): Record<TokenType, object> {
  const tokens: Partial<Record<TokenType, object>> = {};

  TokenType.options.forEach(tokenType => {
    try {
      tokens[tokenType] = getDesignToken(tokenType);
    } catch (error) {
      console.error(`Failed to load ${tokenType} tokens:`, error);
    }
  });

  return tokens as Record<TokenType, object>;
}

interface IconInfo {
  name: string;
  path: string;
  svgPath: string;
  viewBox: string;
}

function getIconPath(iconName: string): string {
  return path.join(__dirname, '../../spindle-ui/src/Icon', `${iconName}.tsx`);
}

async function getIconInfo(iconName: string): Promise<IconInfo | null> {
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

  return {
    name: iconName,
    path: iconPath,
    svgPath: pathMatch[1],
    viewBox: svgMatch[1],
  };
}

async function getAllIcons(): Promise<string[]> {
  const iconDir = path.join(__dirname, '../../spindle-ui/src/Icon');
  const files = await fs.promises.readdir(iconDir);
  return files
    .filter((file) => file.endsWith('.tsx'))
    .map((file) => file.replace('.tsx', ''));
}

function generateIconSampleCode(iconName: string): string {
  return `// 1. React Component
import { ${iconName} } from '@openameba/spindle-ui/Icon';

function SomeButton() {
  return (
    <button aria-label="ボタンの説明" type="button">
      <${iconName} />
    </button>
  );
}

// 2. img要素として利用
<button>
  <img
    alt="アイコンの説明"
    height="24"
    role="img"
    src="https://unpkg.com/@openameba/spindle-icons/dist/svg/${iconName.toLowerCase()}.svg"
    width="24"
  />
</button>

// 3. Inline SVG
<button aria-label="ボタンの説明">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" role="img">
    <path d="..." /> <!-- SVGのパスデータは get_icon_info で取得できます -->
  </svg>
</button>

// 4. SVG Sprite
<button>
  <svg aria-labelledby="${iconName.toLowerCase()}-icon-title" role="img">
    <title id="${iconName.toLowerCase()}-icon-title">アイコンの説明</title>
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="sprite.svg#${iconName.toLowerCase()}"></use>
  </svg>
</button>

// Note: アイコンを利用する際は、適切なラベリング（aria-label、aria-labelledby、titleなど）を
// 必ず設定してください。上記は例示用のため、実際の使用時には適切な説明テキストを設定してください。`;
}

function parseCssColorTokens(css: string): Record<string, string> {
  const tokens: Record<string, string> = {};
  const lines = css.split('\n');

  for (const line of lines) {
    const match = line.match(/^\s*--([^:]+):\s*([^;]+);/);
    if (match) {
      const [, name, value] = match;
      tokens[name.trim()] = value.trim();
    }
  }

  return tokens;
}

const server = new McpServer({
  name: "ameba-spindle",
  description: "MCP server for Ameba Design System Spindle",
  version: "0.1.0",
});

// コンポーネント一覧を取得するツール
server.tool(
  "get_components",
  "利用可能なコンポーネントの一覧を取得する",
  {},
  () => ({
    content: [{
      type: "text",
      text: JSON.stringify(getAllComponents().map(comp => comp.name), null, 2)
    }]
  })
);

// 個別のコンポーネント情報を取得するツール
server.tool(
  "get_component_info",
  "指定されたコンポーネントの詳細情報を取得する",
  {
    name: z.string().describe("コンポーネント名")
  },
  ({ name }) => {
    const componentInfo = getComponentInfo(name, "");
    if (!componentInfo) {
      throw new Error(`Component ${name} not found`);
    }

    return {
      content: [{
        type: "text",
        text: JSON.stringify(componentInfo, null, 2)
      }]
    };
  }
);

// 全てのデザイントークンを取得するツール
server.tool(
  "get_design_tokens",
  "全てのデザイントークンを取得する",
  {},
  () => ({
    content: [{
      type: "text",
      text: JSON.stringify(getAllDesignTokens(), null, 2)
    }]
  })
);

// 特定のデザイントークンを取得するツール
server.tool(
  "get_design_token",
  "指定した種類のデザイントークンを取得する",
  {
    type: TokenType.describe("デザイントークンの種類")
  },
  ({ type }) => ({
    content: [{
      type: "text",
      text: JSON.stringify(getDesignToken(type), null, 2)
    }]
  })
);

// アイコン一覧を取得するツール
server.tool(
  "get_icons",
  "アイコンの一覧を取得します",
  {},
  async () => ({
    content: [{
      type: "text",
      text: JSON.stringify(await getAllIcons(), null, 2)
    }]
  })
);

// 個別のアイコン情報を取得するツール
server.tool(
  "get_icon_info",
  "指定したアイコンの情報を取得します",
  {
    name: z.string().describe("アイコン名")
  },
  async ({ name }: { name: string }) => ({
    content: [{
      type: "text",
      text: JSON.stringify(await getIconInfo(name), null, 2)
    }]
  })
);

// アイコンの使用例コードを取得するツール
server.tool(
  "get_icon_sample_code",
  "指定したアイコンの使用例コードを取得します",
  {
    name: z.string().describe("アイコン名")
  },
  async ({ name }: { name: string }) => {
    const iconInfo = await getIconInfo(name);
    if (!iconInfo) {
      throw new Error(`Icon "${name}" not found`);
    }
    return {
      content: [{
        type: "text",
        text: generateIconSampleCode(name)
      }]
    };
  }
);

// CSSカラートークンを取得するツール
server.tool(
  "get_css_color_tokens",
  "CSSで定義されたカラートークンを取得する",
  {},
  () => {
    const css = `/* custom properties https://www.w3.org/TR/css-variables/ */
:root {
  /**
   * Ameba Color Palette from Spindle (Design System)
   */

  /**
   * Swatch Colors
   */

  /* Brand Colors */
  --ameba-green: #2d8c3c;
  --ameba-black: #000;
  --ameba-yellow-green: #82be28;
  --ameba-neutral-gray: #f6f6f6;
  --ameba-white: #fff;
  --ameba-yellow: #f5e100;

  /* Base Colors */
  --primary-green-100: #0f5c1f;
  --primary-green-90: #186b27;
  --primary-green-80: #237b31;
  --primary-green-70: #298737;
  --primary-green-60: #389e46;
  --primary-green-50: #41ad4f;
  --primary-green-40: #5eb969;
  --primary-green-30: #7bc583;
  --primary-green-20: #a1d5a7;
  --primary-green-10: #c6e5c9;
  --primary-green-5: #e7f5e9;
  --secondary-green-100: #366600;
  --secondary-green-90: #427504;
  --secondary-green-80: #477d00;
  --secondary-green-70: #5e9b15;
  --secondary-green-60: #73ae20;
  --secondary-green-50: #82be28;
  --secondary-green-40: #95c84d;
  --secondary-green-30: #a9d16f;
  --secondary-green-20: #c2de99;
  --secondary-green-10: #daebc1;
  --secondary-green-5: #f0f7e6;
  --gray-100: #08121a;
  --gray-90-alpha: rgba(8, 18, 26, 0.95);
  --gray-80-alpha: rgba(8, 18, 26, 0.8);
  --gray-70-alpha: rgba(8, 18, 26, 0.74);
  --gray-60-alpha: rgba(8, 18, 26, 0.61);
  --gray-50-alpha: rgba(8, 18, 26, 0.47);
  --gray-40-alpha: rgba(8, 18, 26, 0.4);
  --gray-30-alpha: rgba(8, 18, 26, 0.3);
  --gray-20-alpha: rgba(8, 18, 26, 0.16);
  --gray-10-alpha: rgba(8, 18, 26, 0.08);
  --gray-5-alpha: rgba(8, 18, 26, 0.04);
  --gray-90: #141e25;
  --gray-80: #394148;
  --gray-70: #464d53;
  --gray-60: #686e73;
  --gray-50: #8b9093;
  --gray-40: #9ca0a3;
  --gray-30: #b5b8ba;
  --gray-20: #d8d9da;
  --gray-10: #ebeced;
  --gray-5: #f5f6f6;
  --white-100: #fff;
  --white-90-alpha: rgba(255, 255, 255, 0.9);
  --white-80-alpha: rgba(255, 255, 255, 0.8);
  --white-70-alpha: rgba(255, 255, 255, 0.7);
  --white-60-alpha: rgba(255, 255, 255, 0.6);
  --white-50-alpha: rgba(255, 255, 255, 0.5);
  --white-40-alpha: rgba(255, 255, 255, 0.43);
  --white-30-alpha: rgba(255, 255, 255, 0.3);
  --white-20-alpha: rgba(255, 255, 255, 0.16);
  --white-10-alpha: rgba(255, 255, 255, 0.1);
  --white-5-alpha: rgba(255, 255, 255, 0.05);
  --black-100: #000;
  --black-90-alpha: rgba(0, 0, 0, 0.9);
  --black-80-alpha: rgba(0, 0, 0, 0.8);
  --black-70-alpha: rgba(0, 0, 0, 0.7);
  --black-60-alpha: rgba(0, 0, 0, 0.6);
  --black-50-alpha: rgba(0, 0, 0, 0.5);
  --black-40-alpha: rgba(0, 0, 0, 0.4);
  --black-30-alpha: rgba(0, 0, 0, 0.3);
  --black-20-alpha: rgba(0, 0, 0, 0.2);
  --black-10-alpha: rgba(0, 0, 0, 0.1);
  --black-5-alpha: rgba(0, 0, 0, 0.05);
  --caution-red-100: #d91c0b;
  --caution-red-20-alpha: rgba(217, 28, 11, 0.2);
  --caution-red-5-alpha: rgba(217, 28, 11, 0.05);
  --caution-red-vivid-100: #ff6a59;
  --caution-red-vivid-20-alpha: rgba(255, 106, 89, 0.2);
  --caution-red-vivid-5-alpha: rgba(255, 106, 89, 0.05);

  /* Expressive Colors */
  --expressive-blue: #4795c8;
  --expressive-green: #4ac3aa;
  --expressive-purple: #ca5ce6;
  --expressive-lavender: #755ce6;
  --expressive-orange: #e6815c;
  --expressive-yellow: #e6ac5c;
  --expressive-pink: #e6456a;

  /* Third Party Colors */
  --facebook-blue: #1877f2;
  --facebook-white: #fff;
  --twitter-blue: #1da1f2;
  --twitter-white: #fff;
  --x-black: #000;
  --x-white: #fff;
  --instagram-pink: #f20076;
  --apple-black: #000;
  --apple-white: #fff;
  --youtube-red: #f00;
  --youtube-white: #fff;
  --amazon-yellow: #f90;
  --amazon-black: #000;
  --rakuten-red: #bf0000;
  --rakuten-white: #fff;
  --yahoo-red: #f03;
  --yahoo-white: #fff;

  /* System Colors */
  --focus-blue-100: #0091ff;
  --focus-blue-30-alpha: rgba(0, 145, 255, 0.3);
  --highlight-yellow-100: #f5e100;
  --highlight-yellow-30-alpha: rgba(245, 225, 0, 0.3);
}`;

    const tokens = parseCssColorTokens(css);
    return {
      content: [{
        type: "text",
        text: JSON.stringify(tokens, null, 2)
      }]
    };
  }
);

// Figmaデータを抽出する関数
function extractFigmaUrl(figmaFileContent: string): string | null {
  // figma.connect()の第二引数を抽出する正規表現
  const figmaConnectMatch = figmaFileContent.match(/figma\.connect\([^,]+,\s*['"]([^'"]+)['"]/);

  if (figmaConnectMatch && figmaConnectMatch[1]) {
    return figmaConnectMatch[1];
  }

  return null;
}

// コンポーネントのFigmaデータを取得する関数
async function getComponentFigmaData(componentName: string): Promise<{ name: string, figmaUrl: string } | null> {
  const componentInfo = getComponentInfo(componentName, "");

  if (!componentInfo || !componentInfo.figma) {
    return null;
  }

  const figmaUrl = extractFigmaUrl(componentInfo.figma.content);

  if (!figmaUrl) {
    return null;
  }

  return {
    name: componentName,
    figmaUrl
  };
}

// 全コンポーネントのFigmaデータを取得する関数
async function getAllComponentsFigmaData(): Promise<Array<{ name: string, figmaUrl: string }>> {
  const components = getAllComponents();
  const figmaData = [];

  for (const component of components) {
    if (component.figma) {
      const figmaUrl = extractFigmaUrl(component.figma.content);
      if (figmaUrl) {
        figmaData.push({
          name: component.name,
          figmaUrl
        });
      }
    }
  }

  return figmaData;
}

// Figmaデータを取得するツール
server.tool(
  "get_component_figma_url",
  "指定したコンポーネントのFigmaデザインデータURLを取得する",
  {
    name: z.string().describe("コンポーネント名")
  },
  async ({ name }: { name: string }) => {
    const figmaData = await getComponentFigmaData(name);

    if (!figmaData) {
      throw new Error(`No Figma data found for component ${name}`);
    }

    return {
      content: [{
        type: "text",
        text: JSON.stringify(figmaData, null, 2)
      }]
    };
  }
);

// 全コンポーネントのFigmaデータを取得するツール
server.tool(
  "get_all_components_figma_urls",
  "全てのコンポーネントのFigmaデザインデータURLを取得する",
  {},
  async () => {
    const figmaData = await getAllComponentsFigmaData();

    if (figmaData.length === 0) {
      return {
        content: [{
          type: "text",
          text: "No Figma data found for any component"
        }]
      };
    }

    return {
      content: [{
        type: "text",
        text: JSON.stringify(figmaData, null, 2)
      }]
    };
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Example MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
