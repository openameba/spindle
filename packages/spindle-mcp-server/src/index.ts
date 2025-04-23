import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { getAllComponents, getComponentInfo } from './components.js';
import {
  getAllDesignTokens,
  getDesignToken,
  TokenType,
} from './design-token.js';
import { getAllIcons, getIconInfo } from './icon.js';

const server = new McpServer({
  name: 'ameba-spindle',
  description: 'MCP server for Ameba Design System Spindle',
  version: require('../package.json').version,
});

// コンポーネント一覧を取得するツール
server.tool(
  'get_components',
  '利用可能なコンポーネントの一覧を取得する',
  {},
  () => ({
    content: [
      {
        type: 'text',
        text: JSON.stringify(
          getAllComponents().map((comp) => comp.name),
          null,
          2,
        ),
      },
    ],
  }),
);

// 個別のコンポーネント情報を取得するツール
server.tool(
  'get_component_info',
  '指定されたコンポーネントの詳細情報を取得する',
  {
    name: z.string().describe('コンポーネント名'),
  },
  ({ name }) => {
    const componentInfo = getComponentInfo(name, '');
    if (!componentInfo) {
      throw new Error(`Component ${name} not found`);
    }

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(componentInfo, null, 2),
        },
      ],
    };
  },
);

// 全てのデザイントークンを取得するツール
server.tool(
  'get_design_tokens',
  '全てのデザイントークンを取得する',
  {},
  () => ({
    content: [
      {
        type: 'text',
        text: JSON.stringify(getAllDesignTokens(), null, 2),
      },
    ],
  }),
);

// 特定のデザイントークンを取得するツール
server.tool(
  'get_design_token',
  '指定した種類のデザイントークンを取得する',
  {
    type: TokenType.describe('デザイントークンの種類'),
  },
  ({ type }) => ({
    content: [
      {
        type: 'text',
        text: JSON.stringify(getDesignToken(type), null, 2),
      },
    ],
  }),
);

// アイコン一覧を取得するツール
server.tool('get_icons', 'アイコンの一覧を取得します', {}, async () => ({
  content: [
    {
      type: 'text',
      text: JSON.stringify(await getAllIcons(), null, 2),
    },
  ],
}));

// 個別のアイコン情報を取得するツール
server.tool(
  'get_icon_info',
  '指定したアイコンの情報を取得します',
  {
    name: z.string().describe('アイコン名'),
  },
  async ({ name }: { name: string }) => ({
    content: [
      {
        type: 'text',
        text: JSON.stringify(await getIconInfo(name), null, 2),
      },
    ],
  }),
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('Spindle MCP Server running on stdio');
}

main().catch((error) => {
  console.error('Fatal error in main():', error);
  process.exit(1);
});
