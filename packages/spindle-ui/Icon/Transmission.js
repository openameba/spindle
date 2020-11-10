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
function SvgTransmission(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M14.08 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm2.35-4.25a.996.996 0 10-1.38 1.44c.78.75 1.21 1.75 1.21 2.81s-.43 2.06-1.21 2.81a.996.996 0 00-.03 1.41c.2.2.46.31.72.31.25 0 .5-.09.69-.28A5.833 5.833 0 0018.25 12c0-1.61-.64-3.12-1.82-4.25zm-7.29.03a.996.996 0 00-1.41-.03A5.843 5.843 0 005.9 12c0 1.61.65 3.12 1.82 4.25.19.19.44.28.69.28.26 0 .52-.1.72-.31.38-.4.37-1.03-.03-1.41a3.876 3.876 0 01.01-5.62c.4-.38.41-1.01.03-1.41zm10-2.63a.996.996 0 10-1.38 1.44c1.5 1.45 2.33 3.37 2.33 5.41s-.83 3.96-2.33 5.41a.996.996 0 00-.03 1.41c.2.2.46.31.72.31.25 0 .5-.09.69-.28 1.9-1.83 2.94-4.26 2.94-6.85s-1.05-5.02-2.94-6.85zM4.08 12c0-2.04.83-3.96 2.33-5.41a.996.996 0 10-1.38-1.44C3.12 6.98 2.08 9.41 2.08 12s1.04 5.02 2.94 6.85c.19.19.44.28.69.28.26 0 .52-.1.72-.31.38-.4.37-1.03-.03-1.41-1.5-1.45-2.32-3.37-2.32-5.41z" })));
}
exports.default = SvgTransmission;
//# sourceMappingURL=Transmission.js.map