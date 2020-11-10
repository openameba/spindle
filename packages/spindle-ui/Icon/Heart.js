"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
function SvgHeart(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M12 22.06c-.92 0-1.85-.32-2.6-.97L7 19.03a21.32 21.32 0 01-4.59-5.55 7.81 7.81 0 01.62-8.7C4.18 3.3 5.97 2.5 7.87 2.58c1.62.08 3.12.85 4.13 2.1a5.73 5.73 0 014.14-2.12c1.87-.1 3.68.72 4.83 2.2 1.96 2.52 2.2 5.94.62 8.71-1.2 2.11-2.75 3.97-4.59 5.55l-2.4 2.06c-.75.65-1.68.98-2.6.98zM7.54 4.56c-1.16 0-2.22.51-2.94 1.44a5.812 5.812 0 00-.46 6.48c1.09 1.91 2.49 3.6 4.15 5.02l2.41 2.06c.75.65 1.85.65 2.6 0l2.41-2.06c1.67-1.43 3.06-3.12 4.15-5.02 1.18-2.06 1-4.61-.46-6.48a3.645 3.645 0 00-3.15-1.44c-1.24.07-2.32.71-2.97 1.77-.55.89-2 .89-2.55 0a3.673 3.673 0 00-2.97-1.77h-.22z" })));
}
exports.default = SvgHeart;
//# sourceMappingURL=Heart.js.map