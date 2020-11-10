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
function SvgTwitter(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M8.66 19.31c6.79 0 10.51-5.63 10.51-10.51 0-.16 0-.32-.01-.48.72-.51 1.34-1.16 1.84-1.9-.67.3-1.39.49-2.12.58.77-.46 1.35-1.19 1.62-2.04-.72.43-1.52.73-2.35.9a3.698 3.698 0 00-5.23-.16c-.96.9-1.37 2.25-1.07 3.53-2.96-.16-5.72-1.56-7.6-3.87a3.69 3.69 0 001.15 4.93c-.59-.02-1.16-.18-1.68-.46v.05c0 1.76 1.24 3.27 2.96 3.62-.54.15-1.11.17-1.67.06.48 1.5 1.87 2.53 3.45 2.56a7.344 7.344 0 01-4.59 1.58c-.29 0-.59-.02-.88-.05a10.48 10.48 0 005.67 1.66z" })));
}
exports.default = SvgTwitter;
//# sourceMappingURL=Twitter.js.map