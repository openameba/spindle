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
function SvgBellFill(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M13.73 20c.39 0 .63.43.43.76C13.72 21.5 12.92 22 12 22c-.92 0-1.72-.5-2.16-1.24-.2-.33.04-.76.43-.76h3.46zm5.87-5.53c-.39-.52-.6-1.15-.6-1.8V10c0-3.3-2.3-6.07-5.38-6.8C13.27 2.46 12.7 2 12 2c-.7 0-1.27.46-1.62 1.2C7.3 3.93 5 6.7 5 10v2.67c0 .65-.21 1.28-.6 1.8l-1 1.33C2.41 17.12 3.35 19 5 19h14c1.65 0 2.59-1.88 1.6-3.2l-1-1.33z" })));
}
exports.default = SvgBellFill;
//# sourceMappingURL=BellFill.js.map