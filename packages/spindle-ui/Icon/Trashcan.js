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
function SvgTrashcan(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M19.25 8.81l-.92 10.59c-.08.91-.83 1.6-1.74 1.6H7.42c-.92 0-1.66-.69-1.74-1.6L4.75 8.81c-.03-.41.27-.77.68-.81.4-.04.78.27.81.68l.92 10.59c.01.13.12.23.25.23h1.82L8.75 8.78A.75.75 0 019.47 8c.41-.04.76.3.78.71l.49 10.78h2.53l.49-10.78c.01-.41.36-.74.77-.71.41.02.73.37.72.78l-.49 10.72h1.82c.13 0 .24-.1.25-.23l.92-10.59c.04-.41.4-.72.81-.68.42.04.72.4.69.81zM20 6.25c0 .41-.34.75-.75.75H4.75C4.34 7 4 6.66 4 6.25s.34-.75.75-.75h3v-.75C7.75 3.78 8.54 3 9.5 3h5c.96 0 1.75.79 1.75 1.75v.75h3c.41 0 .75.34.75.75zM9.25 5.5h5.5v-.75c0-.14-.11-.25-.25-.25h-5c-.14 0-.25.11-.25.25v.75z" })));
}
exports.default = SvgTrashcan;
//# sourceMappingURL=Trashcan.js.map