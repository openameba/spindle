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
function SvgLoading(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M12 7.49c-.55 0-1-.45-1-1v-3.5c0-.55.45-1 1-1s1 .45 1 1v3.5c0 .55-.45 1-1 1zm5.6 5.5H21c.55 0 1-.45 1-1s-.45-1-1-1h-3.4c-.55 0-1 .45-1 1s.45 1 1 1zm1.47 4.66l-2.41-2.41a.996.996 0 10-1.41 1.41l2.41 2.41a.996.996 0 101.41-1.41zM8.75 7.32l-2.41-2.4a.996.996 0 10-1.41 1.41l2.41 2.41c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.42zM3 12.99h3.4c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1zm3.34 6.07l2.41-2.41a.996.996 0 10-1.41-1.41l-2.41 2.41a.996.996 0 101.41 1.41zM13 20.99v-3.4c0-.55-.45-1-1-1s-1 .45-1 1v3.4c0 .55.45 1 1 1s1-.45 1-1z" })));
}
exports.default = SvgLoading;
//# sourceMappingURL=Loading.js.map