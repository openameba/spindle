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
function SvgStampside(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M21 16.5v1.25c0 .41-.34.75-.75.75H3.75c-.41 0-.75-.34-.75-.75V16.5c0-1.66 1.34-3 3-3h4.5v-1.77c0-.87-.42-1.65-1.05-2.24-.93-.86-1.42-2.17-1.11-3.59a3.73 3.73 0 012.77-2.8 3.751 3.751 0 014.63 3.65c0 1.09-.47 2.07-1.21 2.75-.63.58-1.04 1.37-1.04 2.23v1.77H18c1.66 0 3 1.34 3 3zm-.75 3H3.75c-.41 0-.75.34-.75.75s.34.75.75.75h16.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z" })));
}
exports.default = SvgStampside;
//# sourceMappingURL=Stampside.js.map