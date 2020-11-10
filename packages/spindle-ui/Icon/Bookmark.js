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
function SvgBookmark(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M17.52 20.61c-.25 0-.49-.06-.72-.19L12 17.8l-4.78 2.62c-.47.26-1.02.25-1.49-.02A1.52 1.52 0 015 19.11V5.95c0-1.65 1.35-3 3-3h8.01c1.65 0 3 1.35 3 3v13.16c0 .54-.28 1.02-.74 1.29-.22.14-.49.21-.75.21zM12 15.73c.25 0 .49.06.72.18l4.3 2.35V5.95c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v12.31l4.27-2.34c.23-.13.48-.19.73-.19z" })));
}
exports.default = SvgBookmark;
//# sourceMappingURL=Bookmark.js.map