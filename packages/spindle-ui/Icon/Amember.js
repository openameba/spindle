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
function SvgAmember(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M18.36 18.36a8.96 8.96 0 002.59-7.2c-.38-4.19-3.75-7.63-7.94-8.1A8.995 8.995 0 002.99 12a9 9 0 009 9c.06 0 .12-.01.18-.01h7.62c.45 0 .67-.54.35-.85l-1.78-1.78zm-8.58-1.27c-.64 0-.94-.59-.94-.91 0-.35.16-.47.61-.81 1.08-.78 1.69-2.05 1.71-3.4 0-.35.01-.89.87-.89.84 0 .89.51.89.87.01 3.31-2.38 5.14-3.14 5.14zm5.89-5.53c-1.06 1.42-1.29 1.42-1.55 1.42-.4 0-.91-.35-.91-.86 0-.26.08-.35.5-.79.28-.29.78-.94.78-1.06 0-.05-.06-.05-.09-.05H8.49c-.75 0-.84-.58-.84-.83 0-.46.21-.85.84-.85h7.37c.22 0 1.04 0 1.04.84 0 .48-.75 1.55-1.23 2.18z" })));
}
exports.default = SvgAmember;
//# sourceMappingURL=Amember.js.map