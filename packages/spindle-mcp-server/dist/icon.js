"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIcons = getIcons;
exports.getAllIcons = getAllIcons;
exports.getIconInfo = getIconInfo;
exports.getIconUsage = getIconUsage;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
async function getIcons() {
    const iconList = await getAllIcons();
    const documentation = await fs_1.default.promises.readFile(path_1.default.join(__dirname, '../../spindle-ui/src/Icon', 'index.stories.mdx'), 'utf-8');
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
    const documentation = await fs_1.default.promises.readFile(path_1.default.join(__dirname, '../../spindle-ui/src/Icon', 'index.stories.mdx'), 'utf-8');
    return {
        name: iconName,
        path: iconPath,
        svgPath: pathMatch[1],
        viewBox: svgMatch[1],
        documentation: documentation,
    };
}
async function getIconUsage() {
    const doc = path_1.default.join(__dirname, '../../spindle-icons/README.md');
    const content = await fs_1.default.promises.readFile(doc, 'utf-8');
    return content;
}
