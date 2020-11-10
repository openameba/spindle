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
function SvgNews(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M19.5 3H8c-1.1 0-2 .9-2 2v1H4.5c-1.1 0-2 .9-2 2v8.5C2.5 18.98 4.52 21 7 21h10c2.48 0 4.5-2.02 4.5-4.5V5c0-1.1-.9-2-2-2zm0 13.5A2.5 2.5 0 0117 19H7a2.5 2.5 0 01-2.5-2.5V8H6v8c0 .55.45 1 1 1s1-.45 1-1V5h11.5v11.5zm-9.68-6.1V6.9c0-.28.22-.5.5-.5h7.28c.28 0 .5.22.5.5v3.5c0 .28-.22.5-.5.5h-7.28c-.28 0-.5-.23-.5-.5zm8.32 2.8v1.71c0 .28-.22.5-.5.5h-1.71c-.28 0-.5-.22-.5-.5V13.2c0-.28.22-.5.5-.5h1.71c.27 0 .5.23.5.5zm-8.39.28c0-.41.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3c-.41 0-.75-.34-.75-.75zm0 3c0-.41.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3c-.41 0-.75-.34-.75-.75z" })));
}
exports.default = SvgNews;
//# sourceMappingURL=News.js.map