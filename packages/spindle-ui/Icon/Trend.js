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
function SvgTrend(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M11.97 2C6.46 2 2 6.46 2 11.97c0 5.51 4.46 9.97 9.97 9.97 5.51 0 9.97-4.46 9.97-9.97 0-5.51-4.46-9.97-9.97-9.97zm0 17.92c-2.62 0-4.95-1.28-6.4-3.25l1.95-3.85 1.62 3.17c.35.68 1.03 1.1 1.79 1.1s1.45-.42 1.79-1.1l1.75-3.41 1.36.65c.72.34 1.54-.26 1.42-1.05l-.65-4.44c-.1-.7-.89-1.08-1.5-.72l-3.86 2.29a.998.998 0 00.08 1.76l1.32.63-1.7 3.36-1.62-3.16c-.35-.68-1.03-1.1-1.79-1.1s-1.45.42-1.79 1.1l-1.31 2.56c-.26-.78-.41-1.62-.41-2.49 0-4.38 3.56-7.95 7.95-7.95a7.95 7.95 0 017.95 7.95c0 4.39-3.57 7.95-7.95 7.95z" })));
}
exports.default = SvgTrend;
//# sourceMappingURL=Trend.js.map