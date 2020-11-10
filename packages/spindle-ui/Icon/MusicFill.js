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
function SvgMusicFill(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M18.42 4.63c-.57-.48-1.32-.67-2.06-.53l-6.25 1.17a2.506 2.506 0 00-2.03 2.46v6.4c-.31-.11-.65-.18-1-.18-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3V7.73c0-.24.17-.45.41-.49l6.25-1.17c.2-.04.34.05.41.11.07.06.18.18.18.38v5.83c-.31-.11-.65-.18-1-.18-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3V6.56c0-.75-.33-1.45-.91-1.93z" })));
}
exports.default = SvgMusicFill;
//# sourceMappingURL=MusicFill.js.map