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
function SvgQr(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6 4.2h-1.2V3h1.2v1.2zm0 .6h-1.2V6h1.2V4.8zm0 2.4h-1.2V9h1.2V7.2zM9 12.6v-1.2H7.8v1.2H9zm-2.4 0v-1.2H4.8v1.2h1.8zm-2.4-1.2H3v1.2h1.2v-1.2zm7.2 9.6h1.2v-1.2h-1.2V21zm0-2.4h1.2v-1.2h-1.2v1.2zm2.4 0h-.6V21h1.2v-2.4h.6v-1.2h-1.2v1.2zm3.6-2.4V15h-1.2v1.2H15v1.2h1.2v1.2h-.6v1.2h.6V21h1.2v-1.2h-.6v-1.2h.6v-1.2h1.2v-1.2h-1.2zm-6 0h1.2V15h-1.2v1.2zm8.4-1.2h-1.2v1.2h1.2v1.2h-1.2v1.2h1.2v1.2h-1.2V21H21v-2.5h-1.2v-1H21V14h-1.2v1zm-3.6 0v-2.4h.6v-1.2h-1.2v1.2h-1.8v1.2h-1.2v-.6h-1.2v1.2h1.2v.6h1.2v1.2H15V15h1.2zm1.8-1.2v-1.2h-1.2v1.2H18zm-5.4-2.4v-1.2h-1.2v1.2h-1.2v1.2h3.6v-1.2h-1.2zm6 1.2v1.2h1.2v-1.2H21v-1.2h-2.4v1.2zm-13.2 6h2.4v-2.4H5.4v2.4zM3 13.8h7.2V21H3v-7.2zm1.2 6H9V15H4.2v4.8zM18.6 5.4h-2.4v2.4h2.4V5.4zM21 3v7.2h-7.2V3H21zm-1.2 1.2H15V9h4.8V4.2zm-12 1.2H5.4v2.4h2.4V5.4zm2.4 4.8H3V3h7.2v7.2zM9 4.2H4.2V9H9V4.2z" })));
}
exports.default = SvgQr;
//# sourceMappingURL=Qr.js.map