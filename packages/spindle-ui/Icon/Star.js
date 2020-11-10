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
function SvgStar(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M7.9 20.3c-.5 0-1.1-.2-1.6-.5-.9-.6-1.2-1.6-1-2.7L6 14l-2.4-2.2c-.8-.7-1.1-1.8-.8-2.8.3-1 1.2-1.7 2.3-1.8l3.2-.4 1.3-2.9c.4-1 1.4-1.6 2.4-1.6s2 .6 2.4 1.6l1.3 2.9 3.3.4c1 .1 1.9.8 2.2 1.8.3 1 0 2.1-.7 2.8L18.1 14l.6 3.2c.2 1-.2 2.1-1 2.7-.9.6-1.9.7-2.9.2L12 18.4 9.2 20c-.4.2-.8.3-1.3.3zm4.1-16c-.1 0-.4 0-.6.4l-1.8 4-4.3.5c-.4 0-.5.3-.5.4 0 .1-.1.4.2.7l3.2 2.9-.9 4.3c-.1.4.2.6.3.7.1.1.4.2.7 0l3.8-2.2 3.8 2.2c.3.2.6 0 .7 0 .1-.1.3-.3.3-.7l-.9-4.3 3.2-2.9c.3-.3.2-.6.2-.7 0-.1-.2-.4-.5-.4l-4.3-.5-1.8-4c-.3-.3-.6-.4-.8-.4z" })));
}
exports.default = SvgStar;
//# sourceMappingURL=Star.js.map