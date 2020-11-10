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
function SvgFlashAuto(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M19.89 20.32l-1.85-4.69c-.2-.51-1.03-.51-1.23 0l-1.85 4.69c-.1.26.02.55.28.65.26.1.55-.02.65-.28l.39-.99h2.29l.39.99c.08.2.27.32.46.32.06 0 .12-.01.18-.04.27-.1.39-.39.29-.65zm-3.21-1.62l.75-1.9.75 1.9h-1.5zm1.27-7.79h-3.67c-.28 0-.51-.23-.51-.51V3.5c0-.48-.61-.7-.91-.32l-7.25 9.01c-.27.34-.03.84.4.84h3.67c.28 0 .51.23.51.51v6.9c0 .48.61.7.91.32l7.25-9.01c.27-.34.03-.84-.4-.84z" })));
}
exports.default = SvgFlashAuto;
//# sourceMappingURL=FlashAuto.js.map