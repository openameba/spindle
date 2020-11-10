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
function SvgKaomoji(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M8.51 11.05c.12.22.15.29.15.44 0 .37-.34.58-.67.58-.34 0-.45-.21-.56-.44l-.56-1.13-.57 1.15c-.1.21-.21.43-.56.43-.32 0-.66-.22-.66-.58 0-.16.04-.24.16-.45l.96-1.83c.13-.26.27-.52.66-.52.4 0 .53.25.67.52l.98 1.83zm9.29-1.83c-.14-.27-.27-.52-.67-.52-.39 0-.53.27-.66.53l-.97 1.83c-.12.21-.16.29-.16.45 0 .36.34.58.66.58.36 0 .46-.22.56-.43l.57-1.14.57 1.14c.12.23.22.43.56.43.33 0 .67-.22.67-.58 0-.15-.04-.22-.15-.44l-.98-1.85zM3.98 9.13c0-.3-.24-.43-.46-.43-.34 0-.53.26-.62.39-.27.37-.9 1.42-.9 2.91 0 1.38.54 2.38.87 2.86.11.15.3.44.66.44.22 0 .46-.13.46-.43 0-.14-.05-.23-.11-.36l-.12.05.11-.06c-.22-.39-.67-1.2-.67-2.5 0-.89.21-1.71.64-2.47.1-.18.14-.26.14-.4zm17.15.01c-.1-.15-.3-.44-.66-.44-.22 0-.46.13-.46.43 0 .14.05.22.12.35l.12-.04-.11.06c.2.36.66 1.19.66 2.5 0 1.29-.45 2.11-.67 2.51-.07.13-.12.22-.12.36 0 .28.23.43.46.43.3 0 .49-.21.62-.38.28-.38.91-1.43.91-2.92 0-1.39-.54-2.39-.87-2.86zm-6.56 2.91c0 1.54-1.15 2.8-2.57 2.8s-2.57-1.26-2.57-2.8c0-1.54 1.15-2.8 2.57-2.8s2.57 1.26 2.57 2.8zm-1.25 0c0-.86-.59-1.55-1.32-1.55-.73 0-1.32.7-1.32 1.55 0 .85.59 1.55 1.32 1.55.73 0 1.32-.69 1.32-1.55z" })));
}
exports.default = SvgKaomoji;
//# sourceMappingURL=Kaomoji.js.map