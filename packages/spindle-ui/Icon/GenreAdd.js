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
function SvgGenreAdd(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M13.93 21c0 .55-.45 1-1 1H7c-1.65 0-3-1.35-3-3V4.98c0-1.66 1.34-3 3-3h10c1.66 0 3 1.34 3 3v7.83c0 .55-.45 1-1 1s-1-.45-1-1V7.98H6V19c0 .55.45 1 1 1h5.93c.55 0 1 .45 1 1zm1.92-7.55c.28-.27.12-.74-.26-.78l-2.26-.27-.92-2.14a.457.457 0 00-.84 0l-.92 2.14-2.26.27c-.38.05-.54.52-.26.78l1.69 1.64-.45 2.35c-.08.39.34.68.68.48l1.94-1.16 1.94 1.16c.34.2.76-.09.68-.48l-.45-2.35 1.69-1.64zM22 18.3h-2v-2c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1z" })));
}
exports.default = SvgGenreAdd;
//# sourceMappingURL=GenreAdd.js.map