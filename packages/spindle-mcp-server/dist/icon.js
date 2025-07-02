"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIcons = getIcons;
exports.getIconInfo = getIconInfo;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function getIconDocumentation() {
    return fs_1.default.promises.readFile(path_1.default.join(__dirname, '../../spindle-ui/src/Icon', 'index.mdx'), 'utf-8');
}
async function getIcons() {
    const iconList = await getAllIcons();
    const documentation = await getIconDocumentation();
    return {
        iconList,
        documentation,
    };
}
async function getAllIcons() {
    const iconDir = path_1.default.join(__dirname, '../../spindle-ui/src/Icon');
    const files = await fs_1.default.promises.readdir(iconDir);
    return files
        .filter((file) => file.endsWith('.tsx'))
        .map((file) => file.replace('.tsx', ''));
}
function getIconPath(iconName) {
    return path_1.default.join(__dirname, '../../spindle-ui/src/Icon', `${iconName}.tsx`);
}
async function getIconInfo(iconName) {
    const iconPath = getIconPath(iconName);
    if (!fs_1.default.existsSync(iconPath)) {
        return null;
    }
    const content = await fs_1.default.promises.readFile(iconPath, 'utf-8');
    const svgMatch = content.match(/viewBox="([^"]+)"/);
    const pathMatch = content.match(/<path d="([^"]+)"/);
    if (!svgMatch || !pathMatch) {
        return null;
    }
    const documentation = await getIconDocumentation();
    return {
        name: iconName,
        path: iconPath,
        documentation: documentation,
    };
}
