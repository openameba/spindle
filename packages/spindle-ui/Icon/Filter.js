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
function SvgFilter(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M3 5.5c0-.05.02-.09.03-.14A2.49 2.49 0 015.51 3c1.02 0 1.9.62 2.29 1.5H20c.55 0 1 .45 1 1s-.45 1-1 1H7.8a2.49 2.49 0 01-4.77-.86C3.02 5.59 3 5.55 3 5.5zM4 13h12.23c.39.88 1.26 1.5 2.29 1.5a2.5 2.5 0 000-5c-1.02 0-1.9.62-2.29 1.5H4c-.55 0-1 .45-1 1s.45 1 1 1zm16 4.5H7.8c-.38-.88-1.26-1.5-2.29-1.5-1.33 0-2.41 1.05-2.49 2.36 0 .05-.02.09-.02.14 0 .05.02.09.03.14A2.49 2.49 0 005.51 21c1.02 0 1.9-.62 2.29-1.5H20c.55 0 1-.45 1-1s-.45-1-1-1z" })));
}
exports.default = SvgFilter;
//# sourceMappingURL=Filter.js.map