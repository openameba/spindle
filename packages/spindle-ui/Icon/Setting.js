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
function SvgSetting(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M21.17 10.28l-1.96-.31c-.16-.58-.39-1.13-.68-1.65l1.17-1.6c.29-.4.25-.95-.1-1.3L18.57 4.4c-.35-.35-.9-.39-1.3-.1l-1.6 1.17a7.37 7.37 0 00-1.64-.68l-.31-1.96a1 1 0 00-.99-.84h-1.46c-.49 0-.91.36-.99.84l-.31 1.96c-.57.16-1.13.39-1.64.68L6.73 4.3c-.4-.29-.95-.25-1.3.1L4.4 5.43c-.35.35-.39.9-.1 1.3l1.17 1.6a7.37 7.37 0 00-.68 1.64l-1.96.31a1 1 0 00-.84.99v1.46c0 .49.36.91.84.99l1.96.31c.16.58.39 1.13.68 1.64l-1.17 1.6c-.29.4-.25.95.1 1.3l1.03 1.03c.35.35.9.39 1.3.1l1.6-1.17c.51.29 1.07.52 1.64.68l.31 1.96a1 1 0 00.99.84h1.46c.49 0 .91-.36.99-.84l.31-1.96a7.18 7.18 0 001.64-.68l1.6 1.17c.4.29.95.25 1.3-.1l1.03-1.03c.35-.35.39-.9.1-1.3l-1.17-1.6c.29-.51.52-1.07.68-1.65l1.96-.31a1 1 0 00.84-.99v-1.46c.01-.48-.35-.9-.84-.98zM12 16.5c-2.48 0-4.5-2.02-4.5-4.5S9.52 7.5 12 7.5s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5z" })));
}
exports.default = SvgSetting;
//# sourceMappingURL=Setting.js.map