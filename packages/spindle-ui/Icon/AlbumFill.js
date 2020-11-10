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
function SvgAlbumFill(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M4.5 15.82a2.99 2.99 0 01-2-2.82V7c0-1.66 1.34-3 3-3h9c1.3 0 2.4.84 2.82 2H7.5c-1.65 0-3 1.35-3 3v6.82zM21 10.5v6c0 1.66-1.34 3-3 3H9c-1.66 0-3-1.34-3-3v-6c0-1.66 1.34-3 3-3h9c1.66 0 3 1.34 3 3zM10.5 10c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm9 6.5v-1.62a.47.47 0 00-.15-.35l-2.23-2.23a.996.996 0 00-1.41 0l-3.06 3.06c-.2.2-.51.2-.71 0l-.73-.73a.996.996 0 00-1.41 0l-2.01 2.01a.5.5 0 00-.08.61c.25.44.73.75 1.29.75h9c.83 0 1.5-.67 1.5-1.5z" })));
}
exports.default = SvgAlbumFill;
//# sourceMappingURL=AlbumFill.js.map