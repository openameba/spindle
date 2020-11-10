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
function SvgPersonTwoFill(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M4.76 8.34c0-1.65 1.35-3 3-3s3 1.35 3 3-1.34 3-3 3-3-1.35-3-3zm3 4.33c-3.37 0-5.03 1.74-5.68 3.65-.24.72.18 1.49.91 1.69 3.12.88 6.42.88 9.54 0 .73-.21 1.15-.98.91-1.69-.65-1.91-2.31-3.65-5.68-3.65zm8.5-1.33c1.65 0 3-1.34 3-3 0-1.65-1.34-3-3-3-1.65 0-3 1.35-3 3s1.34 3 3 3zm5.68 4.98c-.65-1.91-2.31-3.65-5.68-3.65-.99 0-1.82.16-2.53.42a7.887 7.887 0 012.03 5.28c0 .09-.01.18-.01.27 1.78.05 3.56-.15 5.29-.64.72-.19 1.14-.96.9-1.68z" })));
}
exports.default = SvgPersonTwoFill;
//# sourceMappingURL=PersonTwoFill.js.map