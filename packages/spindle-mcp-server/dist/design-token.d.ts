interface DesignTokens {
    tokenList: Record<string, object>;
    documentation: string;
}
export declare function getCssDesignToken(tokenType: string): object | null;
export declare function getAllCssDesignTokens(): DesignTokens;
export {};
