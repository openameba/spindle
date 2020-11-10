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
function SvgPaletteFill(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.56 4.5C9.09 2.72 3.06 6.62 2.17 10.86c-1.56 7.48 7.59 10.49 13.17 8.48 3.01-1.12 3.01-3.35 2.01-4.46-1.12-1.23-.67-3.46 1.45-2.68 2.12.78 2.79.22 3.12-.78.56-2.01-2.01-5.8-6.36-6.92zM6.02 15.48a1.33 1.33 0 110-2.66c.74 0 1.33.59 1.33 1.33 0 .74-.6 1.33-1.33 1.33zm.89-3.79a1.33 1.33 0 11-.001-2.659 1.33 1.33 0 01.001 2.66zm3.14-2.24a1.33 1.33 0 11-.001-2.659 1.33 1.33 0 01.001 2.66zm3.92-.33a1.33 1.33 0 11-.001-2.659 1.33 1.33 0 01.001 2.66z" })));
}
exports.default = SvgPaletteFill;
//# sourceMappingURL=PaletteFill.js.map