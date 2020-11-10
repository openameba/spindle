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
function SvgNiceDone(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M7.53 9.64c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm9.04 0c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm-9.08 4.82c.85 1.34 2.71 2.56 4.57 2.56 1.86 0 3.65-1.22 4.55-2.56.19-.28.05-.66-.27-.76-.88-.27-2.59-.69-4.28-.69-1.71 0-3.43.42-4.3.69a.51.51 0 00-.27.76zM12.02 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8c0 .3-.02.6-.05.9-.06.55.33 1.04.88 1.11.55.06 1.04-.33 1.11-.88.04-.37.06-.74.06-1.12 0-5.51-4.49-10-10-10s-10 4.49-10 10 4.49 10 10 10c.55 0 1-.45 1-1s-.45-1.01-1-1.01zm10.47-3.84a.996.996 0 00-1.41 0l-3.44 3.44-1.83-1.5a1 1 0 00-1.41.14 1 1 0 00.14 1.41l2.18 1.78a1.497 1.497 0 002.01-.1l3.76-3.76a.996.996 0 000-1.41z" })));
}
exports.default = SvgNiceDone;
//# sourceMappingURL=NiceDone.js.map