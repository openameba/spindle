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
function SvgBlog(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M19.92 9v9c0 2.21-1.79 4-4 4h-8c-2.21 0-4-1.79-4-4V6c0-2.21 1.79-4 4-4h5c.55 0 1 .45 1 1s-.45 1-1 1h-5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-.55.45-1 1-1s1 .45 1 1zm-5 7h-6c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1zm0-4h-6c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1zm-6-2h.5c.55 0 1-.45 1-1s-.45-1-1-1h-.5c-.55 0-1 .45-1 1s.45 1 1 1zm9.82-5.12c.1.1.27.1.37 0l.67-.67c.22-.21.22-.55.01-.75l-1.3-1.3a.525.525 0 00-.75 0l-.67.67c-.1.1-.1.27 0 .37l1.67 1.68zm-6.37 2.75l-.51 1.8c-.1.35.22.67.57.57l1.8-.51c.18-.05.35-.15.49-.29l3.2-3.11c.11-.11.13-.28.03-.38L16.23 4c-.09-.09-.26-.08-.38.03l-3.2 3.11c-.13.14-.23.31-.28.49z" })));
}
exports.default = SvgBlog;
//# sourceMappingURL=Blog.js.map