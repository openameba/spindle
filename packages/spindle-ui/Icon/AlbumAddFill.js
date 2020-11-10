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
function SvgAlbumAddFill(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M13.45 18.985c0-.34.03-.67.09-.99H8.96c-.56 0-1.04-.31-1.3-.76-.11-.2-.08-.45.08-.61l2.01-2.01a.996.996 0 011.41 0l.73.73c.2.2.51.2.71 0l3.06-3.06a.996.996 0 011.41 0l1.23 1.23c.21-.02.43-.04.64-.04.71 0 1.38.14 2.01.38v-3.36c0-1.66-1.34-3-3-3H8.96c-1.66 0-3 1.34-3 3v6c0 1.66 1.34 3 3 3h4.51c-.01-.16-.02-.33-.02-.51zm-2.99-8.98c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-3-4c-1.65 0-3 1.35-3 3v6.82a2.99 2.99 0 01-2-2.82v-6c0-1.66 1.34-3 3-3h9c1.3 0 2.4.84 2.82 2H7.46zm14.78 15.23c-1.03-.92-2.42-1.53-3.98-1.68v1.43c0 .2-.24.31-.39.16l-2.76-2.66a.235.235 0 010-.33l2.76-2.66c.15-.14.39-.04.39.16v1.52c2.11.29 3.82 1.82 4.36 3.84.06.22-.21.37-.38.22z" })));
}
exports.default = SvgAlbumAddFill;
//# sourceMappingURL=AlbumAddFill.js.map