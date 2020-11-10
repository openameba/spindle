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
function SvgTvFill(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M17.99 5.4h-3.06l1.26-1.21a.996.996 0 10-1.38-1.44L12.06 5.4h-.11L9.19 2.75c-.4-.38-1.03-.37-1.42.03a.996.996 0 00.03 1.41L9.06 5.4H5.99c-2.21 0-4 1.79-4 4v6.13c0 1.86 1.28 3.41 3 3.86v.08c0 .55.45 1 1 1h2c.53 0 .95-.41.99-.93h6.03c.04.52.46.93.99.93h2c.55 0 1-.45 1-1v-.08c1.72-.45 3-2 3-3.86V9.4c-.01-2.2-1.8-4-4.01-4zm-1 9.07c0 1.1-.9 2-2 2h-8c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v4zm2.5 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" })));
}
exports.default = SvgTvFill;
//# sourceMappingURL=TvFill.js.map