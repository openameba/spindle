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
function SvgStarFaceFill(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M19.76 8.53l-4.58-.52-1.91-4.19c-.5-1.09-2.05-1.09-2.55 0l-1.9 4.19-4.58.52c-1.19.13-1.67 1.61-.79 2.42l3.4 3.11-.92 4.51c-.24 1.18 1.02 2.09 2.06 1.5L12 17.8l4.01 2.27c1.04.59 2.3-.32 2.06-1.5l-.92-4.51 3.4-3.11c.88-.81.4-2.29-.79-2.42zM9 11.12c0-.48.39-.88.88-.88.48 0 .88.39.88.88 0 .48-.39.88-.88.88S9 11.61 9 11.12zm5.17 3.17c-.5.7-1.31 1.11-2.17 1.11-.86 0-1.67-.42-2.17-1.11a.507.507 0 01.11-.7c.23-.16.54-.11.7.12.62.87 2.09.87 2.72 0 .16-.23.47-.28.7-.12.22.16.27.48.11.7zM14.12 12c-.48 0-.88-.39-.88-.88 0-.48.39-.88.88-.88.48 0 .88.39.88.88s-.39.88-.88.88z" })));
}
exports.default = SvgStarFaceFill;
//# sourceMappingURL=StarFaceFill.js.map