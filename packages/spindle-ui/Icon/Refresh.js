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
function SvgRefresh(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M19.87 14.15c-.67 4.63-5.33 7.91-10.15 6.53-2.93-.84-5.17-3.37-5.65-6.37C3.27 9.33 7.1 5.03 11.92 5V3.46c0-.89 1.08-1.34 1.71-.71l2.54 2.54c.39.39.39 1.02 0 1.41l-2.54 2.54c-.63.63-1.71.18-1.71-.71V7c-3.64.02-6.52 3.3-5.87 7.06a5.992 5.992 0 004.14 4.67c3.65 1.1 7.19-1.37 7.7-4.87a1 1 0 011.13-.85c.55.09.93.59.85 1.14z" })));
}
exports.default = SvgRefresh;
//# sourceMappingURL=Refresh.js.map