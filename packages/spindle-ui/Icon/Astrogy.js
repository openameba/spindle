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
function SvgAstrogy(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M12.3 21c-2.5 0-4.8-1-6.5-2.9-.5-.5-.6-1.3-.3-2s1-1 1.7-.9h1.1C12 15 15 12 15.2 8.3V7.2c-.1-.7.3-1.4.9-1.7.7-.3 1.4-.2 2 .3 2.1 1.9 3.2 4.8 2.8 7.7-.5 3.8-3.7 7-7.5 7.5h-1.1zM7 16.7c-.1 0-.2.1-.2.1 0 .1-.1.2 0 .3 1.6 1.8 4 2.7 6.4 2.3 3.2-.4 5.8-3 6.2-6.2.3-2.4-.5-4.8-2.3-6.4-.1-.1-.2-.1-.3 0-.1 0-.1.1-.1.2 0 .4.1.9 0 1.4-.2 4.4-3.9 8.1-8.3 8.3-.4.1-.9.1-1.4 0 .1 0 .1 0 0 0zm4-11.1l-2.2-.2-.9-2c-.2-.5-1-.5-1.2 0l-.9 2-2.1.2c-.6.1-.8.8-.4 1.2l1.6 1.5-.4 2.1c-.1.6.5 1 1 .7L7.3 10l1.9 1.1c.5.3 1.1-.2 1-.7l-.4-2.2 1.6-1.5c.4-.3.2-1-.4-1.1z" })));
}
exports.default = SvgAstrogy;
//# sourceMappingURL=Astrogy.js.map