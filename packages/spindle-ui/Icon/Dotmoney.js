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
function SvgDotmoney(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M20.98 10.62c-.02-.17-.02-.35-.08-.5l-.02-.04-.01-.08c-.74-2.58-4.4-4.51-8.87-4.51-4.45 0-8.19 1.93-8.87 4.51l-.02.08-.01.04c-.06.15-.06.33-.08.5 0 .17 0 .27-.02.29 0 .48.07 1.78.19 2.68.44 3.35 3.95 5.31 8.81 5.31s8.37-1.96 8.81-5.32c.12-.9.19-2.2.19-2.68-.02-.01-.02-.11-.02-.28zm-11.83.06c0-1.21 1-2.2 2.18-2.2.58 0 1.08.19 1.48.58.42-.39.93-.58 1.48-.58 1.21 0 2.2.98 2.2 2.2v1.91a.7.7 0 01-.71.71.69.69 0 01-.69-.71v-1.91c0-.44-.35-.77-.79-.77-.44 0-.77.33-.77.77v1.91a.7.7 0 01-.71.71.69.69 0 01-.69-.71v-1.91c0-.44-.35-.77-.79-.77-.44 0-.77.33-.77.77v1.91a.7.7 0 01-.71.71.69.69 0 01-.69-.71v-1.91h-.02zm-1.85.98a.82.82 0 11-.02 1.64.82.82 0 01.02-1.64zm10.08 4.72c-1.33.79-3.2 1.21-5.38 1.21-2.18 0-4.05-.43-5.38-1.21-1.04-.62-1.72-1.43-2-2.41 1.62 1.41 4.28 2.31 7.38 2.31 3.1 0 5.69-.93 7.38-2.31-.29.98-.96 1.79-2 2.41z" })));
}
exports.default = SvgDotmoney;
//# sourceMappingURL=Dotmoney.js.map