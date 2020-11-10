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
function SvgImageBanFill(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M11.5 18H5c-.55 0-1-.45-1-1v-.21c0-.13.05-.26.15-.35l3.15-3.15a.996.996 0 011.41 0l1.44 1.44c.2.2.51.2.71 0l4.44-4.44a.996.996 0 011.41 0l1.21 1.21H18c1.51 0 2.9.52 4 1.38V7c0-1.66-1.34-3-3-3H5C3.34 4 2 5.34 2 7v10c0 .23.03.45.08.66 0 .01.01.03.01.04.05.2.12.39.21.58v.01A2.992 2.992 0 005 20h6.82a6.3 6.3 0 01-.32-2zM8 7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm10 6c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 1.5c.69 0 1.34.21 1.88.56l-4.82 4.82c-.35-.54-.56-1.19-.56-1.88 0-1.93 1.57-3.5 3.5-3.5zm0 7c-.69 0-1.34-.21-1.88-.56l4.82-4.82c.35.54.56 1.19.56 1.88 0 1.93-1.57 3.5-3.5 3.5z" })));
}
exports.default = SvgImageBanFill;
//# sourceMappingURL=ImageBanFill.js.map