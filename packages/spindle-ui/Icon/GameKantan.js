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
function SvgGameKantan(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M15.85 13.62c0 .76-.62 1.38-1.38 1.38-.76 0-1.38-.62-1.38-1.38 0-.76.62-1.38 1.38-1.38.76.01 1.38.63 1.38 1.38zm1.37-4.12c-.76 0-1.38.62-1.38 1.38 0 .76.62 1.38 1.38 1.38.76 0 1.38-.62 1.38-1.38 0-.76-.62-1.38-1.38-1.38zm-6.15 1.64H9.36V9.43c0-.24-.19-.43-.43-.43h-.86c-.24 0-.43.19-.43.43v1.71H5.93c-.24 0-.43.19-.43.43v.86c0 .24.19.43.43.43h1.71v1.71c0 .24.19.43.43.43h.86c.24 0 .43-.19.43-.43v-1.71h1.71c.24 0 .43-.19.43-.43v-.86c0-.24-.19-.43-.43-.43zM22 12c0 3.5-2.85 6.35-6.35 6.35h-7.3C4.85 18.35 2 15.5 2 12c0-3.5 2.85-6.35 6.35-6.35h7.3C19.15 5.65 22 8.5 22 12zm-2 0c0-2.4-1.95-4.35-4.35-4.35h-7.3C5.95 7.65 4 9.6 4 12c0 2.4 1.95 4.35 4.35 4.35h7.3c2.4 0 4.35-1.95 4.35-4.35z" })));
}
exports.default = SvgGameKantan;
//# sourceMappingURL=GameKantan.js.map