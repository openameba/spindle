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
function SvgReblogSlash(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M15.82 20.08c.21.45.02.99-.43 1.2a.89.89 0 01-1.2-.42l-.28-.59H7c-1.65 0-3-1.35-3-3v-2.98H1.96c-.45 0-.67-.54-.35-.85l3.04-3.04c.2-.2.51-.2.71 0l3.04 3.04c.32.32.09.85-.35.85H6v2.98c0 .55.45 1 1 1h5.96l-5.7-12H7c-.55 0-1 .45-1 1v1c0 .55-.45 1-1 1s-1-.45-1-1v-1c0-1.43 1-2.62 2.34-2.92l-.15-.32a.903.903 0 01.43-1.2c.45-.21.99-.02 1.2.43l8 16.82zM19 15.26c-.55 0-1 .45-1 1v1c0 .55-.45 1-1 1h-.06l.87 1.82c.01.02.01.03.01.05 1.25-.36 2.18-1.5 2.18-2.87v-1c0-.55-.45-1-1-1zm3.04-5.02H20V7.26c0-1.65-1.35-3-3-3h-6.71l.95 2H17c.55 0 1 .45 1 1v2.98h-2.04c-.45 0-.67.54-.35.85l3.04 3.04c.2.2.51.2.71 0l3.04-3.04c.3-.31.08-.85-.36-.85z" })));
}
exports.default = SvgReblogSlash;
//# sourceMappingURL=ReblogSlash.js.map