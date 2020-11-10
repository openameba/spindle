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
function SvgOpenblank(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M18 3H9.5c-1.65 0-3 1.35-3 3v.5H6c-1.65 0-3 1.35-3 3V18c0 1.65 1.35 3 3 3h8.5c1.65 0 3-1.35 3-3v-.5h.5c1.65 0 3-1.35 3-3V6c0-1.65-1.35-3-3-3zm-2.5 15c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V9.5c0-.55.45-1 1-1h.5v6c0 1.65 1.35 3 3 3h6v.5zm3.5-3.5c0 .55-.45 1-1 1H9.5c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1H18c.55 0 1 .45 1 1v8.5zm-1.75-6.25v4.5c0 .55-.45 1-1 1s-1-.45-1-1v-2.59l-3.2 3.2c-.2.2-.45.29-.71.29-.26 0-.51-.1-.71-.29a.996.996 0 010-1.41l3.2-3.2h-2.59c-.55 0-1-.45-1-1s.45-1 1-1h4.5c.84 0 1.51.67 1.51 1.5z" })));
}
exports.default = SvgOpenblank;
//# sourceMappingURL=Openblank.js.map