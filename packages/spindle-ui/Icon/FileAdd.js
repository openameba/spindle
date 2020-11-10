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
function SvgFileAdd(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M13.5 10.5H18v.71c0 .55.45 1 1 1s1-.45 1-1v-.97c0-1.05-.43-2.08-1.17-2.83l-4.24-4.24A4.021 4.021 0 0011.76 2H8C5.79 2 4 3.79 4 6v12c0 2.21 1.79 4 4 4h4c.55 0 1-.45 1-1s-.45-1-1-1H8c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h3.5v4.5c0 1.1.9 2 2 2zm0-5.59l3.59 3.59H13.5V4.91zM23 18.5c0 .55-.45 1-1 1h-2.5V22c0 .55-.45 1-1 1s-1-.45-1-1v-2.5H15c-.55 0-1-.45-1-1s.45-1 1-1h2.5V15c0-.55.45-1 1-1s1 .45 1 1v2.5H22c.55 0 1 .45 1 1z" })));
}
exports.default = SvgFileAdd;
//# sourceMappingURL=FileAdd.js.map