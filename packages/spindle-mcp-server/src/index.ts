import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import express from 'express';
import { z } from 'zod';
import { getAccessibilityDocs } from './accessibility.js';
import { getComponents, getComponentInfo } from './components.js';
import { getAllCssDesignTokens, getCssDesignToken } from './design-token.js';
import { getIconInfo, getIcons } from './icon.js';
import { getComponentDesignDocTemplate } from './design-doc.js';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const VERSION = require('../package.json').version;

const server = new McpServer({
  name: 'ameba-spindle',
  description: 'MCP server for Ameba Design System Spindle',
  version: VERSION,
});

// コンポーネント一覧を取得するツール
server.tool(
  'get_components',
  '利用可能なコンポーネントの一覧を取得します',
  {},
  async () => ({
    content: [
      {
        type: 'text',
        text: JSON.stringify(await getComponents(), null, 2),
      },
    ],
  }),
);

// 個別のコンポーネント情報を取得するツール
server.tool(
  'get_component_info',
  '指定されたコンポーネントの詳細情報を取得します',
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

// 定義されたデザイントークンを取得するツール
server.tool(
  'get_design_tokens',
  '定義されたデザイントークンを取得します',
  {},
  () => ({
    content: [
      {
        type: 'text',
        text: JSON.stringify(getAllCssDesignTokens(), null, 2),
      },
    ],
  }),
);

// 特定のデザイントークンを取得するツール
server.tool(
  'get_design_token',
  '指定した種類のデザイントークンを取得します',
  {
    type: z
      .enum(['color', 'animation', 'font', 'shadow'])
      .describe('デザイントークンの種類'),
  },
  ({ type }) => ({
    content: [
      {
        type: 'text',
        text: JSON.stringify(getCssDesignToken(type), null, 2),
      },
    ],
  }),
);

// アイコン一覧を取得するツール
server.tool('get_icons', 'アイコンの一覧を取得します', {}, async () => ({
  content: [
    {
      type: 'text',
      text: JSON.stringify(await getIcons(), null, 2),
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

// アクセシビリティ関連のドキュメントを取得します
server.tool(
  'get_accessibility_docs',
  'アクセシビリティ関連のドキュメントを取得します',
  {},
  async () => ({
    content: [
      {
        type: 'text',
        text: JSON.stringify(await getAccessibilityDocs(), null, 2),
      },
    ],
  }),
);

// コンポーネント作成用Design Docのテンプレートを取得するツール
server.tool(
  'get_component_design_doc_templete',
  'Design Docのテンプレートを取得します',
  {},
  async () => ({
    content: [
      {
        type: 'text',
        text: JSON.stringify(getComponentDesignDocTemplate(), null, 2),
      },
    ],
  }),
);

async function main() {
  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  // Security: Force localhost binding to prevent external access
  const host = '127.0.0.1';

  const transport = new StreamableHTTPServerTransport({
    sessionIdGenerator: undefined, // Stateless server
    enableJsonResponse: false,
  });

  await server.connect(transport);

  // Create Express app
  const app = express();

  // Security: Origin header validation middleware to prevent DNS rebinding attacks
  app.use((req, res, next) => {
    const origin = req.get('Origin');

    // Validate Origin header for browser requests
    // TODO: add allow origin list
    if (origin) {
      res.status(403).json({
        error: 'Forbidden: Invalid origin',
        message: 'Only localhost origins are allowed',
      });
      return;
    }

    // Validate remote address for direct access
    if (req.socket.remoteAddress !== '127.0.0.1') {
      res.status(403).json({
        error: 'Forbidden: Invalid origin',
        message: 'Only localhost origins are allowed',
      });
      return;
    }

    next();
  });

  // Access logging middleware
  app.use((req, _, next) => {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.url;
    const userAgent = req.get('User-Agent') || 'Unknown';
    const origin = req.get('Origin') || 'Direct';

    console.log(
      `[${timestamp}] ${method} ${url} - ${userAgent} (Origin: ${origin})`,
    );
    next();
  });

  app.use(express.json({ limit: '10mb' }));
  app.use(express.text({ limit: '10mb' }));

  // Health check endpoint
  app.get('/health', (_, res) => {
    res.json({ status: 'ok', server: 'Spindle MCP Server' });
  });

  // MCP endpoint
  app.post('/mcp', (req, res) => {
    transport.handleRequest(req, res, req.body);
  });

  // Start HTTP server
  const httpServer = app.listen(port, host, () => {
    console.error(`Spindle MCP Server running on http://${host}:${port}`);
    console.error(`Health check: http://${host}:${port}/health`);
    console.error(`MCP endpoint: http://${host}:${port}/mcp`);
  });

  // Graceful shutdown
  process.on('SIGINT', async () => {
    console.error('Received SIGINT, shutting down gracefully...');
    httpServer.close(() => {
      console.error('HTTP server closed');
      process.exit(0);
    });
  });

  process.on('SIGTERM', async () => {
    console.error('Received SIGTERM, shutting down gracefully...');
    httpServer.close(() => {
      console.error('HTTP server closed');
      process.exit(0);
    });
  });
}

main().catch((error) => {
  console.error('Fatal error in main():', error);
  process.exit(1);
});
