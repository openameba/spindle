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
function SvgPigg(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.99 4.2c-3.65 0-6.65 2.69-6.95 6.09-.02.12-.03 2.06-.03 2.19v6.2c0 1.28 1.04 2.32 2.32 2.32 1.28 0 2.32-1.04 2.32-2.32v-1.61c.73.25 1.51.39 2.33.39 4.22 0 6.99-2.96 6.99-6.61.01-3.66-3.12-6.65-6.98-6.65zM12 13c-1.23 0-2.27-.98-2.27-2.14 0-1.18 1.04-2.18 2.27-2.18 1.22 0 2.28 1.02 2.28 2.18 0 1.16-1.05 2.14-2.28 2.14z" })));
}
exports.default = SvgPigg;
//# sourceMappingURL=Pigg.js.map