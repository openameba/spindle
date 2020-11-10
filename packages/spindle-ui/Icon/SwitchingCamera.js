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
function SvgSwitchingCamera(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M20 5.22v4.29c0 .28-.22.5-.5.5h-4.29c-.45 0-.67-.54-.35-.85l1.4-1.4A5.942 5.942 0 0012.02 6c-2.46 0-4.71 1.55-5.6 3.86a.99.99 0 01-1.29.57c-.52-.2-.77-.78-.58-1.29C5.73 6.07 8.73 4 12.02 4c2.16 0 4.17.86 5.65 2.35l1.48-1.48a.5.5 0 01.85.35zm-1.09 8.35a.998.998 0 00-1.29.58 6.024 6.024 0 01-5.6 3.86c-1.61 0-3.12-.65-4.23-1.77l1.38-1.38c.31-.32.09-.86-.36-.86H4.52c-.28 0-.5.22-.5.5v4.29c0 .45.54.67.85.35l1.5-1.5A7.993 7.993 0 0012.02 20c3.29 0 6.29-2.07 7.47-5.14a.99.99 0 00-.58-1.29zM14.02 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2a2 2 0 002-2z" })));
}
exports.default = SvgSwitchingCamera;
//# sourceMappingURL=SwitchingCamera.js.map