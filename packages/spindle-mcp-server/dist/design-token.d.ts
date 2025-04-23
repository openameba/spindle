import { z } from 'zod';
export declare const TokenType: z.ZodEnum<[string, ...string[]]>;
type TokenType = z.infer<typeof TokenType>;
export declare function getDesignToken(tokenType: TokenType): object;
export declare function getAllDesignTokens(): Record<TokenType, object>;
export {};
