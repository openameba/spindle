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
function SvgArrowUpBold(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M19.42 8.91l-5.66-5.66c-.38-.38-.85-.61-1.35-.69-.13-.04-.27-.07-.42-.07-.15 0-.29.03-.42.07-.49.08-.97.31-1.35.69L4.56 8.91a1.49 1.49 0 000 2.12c.59.58 1.54.59 2.12 0l3.8-3.8V20c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V7.23l3.8 3.8c.59.59 1.54.59 2.12 0 .29-.29.44-.68.44-1.06s-.12-.76-.42-1.06z" })));
}
exports.default = SvgArrowUpBold;
//# sourceMappingURL=ArrowUpBold.js.map