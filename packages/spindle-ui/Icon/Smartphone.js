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
function SvgSmartphone(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M15 22H9c-2.21 0-4-1.79-4-4V6c0-2.21 1.79-4 4-4h6c2.21 0 4 1.79 4 4v12c0 2.21-1.79 4-4 4zM9 4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H9zm5.25 12h-4.5C8.79 16 8 15.21 8 14.25v-5c0-.96.79-1.75 1.75-1.75h4.5c.96 0 1.75.79 1.75 1.75v5c0 .96-.79 1.75-1.75 1.75zm-4.5-7c-.14 0-.25.11-.25.25v5c0 .14.11.25.25.25h4.5c.14 0 .25-.11.25-.25v-5c0-.14-.11-.25-.25-.25h-4.5zM12 19c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm2-13.25c0-.41-.34-.75-.75-.75h-2.5c-.41 0-.75.34-.75.75s.34.75.75.75h2.5c.41 0 .75-.34.75-.75z" })));
}
exports.default = SvgSmartphone;
//# sourceMappingURL=Smartphone.js.map