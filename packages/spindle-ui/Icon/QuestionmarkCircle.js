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
function SvgQuestionmarkCircle(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.49 10 10-4.49 10-10 10zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm-.03 11.22c-.56 0-1.02.46-1.02 1.02s.46 1.02 1.02 1.02 1.02-.46 1.02-1.02-.46-1.02-1.02-1.02zm.01-.58c.51 0 .92-.42.92-.93 0-.39.04-.52.12-.61.14-.17.35-.34.58-.53.71-.59 1.67-1.4 1.67-2.94 0-1.63-1.49-3.01-3.25-3.01-1.84 0-3.28 1.37-3.28 3.12 0 .51.41.92.92.92s.92-.41.92-.92c0-.84.72-1.28 1.43-1.28.73 0 1.4.55 1.4 1.16 0 .64-.37.98-1.01 1.52-.28.23-.56.47-.8.76-.49.58-.55 1.24-.55 1.81 0 .52.41.93.93.93-.01 0-.01 0 0 0z" })));
}
exports.default = SvgQuestionmarkCircle;
//# sourceMappingURL=QuestionmarkCircle.js.map