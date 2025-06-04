"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getComponentDesignDocTemplate = getComponentDesignDocTemplate;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function getComponentDesignDocTemplate() {
    const templatePath = path_1.default.join(__dirname, '../../spindle-ui/.scaffdog/design-doc.md');
    if (!fs_1.default.existsSync(templatePath)) {
        return null;
    }
    const content = fs_1.default.readFileSync(templatePath, 'utf-8');
    return {
        template: content,
    };
}
