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
function SvgHtmltag(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M21.4 13.41l-5.27 5.27c-.2.2-.45.29-.71.29-.26 0-.51-.1-.71-.29a.996.996 0 010-1.41L19.98 12l-5.27-5.27a.996.996 0 111.41-1.41l5.27 5.27c.79.78.79 2.04.01 2.82zM9.19 5.32a.996.996 0 00-1.41 0l-5.27 5.27c-.78.78-.78 2.05 0 2.83l5.27 5.27c.2.2.45.29.71.29.26 0 .51-.1.71-.29a.996.996 0 000-1.41L3.93 12 9.2 6.73c.38-.39.38-1.02-.01-1.41z" })));
}
exports.default = SvgHtmltag;
//# sourceMappingURL=Htmltag.js.map