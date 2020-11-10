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
function SvgProfilecard(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M17.97 4.01h-12c-2.21 0-4 1.79-4 4v8c0 2.21 1.79 4 4 4h12c2.21 0 4-1.79 4-4v-8c0-2.21-1.79-4-4-4zm2 12c0 1.1-.9 2-2 2h-12c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v8zM7.41 10.1c0-.86.7-1.55 1.55-1.55.86 0 1.55.7 1.55 1.55 0 .86-.7 1.55-1.55 1.55-.85 0-1.55-.69-1.55-1.55zm4.5 4.13c.13.37-.09.77-.47.88-1.62.45-3.33.45-4.94 0a.693.693 0 01-.48-.88c.34-.99 1.19-1.89 2.94-1.89s2.61.91 2.95 1.89zm6.02-4.7c0 .28-.22.5-.5.5h-3.97c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3.97c.28 0 .5.22.5.5zm0 2.5c0 .28-.22.5-.5.5h-3.97c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3.97c.28 0 .5.22.5.5zm0 2.5c0 .28-.22.5-.5.5h-3.97c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3.97c.28 0 .5.22.5.5z" })));
}
exports.default = SvgProfilecard;
//# sourceMappingURL=Profilecard.js.map