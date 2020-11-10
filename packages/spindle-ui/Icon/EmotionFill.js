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
function SvgEmotionFill(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.16 9.69c0-.84.67-1.52 1.5-1.52s1.5.68 1.5 1.52-.67 1.52-1.5 1.52-1.5-.68-1.5-1.52zm8.62 5.35a4.631 4.631 0 01-3.77 1.95c-1.49 0-2.9-.73-3.77-1.95a.894.894 0 01.21-1.25c.41-.29.97-.2 1.26.21.53.75 1.39 1.19 2.3 1.19.91 0 1.77-.45 2.3-1.19.29-.4.85-.5 1.25-.21.41.28.51.84.22 1.25zm-.44-3.83c-.83 0-1.5-.68-1.5-1.52s.67-1.52 1.5-1.52 1.5.68 1.5 1.52-.67 1.52-1.5 1.52z" })));
}
exports.default = SvgEmotionFill;
//# sourceMappingURL=EmotionFill.js.map