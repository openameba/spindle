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
function SvgBellFillSlash(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M7.5 4.67c.82-.7 1.79-1.21 2.88-1.47.35-.74.92-1.2 1.62-1.2.7 0 1.27.46 1.62 1.2C16.7 3.93 19 6.7 19 10v2.67c0 .65.21 1.28.6 1.8l1 1.33c.51.67.5 1.49.16 2.13L7.5 4.67zM13.73 20h-3.45c-.39 0-.63.43-.43.76.43.74 1.23 1.24 2.15 1.24.92 0 1.72-.5 2.16-1.24.2-.33-.04-.76-.43-.76zM19 19L6.17 6.17 4.5 4.5a.996.996 0 10-1.41 1.41l2.2 2.2C5.11 8.72 5 9.34 5 10v2.67c0 .65-.21 1.28-.6 1.8l-1 1.33C2.41 17.12 3.35 19 5 19h11.17l1.91 1.91c.2.2.45.29.71.29.26 0 .51-.1.71-.29a.996.996 0 000-1.41L19 19z" })));
}
exports.default = SvgBellFillSlash;
//# sourceMappingURL=BellFillSlash.js.map