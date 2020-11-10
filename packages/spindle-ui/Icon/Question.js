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
function SvgQuestion(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M17.41 7.95c0 2.55-1.62 3.91-2.81 4.9-.39.33-.76.64-1.01.93-.18.22-.25.52-.25 1.16 0 .77-.62 1.4-1.39 1.41h-.01c-.77 0-1.4-.62-1.4-1.39 0-.93.1-2.02.9-2.97.41-.49.89-.89 1.36-1.28 1.12-.93 1.8-1.57 1.8-2.75 0-1.14-1.24-2.17-2.59-2.17-1.31 0-2.63.81-2.63 2.37 0 .77-.63 1.4-1.4 1.4-.77 0-1.4-.63-1.4-1.4 0-2.9 2.39-5.17 5.43-5.17 2.93-.02 5.4 2.26 5.4 4.96zm-5.46 9.58c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75-.78-1.75-1.75-1.75z" })));
}
exports.default = SvgQuestion;
//# sourceMappingURL=Question.js.map