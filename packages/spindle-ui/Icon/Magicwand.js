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
function SvgMagicwand(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M8.4 10.56a1.49 1.49 0 010-2.12 1.49 1.49 0 012.12 0c.59.59.59 1.54 0 2.12-.59.59-1.54.59-2.12 0zM8.71 3h1.5-1.5zm1.5 3.5h-1.5 1.5zm9.57 13.33c.29-.29.29-.77 0-1.06l-7.27-7.27a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l7.27 7.27c.3.29.77.29 1.06 0zM6.46 9.5c0-.41-.34-.75-.75-.75h-2c-.41 0-.75.34-.75.75s.34.75.75.75h2c.41 0 .75-.34.75-.75zm-.54 4.6l1.41-1.41c.29-.29.29-.77 0-1.06a.754.754 0 00-1.06 0l-1.41 1.41c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0zm1.54-6.63c.29-.29.29-.77 0-1.06L5.95 4.9a.754.754 0 00-1.06 0c-.29.3-.29.77 0 1.06L6.4 7.47c.29.29.76.29 1.06 0zm2.78-1.72v-2a.749.749 0 10-1.5 0v2c0 .41.34.75.75.75s.75-.34.75-.75zm2.4 1.63l1.41-1.41c.29-.29.29-.77 0-1.06a.754.754 0 00-1.06 0l-1.41 1.41c-.29.29-.29.77 0 1.06.29.29.76.29 1.06 0z" })));
}
exports.default = SvgMagicwand;
//# sourceMappingURL=Magicwand.js.map