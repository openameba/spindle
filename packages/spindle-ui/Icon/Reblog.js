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
function SvgReblog(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M20 16.13v1c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3v-2.98H1.96c-.45 0-.67-.54-.35-.85l3.04-3.04c.2-.2.51-.2.71 0L8.4 13.3c.32.32.09.85-.35.85H6v2.98c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1c0-.55.45-1 1-1s1 .45 1 1zm2.04-6.02H20V7.13c0-1.65-1.35-3-3-3H7c-1.65 0-3 1.35-3 3v1c0 .55.45 1 1 1s1-.45 1-1v-1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v2.98h-2.04c-.45 0-.67.54-.35.85L18.65 14c.2.2.51.2.71 0l3.04-3.04c.3-.31.08-.85-.36-.85z" })));
}
exports.default = SvgReblog;
//# sourceMappingURL=Reblog.js.map