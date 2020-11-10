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
function SvgCalendar(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M18 4.75h-1.45v-.48c0-.55-.45-1-1-1s-1 .45-1 1v.48H9.44v-.48c0-.55-.45-1-1-1s-1 .45-1 1v.48H6c-1.65 0-3 1.34-3 3v10c0 1.65 1.34 3 3 3h12c1.65 0 3-1.34 3-3v-10c0-1.65-1.35-3-3-3zm1 13c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V10.4h14v7.35zm0-9.34H5v-.66c0-.55.45-1 1-1h1.45v.02c0 .55.45 1 1 1s1-.45 1-1v-.02h5.11v.02c0 .55.45 1 1 1s1-.45 1-1v-.02H18c.55 0 1 .45 1 1v.66zm-8 4.34c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm-3.94 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm0 3.55c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.44-1-1zm3.94 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.44-1-1zm4.05-3.55c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm0 3.55c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.44-1-1z" })));
}
exports.default = SvgCalendar;
//# sourceMappingURL=Calendar.js.map