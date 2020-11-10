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
function SvgFolderTwoFill(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M21.7 7.57v7.59c0 .9-.6 1.66-1.42 1.9V9.03c0-1.1-.9-2-2-2h-4.95c-.1 0-.2-.04-.27-.11l-1.14-1.14c-.26-.26-.61-.4-.97-.4H5.23c.24-.84 1-1.46 1.92-1.46h5.22c.36 0 .71.14.97.4l1.14 1.14c.07.07.17.11.27.11h4.95a2 2 0 012 2zm-4.84.92h-4.9a.47.47 0 01-.35-.15l-1.07-1.07c-.29-.27-.67-.43-1.07-.43H4.3c-1.1 0-2 .9-2 2v9.25c0 1.1.9 2 2 2h12.56c1.1 0 2-.9 2-2V10.5c0-1.11-.9-2.01-2-2.01z" })));
}
exports.default = SvgFolderTwoFill;
//# sourceMappingURL=FolderTwoFill.js.map