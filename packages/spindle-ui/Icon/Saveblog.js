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
function SvgSaveblog(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M9.46 4.49c-.31-.23-.15-.73.24-.73H11v-1.8c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v1.81h1.3c.39 0 .55.5.23.72l-2.3 1.66c-.14.1-.33.1-.47 0l-2.3-1.66zM17 10.02v8.57a2.86 2.86 0 01-2.86 2.86H9.86A2.86 2.86 0 017 18.59v-8.57a2.86 2.86 0 012.86-2.86h4.29c1.57 0 2.85 1.29 2.85 2.86zm-6.43-.89c0 .3.24.54.54.54h1.79c.3 0 .54-.24.54-.54 0-.3-.24-.54-.54-.54h-1.79c-.3 0-.54.24-.54.54zm2.14 10.18c0-.39-.32-.71-.71-.71-.39 0-.71.32-.71.71 0 .39.32.71.71.71.39 0 .71-.32.71-.71zm2.15-7.5c0-.39-.32-.71-.71-.71H9.86c-.39 0-.71.32-.71.71v4.64c0 .39.32.71.71.71h4.29c.39 0 .71-.32.71-.71v-4.64z" })));
}
exports.default = SvgSaveblog;
//# sourceMappingURL=Saveblog.js.map