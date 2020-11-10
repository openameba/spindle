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
function SvgExpand(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M10 4c0 .55-.45 1-1 1H5v4c0 .55-.45 1-1 1s-1-.45-1-1V5c0-1.1.9-2 2-2h4c.55 0 1 .45 1 1zm10 10c-.55 0-1 .45-1 1v4h-4c-.55 0-1 .45-1 1s.45 1 1 1h4c1.1 0 2-.9 2-2v-4c0-.55-.45-1-1-1zM19 3h-4c-.55 0-1 .45-1 1s.45 1 1 1h2.59l-3.2 3.2a.996.996 0 00.71 1.7c.26 0 .51-.1.71-.29l3.2-3.2V9c0 .55.45 1 1 1s1-.45 1-1V5C21 3.9 20.1 3 19 3zM9.71 14.29a.996.996 0 00-1.41 0L5 17.59V15c0-.55-.45-1-1-1s-1 .45-1 1v4c0 1.1.9 2 2 2h4c.55 0 1-.45 1-1s-.45-1-1-1H6.41l3.29-3.29c.4-.39.4-1.03.01-1.42z" })));
}
exports.default = SvgExpand;
//# sourceMappingURL=Expand.js.map