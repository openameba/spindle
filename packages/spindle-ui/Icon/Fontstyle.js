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
function SvgFontstyle(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M14.03 14.54L9.77 3.76c-.21-.53-.71-.87-1.27-.87-.57 0-1.07.34-1.27.87L2.97 14.54c-.2.51.05 1.09.56 1.3.12.05.25.07.37.07.4 0 .78-.24.93-.63l.93-2.37h5.47l.93 2.37c.2.51.78.76 1.3.56a1 1 0 00.57-1.3zm-7.48-3.63L8.5 5.98l1.94 4.93H6.55zM21 20.04l-2.72-6.89a.986.986 0 00-.92-.63c-.41 0-.77.25-.92.62l-2.72 6.89c-.15.39.04.82.42.97.39.15.82-.04.97-.42l.57-1.44h3.34l.57 1.44c.12.29.4.47.7.47.09 0 .18-.02.28-.05.39-.14.58-.58.43-.96zm-4.72-2.4l1.08-2.74 1.08 2.74h-2.16z" })));
}
exports.default = SvgFontstyle;
//# sourceMappingURL=Fontstyle.js.map