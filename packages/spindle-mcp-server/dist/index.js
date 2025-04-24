"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mcp_js_1 = require("@modelcontextprotocol/sdk/server/mcp.js");
const stdio_js_1 = require("@modelcontextprotocol/sdk/server/stdio.js");
const zod_1 = require("zod");
const components_js_1 = require("./components.js");
const design_token_js_1 = require("./design-token.js");
const icon_js_1 = require("./icon.js");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const VERSION = require('../package.json').version;
const server = new mcp_js_1.McpServer({
    name: 'ameba-spindle',
    description: 'MCP server for Ameba Design System Spindle',
    version: VERSION,
});
// コンポーネント一覧を取得するツール
server.tool('get_components', '利用可能なコンポーネントの一覧を取得する', {}, () => ({
    content: [
        {
            type: 'text',
            text: JSON.stringify((0, components_js_1.getAllComponents)().map((comp) => comp.name), null, 2),
        },
    ],
}));
// 個別のコンポーネント情報を取得するツール
server.tool('get_component_info', '指定されたコンポーネントの詳細情報を取得する', {
    name: zod_1.z.string().describe('コンポーネント名'),
}, ({ name }) => {
    const componentInfo = (0, components_js_1.getComponentInfo)(name, '');
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
});
// 定義されたデザイントークンを取得するツール
server.tool('get_design_tokens', '定義されたデザイントークンを取得する', {}, () => ({
    content: [
        {
            type: 'text',
            text: JSON.stringify((0, design_token_js_1.getAllCssDesignTokens)(), null, 2),
        },
    ],
}));
// 特定のデザイントークンを取得するツール
server.tool('get_design_token', '指定した種類のデザイントークンを取得する', {
    type: zod_1.z
        .enum(['color', 'animation', 'font', 'shadow'])
        .describe('デザイントークンの種類'),
}, ({ type }) => ({
    content: [
        {
            type: 'text',
            text: JSON.stringify((0, design_token_js_1.getCssDesignToken)(type), null, 2),
        },
    ],
}));
// アイコン一覧を取得するツール
server.tool('get_icons', 'アイコンの一覧を取得します', {}, async () => ({
    content: [
        {
            type: 'text',
            text: JSON.stringify(await (0, icon_js_1.getIcons)(), null, 2),
        },
    ],
}));
// 個別のアイコン情報を取得するツール
server.tool('get_icon_info', '指定したアイコンの情報を取得します', {
    name: zod_1.z.string().describe('アイコン名'),
}, async ({ name }) => ({
    content: [
        {
            type: 'text',
            text: JSON.stringify(await (0, icon_js_1.getIconInfo)(name), null, 2),
        },
    ],
}));
async function main() {
    const transport = new stdio_js_1.StdioServerTransport();
    await server.connect(transport);
    console.error('Spindle MCP Server running on stdio');
}
main().catch((error) => {
    console.error('Fatal error in main():', error);
    process.exit(1);
});
