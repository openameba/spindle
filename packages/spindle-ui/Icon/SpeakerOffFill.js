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
function SvgSpeakerOffFill(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M11.99 6.47v10.99c0 .89-1.07 1.34-1.71.71l-3.26-3.24H4c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3.11l3.18-3.16c.62-.64 1.7-.19 1.7.7zm6.87 5.49l1.79-1.79a.996.996 0 10-1.41-1.41l-1.79 1.79-1.79-1.79a.996.996 0 10-1.41 1.41l1.79 1.79-1.79 1.79a.996.996 0 00.71 1.7c.26 0 .51-.1.71-.29l1.79-1.79 1.79 1.79c.2.2.45.29.71.29.26 0 .51-.1.71-.29a.996.996 0 000-1.41l-1.81-1.79z" })));
}
exports.default = SvgSpeakerOffFill;
//# sourceMappingURL=SpeakerOffFill.js.map