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
function SvgShare(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M7.22 8.18a.996.996 0 010-1.41l3.37-3.37a1.983 1.983 0 012.82 0l3.37 3.37a.996.996 0 01-.71 1.7c-.26 0-.51-.1-.71-.29L13 5.81v8.09c0 .55-.45 1-1 1s-1-.45-1-1V5.81L8.63 8.18c-.39.4-1.02.4-1.41 0zm12.8 2.8c-.55 0-1 .45-1 1v6.01c0 .55-.45 1-1 1H5.98c-.55 0-1-.45-1-1v-6.01c0-.55-.45-1-1-1s-1 .45-1 1v6.01c0 1.66 1.35 3 3 3h12.03c1.66 0 3-1.35 3-3v-6.01c.01-.56-.44-1-.99-1z" })));
}
exports.default = SvgShare;
//# sourceMappingURL=Share.js.map