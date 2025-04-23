"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenType = void 0;
exports.getDesignToken = getDesignToken;
exports.getAllDesignTokens = getAllDesignTokens;
const path_1 = __importDefault(require("path"));
const zod_1 = require("zod");
const fs_1 = __importDefault(require("fs"));
// デザイントークンの種類を定義
function getTokenTypes() {
    const tokenDir = path_1.default.join(__dirname, '../../spindle-tokens/tokens');
    const types = fs_1.default
        .readdirSync(tokenDir)
        .filter((file) => file.endsWith('.tokens.json'))
        .map((file) => file.replace('.tokens.json', ''));
    if (types.length === 0) {
        throw new Error('No token files found');
    }
    return [types[0], ...types.slice(1)];
}
exports.TokenType = zod_1.z.enum(getTokenTypes());
function getDesignToken(tokenType) {
    const tokenPath = path_1.default.join(__dirname, '../../spindle-tokens/tokens', `${tokenType}.tokens.json`);
    if (!fs_1.default.existsSync(tokenPath)) {
        throw new Error(`Token file for ${tokenType} not found`);
    }
    const content = fs_1.default.readFileSync(tokenPath, 'utf-8');
    return JSON.parse(content);
}
function getAllDesignTokens() {
    const tokens = {};
    exports.TokenType.options.forEach((tokenType) => {
        try {
            tokens[tokenType] = getDesignToken(tokenType);
        }
        catch (error) {
            console.error(`Failed to load ${tokenType} tokens:`, error);
        }
    });
    return tokens;
}
