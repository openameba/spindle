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
function SvgLockFill(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M18 9.01h-1v-.78c0-2.61-1.9-4.94-4.5-5.2A5.01 5.01 0 007 8.01v1H6c-1.66 0-3 1.34-3 3v6c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3v-6c0-1.66-1.34-3-3-3zm-5.25 6.85v1.4c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.4c-.73-.3-1.25-1.01-1.25-1.85 0-1.1.9-2 2-2s2 .9 2 2c0 .84-.52 1.56-1.25 1.85zM15 9.01H9v-1c0-1.65 1.35-3 3-3s3 1.35 3 3v1z" })));
}
exports.default = SvgLockFill;
//# sourceMappingURL=LockFill.js.map