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
function SvgArrowRightBold(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M21 11.873c0-.15-.03-.29-.07-.42-.08-.49-.31-.97-.69-1.35l-5.66-5.66a1.49 1.49 0 00-2.12 0c-.58.59-.59 1.54 0 2.12l3.8 3.8H3.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h12.77l-3.8 3.8a1.49 1.49 0 000 2.12c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.66-5.66c.38-.38.61-.85.69-1.35.03-.11.06-.25.06-.4z" })));
}
exports.default = SvgArrowRightBold;
//# sourceMappingURL=ArrowRightBold.js.map