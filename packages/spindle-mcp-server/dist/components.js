"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getComponentInfo = getComponentInfo;
exports.getComponents = getComponents;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function getComponentInfo(componentName, directory) {
    const baseDir = path_1.default.join(__dirname, '../../spindle-ui/src');
    const normalizedDir = directory.split('/').filter(Boolean);
    const componentDir = path_1.default.join(baseDir, ...normalizedDir);
    if (!fs_1.default.existsSync(componentDir)) {
        return null;
    }
    function findComponentInDirectory(dir) {
        const entries = fs_1.default.readdirSync(dir, { withFileTypes: true });
        const actualComponentName = path_1.default.basename(componentName, '.tsx');
        // まず現在のディレクトリで検索
        const info = {
            name: actualComponentName,
            directory: path_1.default.relative(baseDir, dir),
        };
        // 実装ファイルを探す
        const implFile = entries.find((entry) => entry.isFile() &&
            entry.name === `${actualComponentName}.tsx` &&
            !entry.name.endsWith('.test.tsx') &&
            !entry.name.endsWith('.stories.tsx') &&
            !entry.name.endsWith('.figma.tsx'));
        if (implFile) {
            const implPath = path_1.default.join(dir, implFile.name);
            info.implementation = {
                name: implFile.name,
                content: fs_1.default.readFileSync(implPath, 'utf-8'),
            };
            // 関連ファイルを探す
            const fileTypes = [
                { key: 'styles', ext: '.css' },
                { key: 'documentation', ext: '.stories.mdx' },
                { key: 'tests', ext: '.test.tsx' },
                { key: 'figma', ext: '.figma.tsx' },
            ];
            for (const { key, ext } of fileTypes) {
                const relatedFile = entries.find((entry) => entry.isFile() && entry.name === `${actualComponentName}${ext}`);
                if (relatedFile) {
                    const filePath = path_1.default.join(dir, relatedFile.name);
                    info[key] = {
                        name: relatedFile.name,
                        content: fs_1.default.readFileSync(filePath, 'utf-8'),
                    };
                }
            }
            return info;
        }
        // サブディレクトリを再帰的に探索
        for (const entry of entries) {
            if (entry.isDirectory() &&
                !['types', 'assets', 'Icon'].includes(entry.name)) {
                const subDirPath = path_1.default.join(dir, entry.name);
                const result = findComponentInDirectory(subDirPath);
                if (result) {
                    return result;
                }
            }
        }
        return null;
    }
    return findComponentInDirectory(componentDir);
}
function getAllComponents() {
    const componentsDir = path_1.default.join(__dirname, '../../spindle-ui/src');
    const components = [];
    function scanDirectory(dir) {
        const entries = fs_1.default.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = path_1.default.join(dir, entry.name);
            const relativePath = path_1.default.relative(componentsDir, fullPath);
            if (entry.isDirectory() &&
                !['types', 'assets', 'Icon'].includes(entry.name)) {
                scanDirectory(fullPath);
            }
            else if (entry.isFile() &&
                entry.name.endsWith('.tsx') &&
                !entry.name.endsWith('.test.tsx') &&
                !entry.name.endsWith('.stories.tsx') &&
                !entry.name.endsWith('.figma.tsx')) {
                const componentName = entry.name.replace('.tsx', '');
                const directory = path_1.default.dirname(relativePath);
                const info = getComponentInfo(componentName, directory);
                if (info) {
                    components.push(info);
                }
            }
        }
    }
    scanDirectory(componentsDir);
    return components;
}
async function getComponents() {
    const components = await getAllComponents();
    const componentList = components.map((comp) => comp.name);
    const documentation = await fs_1.default.promises.readFile(path_1.default.join(__dirname, '../../spindle-ui/README.md'), 'utf-8');
    return {
        componentList,
        documentation,
    };
}
