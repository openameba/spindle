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
function SvgBeginner(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M10.14 10.58c.23.23.23.61 0 .85-.12.12-.27.18-.42.18-.15 0-.31-.06-.42-.18l-3.5-3.5a.61.61 0 010-.85.61.61 0 01.85 0l3.49 3.5zm10.87-4.66c-.07 1.6-.44 4.55-2.18 6.29-1.35 1.36-3.2 1.68-4.65 1.68-.45 0-.85-.03-1.2-.07 0 .04.02.07.02.11v6c0 .55-.45 1-1 1s-1-.45-1-1v-6c0-.04.02-.07.02-.11-.35.04-.75.07-1.2.07-1.45 0-3.29-.33-4.65-1.68-1.74-1.74-2.11-4.69-2.18-6.29-.01-.44.15-.87.47-1.18.31-.31.73-.5 1.18-.46 1.6.07 4.54.44 6.29 2.18.47.47.82 1.01 1.07 1.57.25-.56.6-1.1 1.07-1.58 1.74-1.74 4.69-2.11 6.29-2.18.47-.03.87.15 1.18.46.32.32.48.75.47 1.19zM11.4 11.2v-.06c0-1.17-.23-2.75-1.32-3.83-1.46-1.46-4.07-1.77-5.49-1.83h-.02c-.14 0-.23.07-.27.11-.04.04-.11.14-.11.28.06 1.43.37 4.04 1.83 5.49 1.46 1.46 3.75 1.41 4.99 1.25.17-.02.3-.15.32-.32.03-.27.06-.65.07-1.09zm7.22-4.54a.61.61 0 00-.85 0L13.44 11a.61.61 0 000 .85c.12.12.27.18.42.18.15 0 .31-.06.42-.18l4.33-4.33c.25-.24.25-.62.01-.86z" })));
}
exports.default = SvgBeginner;
//# sourceMappingURL=Beginner.js.map