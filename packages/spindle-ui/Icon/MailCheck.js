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
function SvgMailCheck(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M14.48 12.84c-.73.57-1.6.86-2.48.86-.87 0-1.75-.29-2.48-.86L6.3 10.3a1 1 0 011.24-1.57l3.22 2.54c.73.57 1.75.57 2.48 0l3.22-2.54a.99.99 0 011.4.17c.34.43.27 1.06-.17 1.4l-3.21 2.54zM10 18.11H6c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v5c0 .55.45 1 1 1s1-.45 1-1v-5c0-2.21-1.79-4-4-4H6c-2.21 0-4 1.79-4 4v8c0 2.21 1.79 4 4 4h4c.55 0 1-.45 1-1s-.45-1-1-1zm13.24-2.29a.996.996 0 00-1.41 0l-4.88 4.88-2.36-2.35c-.39-.39-1.03-.39-1.42 0-.39.39-.39 1.03 0 1.42l3.06 3.05c.2.19.45.29.71.29.26 0 .51-.1.71-.29l5.59-5.59a.996.996 0 000-1.41z" })));
}
exports.default = SvgMailCheck;
//# sourceMappingURL=MailCheck.js.map