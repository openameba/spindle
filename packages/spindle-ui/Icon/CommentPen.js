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
function SvgCommentPen(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M9.05 10.99c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .44 1 1zm3-1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm7.95.8v3.18c0 1.1-.9 2-2 2h-2.46c-.55 0-1 .45-1 1v1.94l-3.66-2.74a.984.984 0 00-.6-.2H6c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h11.28l1.31-1.3.52-.52C18.75 4.07 18.39 4 18 4H6C3.79 4 2 5.79 2 8v5.97c0 2.21 1.79 4 4 4h3.95l4.19 3.14a1.498 1.498 0 001.57.14c.51-.25.83-.77.83-1.34v-1.94H18c2.21 0 4-1.79 4-4V8.79l-2 2zm2.8-4.91l-.34.34c-.2.2-.51.2-.71 0l-.92-.92c-.2-.2-.2-.51 0-.71l.34-.34c.2-.2.51-.2.71 0l.92.92c.19.2.19.51 0 .71zm-7.32 4.05l-.41 1.42a.5.5 0 00.62.62l1.42-.41 3.82-3.82c.2-.2.2-.51 0-.71L20 6.11c-.2-.2-.51-.2-.71 0l-3.81 3.82z" })));
}
exports.default = SvgCommentPen;
//# sourceMappingURL=CommentPen.js.map