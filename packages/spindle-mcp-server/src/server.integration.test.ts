import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { InMemoryTransport } from '@modelcontextprotocol/sdk/inMemory.js';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { createServer } from './server';

describe('MCP Server Integration', () => {
  let client: Client;
  let closeTransport: () => Promise<void> = async () => {};

  beforeAll(async () => {
    const server = createServer();
    const [clientTransport, serverTransport] =
      InMemoryTransport.createLinkedPair();

    await server.connect(serverTransport);
    client = new Client({ name: 'test-client', version: '1.0.0' });
    await client.connect(clientTransport);

    closeTransport = async () => {
      await client.close();
      await server.close();
    };
  });

  afterAll(async () => {
    await closeTransport();
  });

  it('should list all tools', async () => {
    const { tools } = await client.listTools();
    const toolNames = tools.map((t) => t.name);

    expect(toolNames).toContain('get_components');
    expect(toolNames).toContain('get_component_info');
    expect(toolNames).toContain('get_design_tokens');
    expect(toolNames).toContain('get_design_token');
    expect(toolNames).toContain('get_icons');
    expect(toolNames).toContain('get_icon_info');
    expect(toolNames).toContain('get_accessibility_docs');
    expect(toolNames).toContain('get_component_design_doc_templete');
  });

  it('should call get_components', async () => {
    const result = await client.callTool({
      name: 'get_components',
      arguments: {},
    });
    expect(result.isError).toBeFalsy();
  });

  it('should call get_component_info with arguments', async () => {
    const result = await client.callTool({
      name: 'get_component_info',
      arguments: { name: 'Button' },
    });
    expect(result.isError).toBeFalsy();
  });

  it('should call get_design_tokens', async () => {
    const result = await client.callTool({
      name: 'get_design_tokens',
      arguments: {},
    });
    expect(result.isError).toBeFalsy();
  });

  it('should call get_design_token with arguments', async () => {
    const result = await client.callTool({
      name: 'get_design_token',
      arguments: { type: 'color' },
    });
    expect(result.isError).toBeFalsy();
  });

  it('should call get_icons', async () => {
    const result = await client.callTool({
      name: 'get_icons',
      arguments: {},
    });
    expect(result.isError).toBeFalsy();
  });

  it('should call get_icon_info with arguments', async () => {
    const result = await client.callTool({
      name: 'get_icon_info',
      arguments: { name: 'Clock' },
    });
    expect(result.isError).toBeFalsy();
  });

  it('should call get_accessibility_docs', async () => {
    const result = await client.callTool({
      name: 'get_accessibility_docs',
      arguments: {},
    });
    expect(result.isError).toBeFalsy();
  });

  it('should call get_component_design_doc_templete', async () => {
    const result = await client.callTool({
      name: 'get_component_design_doc_templete',
      arguments: {},
    });
    expect(result.isError).toBeFalsy();
  });
});
