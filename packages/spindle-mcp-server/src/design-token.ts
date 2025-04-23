import path from 'path';
import { z } from 'zod';
import fs from 'fs';

// デザイントークンの種類を定義
function getTokenTypes(): [string, ...string[]] {
  const tokenDir = path.join(__dirname, '../../spindle-tokens/tokens');
  const types = fs
    .readdirSync(tokenDir)
    .filter((file) => file.endsWith('.tokens.json'))
    .map((file) => file.replace('.tokens.json', ''));

  if (types.length === 0) {
    throw new Error('No token files found');
  }

  return [types[0], ...types.slice(1)] as [string, ...string[]];
}

export const TokenType = z.enum(getTokenTypes());

type TokenType = z.infer<typeof TokenType>;

export function getDesignToken(tokenType: TokenType): object {
  const tokenPath = path.join(
    __dirname,
    '../../spindle-tokens/tokens',
    `${tokenType}.tokens.json`,
  );
  if (!fs.existsSync(tokenPath)) {
    throw new Error(`Token file for ${tokenType} not found`);
  }

  const content = fs.readFileSync(tokenPath, 'utf-8');
  return JSON.parse(content);
}

export function getAllDesignTokens(): Record<TokenType, object> {
  const tokens: Partial<Record<TokenType, object>> = {};

  TokenType.options.forEach((tokenType) => {
    try {
      tokens[tokenType] = getDesignToken(tokenType);
    } catch (error) {
      console.error(`Failed to load ${tokenType} tokens:`, error);
    }
  });

  return tokens as Record<TokenType, object>;
}
