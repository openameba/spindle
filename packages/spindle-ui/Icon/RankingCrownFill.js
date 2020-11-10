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
function SvgRankingCrownFill(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.49 19.47c0 .41-.34.75-.75.75H5.24c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h13.5c.42 0 .75.34.75.75zm0-13.5a1.498 1.498 0 00-.98 2.63l-2.71 2.43a.998.998 0 01-1.59-.37l-1.65-4.04a1.74 1.74 0 001.18-1.65c0-.97-.78-1.75-1.75-1.75s-1.75.78-1.75 1.75c0 .77.5 1.41 1.18 1.65l-1.65 4.04a.999.999 0 01-1.59.37L5.47 8.6a1.498 1.498 0 00-.98-2.63c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5v7.25c0 .55.45 1 1 1h13c.55 0 1-.45 1-1V8.97c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z" })));
}
exports.default = SvgRankingCrownFill;
//# sourceMappingURL=RankingCrownFill.js.map