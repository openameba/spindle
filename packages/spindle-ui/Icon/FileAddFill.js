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
function SvgFileAddFill(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M12 18.5c0-3.6 2.9-6.5 6.5-6.5.5 0 1 .1 1.5.2V9.8c0-.8-.3-1.6-.9-2.1l-4.8-4.8c-.6-.6-1.3-.9-2.1-.9H7C5.3 2 4 3.3 4 5v14c0 1.7 1.3 3 3 3h6c-.6-1-1-2.2-1-3.5zm0-13.3c0-.4.5-.7.9-.4l4.3 4.3c.3.3.1.9-.4.9H13c-.6 0-1-.4-1-1V5.2zm6.5 8.3c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm2.5 5.7h-1.8V21c0 .4-.3.8-.8.8s-.8-.3-.8-.8v-1.8H16c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h1.8V16c0-.4.3-.8.8-.8s.8.3.8.8v1.8H21c.4 0 .8.3.8.8s-.4.6-.8.6z" })));
}
exports.default = SvgFileAddFill;
//# sourceMappingURL=FileAddFill.js.map